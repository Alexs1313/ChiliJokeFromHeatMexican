import LinearGradient from 'react-native-linear-gradient';

import React, {useMemo, useState} from 'react';

import {jokefromhtmexhumrGmpPrompts} from '../JokeFromhtmexhumrdata/jokefromhtmexhumrdatagmp';
import {
  Image,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const JokeFromhtmexhumrgmp = () => {
  const [jokefromhtmexhumrPlayerCount, setJokeFromhtmexhumrPlayerCount] =
    useState<3 | 4 | 5>(3);
  const [jokefromhtmexhumrPlayerNames, setJokeFromhtmexhumrPlayerNames] =
    useState<string[]>(['', '', '']);

  const [jokefromhtmexhumrPhase, setJokeFromhtmexhumrPhase] = useState<
    'setup' | 'write' | 'vote' | 'result'
  >('setup');
  const [jokefromhtmexhumrPromptIdx, setJokeFromhtmexhumrPromptIdx] = useState<
    number | null
  >(null);

  const [jokefromhtmexhumrWriterIdx, setJokeFromhtmexhumrWriterIdx] =
    useState(0);
  const [jokefromhtmexhumrDraft, setJokeFromhtmexhumrDraft] = useState('');
  const [jokefromhtmexhumrEndings, setJokeFromhtmexhumrEndings] = useState<
    {playerIdx: number; text: string}[]
  >([]);

  const [jokefromhtmexhumrVoterIdx, setJokeFromhtmexhumrVoterIdx] = useState(0);
  const [jokefromhtmexhumrVotes, setJokeFromhtmexhumrVotes] = useState<
    number[]
  >([]);
  const [jokefromhtmexhumrSelectedEnding, setJokeFromhtmexhumrSelectedEnding] =
    useState<number | null>(null);

  const jokefromhtmexhumrTotalPlayers = jokefromhtmexhumrPlayerCount;
  const jokefromhtmexhumrPrompt =
    jokefromhtmexhumrPromptIdx === null
      ? ''
      : jokefromhtmexhumrGmpPrompts[jokefromhtmexhumrPromptIdx] ?? '';

  const jokefromhtmexhumrAllNamesFilled = jokefromhtmexhumrPlayerNames
    .slice(0, jokefromhtmexhumrPlayerCount)
    .every(n => n.trim().length > 0);

  const jokefromhtmexhumrSetPlayerCount = (count: 3 | 4 | 5) => {
    setJokeFromhtmexhumrPlayerCount(count);
    setJokeFromhtmexhumrPlayerNames(prev => {
      const next = [...prev];
      while (next.length < count) {
        next.push('');
      }
      return next.slice(0, count);
    });
  };

  const jokefromhtmexhumrSetPlayerName = (idx: number, name: string) => {
    setJokeFromhtmexhumrPlayerNames(prev => {
      const next = [...prev];
      next[idx] = name;
      return next;
    });
  };

  const jokefromhtmexhumrStartGame = () => {
    if (!jokefromhtmexhumrAllNamesFilled) {
      return;
    }
    setJokeFromhtmexhumrPromptIdx(
      Math.floor(Math.random() * jokefromhtmexhumrGmpPrompts.length),
    );
    setJokeFromhtmexhumrVotes(new Array(jokefromhtmexhumrPlayerCount).fill(0));
    setJokeFromhtmexhumrEndings([]);
    setJokeFromhtmexhumrWriterIdx(0);
    setJokeFromhtmexhumrVoterIdx(0);
    setJokeFromhtmexhumrSelectedEnding(null);
    setJokeFromhtmexhumrDraft('');
    setJokeFromhtmexhumrPhase('write');
  };

  const jokefromhtmexhumrOnSubmitEnding = () => {
    const text = jokefromhtmexhumrDraft.trim();
    if (!text) {
      return;
    }

    setJokeFromhtmexhumrEndings(prev => [
      ...prev,
      {playerIdx: jokefromhtmexhumrWriterIdx, text},
    ]);
    setJokeFromhtmexhumrDraft('');

    const nextWriter = jokefromhtmexhumrWriterIdx + 1;
    if (nextWriter >= jokefromhtmexhumrTotalPlayers) {
      setJokeFromhtmexhumrPhase('vote');
      setJokeFromhtmexhumrWriterIdx(nextWriter);
      setJokeFromhtmexhumrVoterIdx(0);
      setJokeFromhtmexhumrSelectedEnding(null);
      return;
    }
    setJokeFromhtmexhumrWriterIdx(nextWriter);
  };

  const jokefromhtmexhumrOnVote = () => {
    if (jokefromhtmexhumrSelectedEnding === null) {
      return;
    }
    const chosen = jokefromhtmexhumrSelectedEnding;
    const isOwn =
      jokefromhtmexhumrEndings[chosen]?.playerIdx === jokefromhtmexhumrVoterIdx;
    if (isOwn) {
      return;
    }

    setJokeFromhtmexhumrVotes(prev => {
      const next = [...prev];
      const winnerPlayerIdx = jokefromhtmexhumrEndings[chosen]?.playerIdx ?? -1;
      if (winnerPlayerIdx >= 0) {
        next[winnerPlayerIdx] = (next[winnerPlayerIdx] ?? 0) + 1;
      }
      return next;
    });

    const nextVoter = jokefromhtmexhumrVoterIdx + 1;
    if (nextVoter >= jokefromhtmexhumrTotalPlayers) {
      setJokeFromhtmexhumrPhase('result');
      setJokeFromhtmexhumrSelectedEnding(null);
      return;
    }
    setJokeFromhtmexhumrVoterIdx(nextVoter);
    setJokeFromhtmexhumrSelectedEnding(null);
  };

  const jokefromhtmexhumrWinner = useMemo(() => {
    const bestVotes = Math.max(...jokefromhtmexhumrVotes);
    const bestIdx = jokefromhtmexhumrVotes.findIndex(v => v === bestVotes);
    const ending = jokefromhtmexhumrEndings.find(e => e.playerIdx === bestIdx);
    return {
      playerIdx: bestIdx,
      votes: bestVotes,
      text: ending?.text ?? '',
    };
  }, [jokefromhtmexhumrEndings, jokefromhtmexhumrVotes]);

  const jokefromhtmexhumrShareResults = async () => {
    try {
      const lines = jokefromhtmexhumrEndings
        .map(e => {
          const name = jokefromhtmexhumrPlayerNames[e.playerIdx] ?? 'Player';
          const v = jokefromhtmexhumrVotes[e.playerIdx] ?? 0;
          return `${name} — ${v} votes\n"${e.text}"`;
        })
        .join('\n\n');
      await Share.share({
        message: `Results\n\nPrompt:\n"${jokefromhtmexhumrPrompt}"\n\n${lines}`,
      });
    } catch {
      console.log('error');
    }
  };

  const jokefromhtmexhumrReset = () => {
    setJokeFromhtmexhumrPhase('setup');
    setJokeFromhtmexhumrWriterIdx(0);
    setJokeFromhtmexhumrVoterIdx(0);
    setJokeFromhtmexhumrDraft('');
    setJokeFromhtmexhumrEndings([]);
    setJokeFromhtmexhumrVotes([]);
    setJokeFromhtmexhumrSelectedEnding(null);
    setJokeFromhtmexhumrPromptIdx(null);
    setJokeFromhtmexhumrPlayerNames(
      new Array(jokefromhtmexhumrPlayerCount).fill(''),
    );
  };

  const jokefromhtmexhumrSortedResults = useMemo(() => {
    return jokefromhtmexhumrPlayerNames
      .map((name, idx) => ({
        idx,
        name,
        votes: jokefromhtmexhumrVotes[idx] ?? 0,
      }))
      .sort((a, b) => b.votes - a.votes);
  }, [jokefromhtmexhumrPlayerNames, jokefromhtmexhumrVotes]);

  const jokefromhtmexhumrActivePlayerStep =
    jokefromhtmexhumrPhase === 'write'
      ? jokefromhtmexhumrWriterIdx + 1
      : jokefromhtmexhumrPhase === 'vote'
      ? jokefromhtmexhumrVoterIdx + 1
      : 0;

  return (
    <View style={styles.jokefromhtmexhumrRoot}>
      <ScrollView
        contentContainerStyle={styles.jokefromhtmexhumrScrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.jokefromhtmexhumrHeader}>
          <Text style={styles.jokefromhtmexhumrHeaderIcon}>🎮</Text>
          <View>
            <Text style={styles.jokefromhtmexhumrHeaderTitle}>Party Game</Text>
            <Text style={styles.jokefromhtmexhumrHeaderSubtitle}>
              Finish the story — vote for the funniest ending!
            </Text>
          </View>
        </View>

        {jokefromhtmexhumrPhase === 'write' ||
        jokefromhtmexhumrPhase === 'vote' ? (
          <View style={styles.jokefromhtmexhumrPagerRow}>
            {new Array(jokefromhtmexhumrTotalPlayers)
              .fill(0)
              .map((_, idx) =>
                idx < jokefromhtmexhumrActivePlayerStep ? (
                  <LinearGradient
                    key={`seg-${idx}`}
                    colors={['#E6AD4C', '#9F4A0A']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={styles.jokefromhtmexhumrPagerSeg}
                  />
                ) : (
                  <View
                    key={`seg-${idx}`}
                    style={[
                      styles.jokefromhtmexhumrPagerSeg,
                      styles.jokefromhtmexhumrPagerSegOff,
                    ]}
                  />
                ),
              )}
          </View>
        ) : null}

        {jokefromhtmexhumrPhase === 'setup' ? (
          <>
            <LinearGradient
              colors={['#600B1A40', '#9F4A0A26']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.jokefromhtmexhumrHowToCard}>
              <View style={styles.jokefromhtmexhumrHowToInner}>
                <Image
                  source={require('../assets/i/chiijokefromlgm.png')}
                  style={{marginRight: 4}}
                />
                <View style={styles.jokefromhtmexhumrHowToCol}>
                  <Text style={styles.jokefromhtmexhumrHowToTitle}>
                    How it works:
                  </Text>
                  <Text style={styles.jokefromhtmexhumrHowToBody}>
                    All players finish an unfinished story. Pass the phone after
                    each turn! Then vote for the funniest ending. You cannot
                    vote for yourself!
                  </Text>
                </View>
              </View>
            </LinearGradient>

            <Text style={styles.jokefromhtmexhumrSectionLabel}>
              NUMBER OF PLAYERS
            </Text>
            <View style={styles.jokefromhtmexhumrCountRow}>
              {[3, 4, 5].map(n => {
                const selected = n === jokefromhtmexhumrPlayerCount;
                return (
                  <Pressable
                    style={{flex: 1}}
                    key={n}
                    onPress={() =>
                      jokefromhtmexhumrSetPlayerCount(n as 3 | 4 | 5)
                    }>
                    <LinearGradient
                      colors={
                        selected
                          ? ['#600B1A', '#9F4A0A']
                          : [
                              'rgba(255, 255, 255, 0.01)',
                              'rgba(255, 255, 255, 0.02)',
                            ]
                      }
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 1}}
                      style={[
                        styles.jokefromhtmexhumrCountBtn,
                        selected && styles.jokefromhtmexhumrCountBtnOn,
                      ]}>
                      <Text style={styles.jokefromhtmexhumrCountNumber}>
                        {n}
                      </Text>
                      <Text style={styles.jokefromhtmexhumrCountLabel}>
                        players
                      </Text>
                    </LinearGradient>
                  </Pressable>
                );
              })}
            </View>

            <Text style={styles.jokefromhtmexhumrSectionLabel}>
              PLAYER NAMES (REQUIRED)
            </Text>
            <View style={styles.jokefromhtmexhumrNamesCol}>
              {new Array(jokefromhtmexhumrPlayerCount).fill(0).map((_, idx) => (
                <View key={idx} style={styles.jokefromhtmexhumrNameRow}>
                  <LinearGradient
                    colors={['#600B1A', '#9F4A0A']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={styles.jokefromhtmexhumrNameIdxPill}>
                    <Text style={styles.jokefromhtmexhumrNameIdxText}>
                      {idx + 1}
                    </Text>
                  </LinearGradient>
                  <TextInput
                    value={jokefromhtmexhumrPlayerNames[idx] ?? ''}
                    onChangeText={t => jokefromhtmexhumrSetPlayerName(idx, t)}
                    placeholder={`Player ${idx + 1} name…`}
                    placeholderTextColor="#FFFFFF52"
                    style={styles.jokefromhtmexhumrNameInput}
                  />
                </View>
              ))}
            </View>

            {!jokefromhtmexhumrAllNamesFilled ? (
              <View style={styles.jokefromhtmexhumrWarnPill}>
                <Text style={styles.jokefromhtmexhumrWarnText}>
                  ⚠️ All players must enter their name to start
                </Text>
              </View>
            ) : null}

            <Pressable
              onPress={jokefromhtmexhumrStartGame}
              disabled={!jokefromhtmexhumrAllNamesFilled}
              style={[
                styles.jokefromhtmexhumrPrimaryBtn,
                !jokefromhtmexhumrAllNamesFilled &&
                  styles.jokefromhtmexhumrPrimaryBtnDisabled,
              ]}>
              <Text style={styles.jokefromhtmexhumrPrimaryText}>
                {!jokefromhtmexhumrAllNamesFilled
                  ? 'Enter all names first'
                  : '¡Vamos! Start Game 🎮'}
              </Text>
            </Pressable>
          </>
        ) : null}

        {jokefromhtmexhumrPhase === 'write' ? (
          <>
            <LinearGradient
              colors={['#600B1A4D', '#9F4A0A33']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.jokefromhtmexhumrTurnCard}>
              <View style={styles.jokefromhtmexhumrTurnCardInner}>
                <View style={styles.jokefromhtmexhumrTurnBadge}>
                  <Text style={styles.jokefromhtmexhumrTurnBadgeText}>
                    {jokefromhtmexhumrWriterIdx + 1}
                  </Text>
                </View>
                <View style={styles.jokefromhtmexhumrTurnCol}>
                  <Text style={styles.jokefromhtmexhumrTurnLabel}>
                    Now writing
                  </Text>
                  <Text style={styles.jokefromhtmexhumrTurnName}>
                    {jokefromhtmexhumrPlayerNames[jokefromhtmexhumrWriterIdx]}
                  </Text>
                </View>
                <Text style={styles.jokefromhtmexhumrTurnCount}>
                  {jokefromhtmexhumrWriterIdx + 1}/
                  {jokefromhtmexhumrTotalPlayers}
                </Text>
              </View>
            </LinearGradient>

            <View style={styles.jokefromhtmexhumrPromptCard}>
              <Text style={styles.jokefromhtmexhumrPromptLabel}>
                🎭 COMPLETE THIS STORY
              </Text>
              <Text style={styles.jokefromhtmexhumrPromptText}>
                {'"'}
                {jokefromhtmexhumrPrompt}
                {'"'}
              </Text>
            </View>

            <Text style={styles.jokefromhtmexhumrSectionLabel}>
              YOUR FUNNY ENDING
            </Text>
            <View style={styles.jokefromhtmexhumrInputWrap}>
              <TextInput
                value={jokefromhtmexhumrDraft}
                onChangeText={setJokeFromhtmexhumrDraft}
                placeholder="Write the funniest ending you can imagine! 😂"
                placeholderTextColor="#FFFFFF52"
                multiline
                maxLength={240}
                style={styles.jokefromhtmexhumrInput}
                textAlignVertical="top"
              />
            </View>

            <Pressable
              onPress={jokefromhtmexhumrOnSubmitEnding}
              disabled={!jokefromhtmexhumrDraft.trim()}
              style={[
                styles.jokefromhtmexhumrPrimaryBtn,
                !jokefromhtmexhumrDraft.trim() &&
                  styles.jokefromhtmexhumrPrimaryBtnDisabled,
              ]}>
              <Text style={styles.jokefromhtmexhumrPrimaryText}>
                {jokefromhtmexhumrWriterIdx ===
                jokefromhtmexhumrTotalPlayers - 1
                  ? 'Submit & Start Voting! 🗳️'
                  : 'Submit & Pass Phone 📱'}
              </Text>
            </Pressable>
          </>
        ) : null}

        {jokefromhtmexhumrPhase === 'vote' ? (
          <>
            <LinearGradient
              colors={['#E6AD4C1A', '#E6AD4C1A']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.jokefromhtmexhumrVoteTurnCard}>
              <View style={styles.jokefromhtmexhumrVoteTurnInner}>
                <Text style={{fontSize: 28}}>🗳️</Text>

                <View>
                  <Text style={styles.jokefromhtmexhumrVoteTurnTitle}>
                    {jokefromhtmexhumrPlayerNames[jokefromhtmexhumrVoterIdx]}
                    's Turn to Vote
                  </Text>
                  <Text style={styles.jokefromhtmexhumrVoteTurnBody}>
                    Pick the funniest ending (not your own!)
                  </Text>
                </View>
              </View>
            </LinearGradient>

            <Text style={styles.jokefromhtmexhumrSectionLabel}>
              STORY ENDINGS
            </Text>
            <View style={styles.jokefromhtmexhumrEndingsCol}>
              {jokefromhtmexhumrEndings.map((e, idx) => {
                const isOwn = e.playerIdx === jokefromhtmexhumrVoterIdx;
                const selected = jokefromhtmexhumrSelectedEnding === idx;
                return (
                  <Pressable
                    key={`${e.playerIdx}-${idx}`}
                    onPress={() => {
                      if (isOwn) {
                        return;
                      }
                      setJokeFromhtmexhumrSelectedEnding(idx);
                    }}
                    style={[
                      styles.jokefromhtmexhumrEndingCard,
                      selected && styles.jokefromhtmexhumrEndingCardOn,
                      isOwn && styles.jokefromhtmexhumrEndingCardDisabled,
                    ]}>
                    <View style={styles.jokefromhtmexhumrEndingIdxPill}>
                      <Text style={styles.jokefromhtmexhumrEndingIdxText}>
                        {idx + 1}
                      </Text>
                    </View>
                    <View style={styles.jokefromhtmexhumrEndingTextCol}>
                      {isOwn ? (
                        <Text style={styles.jokefromhtmexhumrEndingHint}>
                          (Your answer — can’t vote for yourself)
                        </Text>
                      ) : null}
                      <Text style={styles.jokefromhtmexhumrEndingText}>
                        {'"'}
                        {e.text}
                        {'"'}
                      </Text>
                    </View>
                    <LinearGradient
                      colors={['#600B1A', '#9F4A0A']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 1}}
                      style={styles.jokefromhtmexhumrThumbPill}>
                      <Text style={styles.jokefromhtmexhumrThumbText}>👍</Text>
                    </LinearGradient>
                  </Pressable>
                );
              })}
            </View>

            <Pressable
              onPress={jokefromhtmexhumrOnVote}
              disabled={jokefromhtmexhumrSelectedEnding === null}>
              <LinearGradient
                colors={['#600B1A', '#9F4A0A']}
                style={[
                  styles.jokefromhtmexhumrPrimaryBtn,
                  jokefromhtmexhumrSelectedEnding === null &&
                    styles.jokefromhtmexhumrPrimaryBtnDisabled,
                ]}>
                <Text style={styles.jokefromhtmexhumrPrimaryText}>
                  {jokefromhtmexhumrVoterIdx ===
                  jokefromhtmexhumrTotalPlayers - 1
                    ? 'Result'
                    : 'Choose'}
                </Text>
              </LinearGradient>
            </Pressable>
          </>
        ) : null}

        {jokefromhtmexhumrPhase === 'result' ? (
          <>
            <LinearGradient
              colors={['#E6AD4C33', '#9F4A0A26']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.jokefromhtmexhumrWinnerCard}>
              <View style={styles.jokefromhtmexhumrWinnerInner}>
                <Text style={styles.jokefromhtmexhumrTrophy}>🏆</Text>
                <Text style={styles.jokefromhtmexhumrWinnerLabel}>
                  FUNNIEST ENDING!
                </Text>
                <Text style={styles.jokefromhtmexhumrWinnerName}>
                  {
                    jokefromhtmexhumrPlayerNames[
                      jokefromhtmexhumrWinner.playerIdx
                    ]
                  }
                </Text>
                <View style={styles.jokefromhtmexhumrWinnerQuote}>
                  <Text style={styles.jokefromhtmexhumrWinnerQuoteText}>
                    {'"'}
                    {jokefromhtmexhumrWinner.text}
                    {'"'}
                  </Text>
                </View>
                <View style={styles.jokefromhtmexhumrWinnerVotesPill}>
                  <Text style={styles.jokefromhtmexhumrWinnerVotesText}>
                    👍 👍 {jokefromhtmexhumrWinner.votes} votes
                  </Text>
                </View>
              </View>
            </LinearGradient>

            <Text style={styles.jokefromhtmexhumrSectionLabel}>
              FULL RESULTS
            </Text>
            <View style={styles.jokefromhtmexhumrResultsCol}>
              {jokefromhtmexhumrSortedResults.map((row, pos) => {
                const place = pos === 0 ? '🥇' : pos === 1 ? '🥈' : '🥉';
                return (
                  <View
                    key={`${row.name}-${row.idx}`}
                    style={[
                      styles.jokefromhtmexhumrResultRow,
                      pos === 0 && styles.jokefromhtmexhumrResultRowOn,
                    ]}>
                    <Text style={styles.jokefromhtmexhumrPlace}>{place}</Text>
                    <View style={styles.jokefromhtmexhumrResultNameCol}>
                      <Text style={styles.jokefromhtmexhumrResultName}>
                        {row.name}
                      </Text>
                      <Text style={styles.jokefromhtmexhumrResultVotes}>
                        {row.votes} votes
                      </Text>
                    </View>
                    <Text style={styles.jokefromhtmexhumrResultThumbs}>
                      {'👍'.repeat(Math.min(2, row.votes))}
                    </Text>
                  </View>
                );
              })}
            </View>

            <View style={styles.jokefromhtmexhumrBtnRow}>
              <Pressable
                onPress={jokefromhtmexhumrShareResults}
                style={{flex: 1}}>
                <LinearGradient
                  colors={['#600B1A', '#9F4A0A']}
                  style={[
                    styles.jokefromhtmexhumrBtn,
                    styles.jokefromhtmexhumrBtnPrimary,
                  ]}>
                  <Text style={styles.jokefromhtmexhumrBtnPrimaryText}>
                    📤 Share Results
                  </Text>
                </LinearGradient>
              </Pressable>
              <Pressable
                onPress={jokefromhtmexhumrReset}
                style={[
                  styles.jokefromhtmexhumrBtn,
                  styles.jokefromhtmexhumrBtnGhost,
                ]}>
                <Text style={styles.jokefromhtmexhumrBtnText}>Back</Text>
              </Pressable>
            </View>
          </>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default JokeFromhtmexhumrgmp;

const styles = StyleSheet.create({
  jokefromhtmexhumrHeaderSubtitle: {
    marginTop: 4,
    color: '#E6AD4CB2',
    fontSize: 13,
    fontWeight: '400',
  },

  jokefromhtmexhumrPagerRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  jokefromhtmexhumrPagerSeg: {
    flex: 1,
    height: 4,
    borderRadius: 999,
  },
  jokefromhtmexhumrPagerSegOff: {
    backgroundColor: '#FFFFFF14',
  },

  jokefromhtmexhumrRoot: {
    flex: 1,
    backgroundColor: '#0A0203',
  },
  jokefromhtmexhumrTopGlow: {
    height: 220,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  jokefromhtmexhumrScrollContent: {
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 110,
  },

  jokefromhtmexhumrHeader: {
    paddingTop: 6,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  jokefromhtmexhumrHeaderIcon: {
    fontSize: 22,
  },
  jokefromhtmexhumrHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
  },

  jokefromhtmexhumrHowToCard: {
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    marginBottom: 14,
  },
  jokefromhtmexhumrHowToInner: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  jokefromhtmexhumrHowToIcon: {
    fontSize: 34,
  },
  jokefromhtmexhumrHowToCol: {
    flex: 1,
  },
  jokefromhtmexhumrHowToTitle: {
    color: '#E6AD4C',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 6,
  },
  jokefromhtmexhumrHowToBody: {
    color: '#FFFFFFB8',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },

  jokefromhtmexhumrCountRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
  },
  jokefromhtmexhumrCountBtn: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    minHeight: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jokefromhtmexhumrCountBtnOn: {
    backgroundColor: '#7A1E1633',
    borderColor: '#7A1E1640',
  },
  jokefromhtmexhumrCountNumber: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },
  jokefromhtmexhumrCountLabel: {
    marginTop: 4,
    color: '#FFFFFF9E',
    fontSize: 12,
    fontWeight: '400',
  },

  jokefromhtmexhumrNamesCol: {
    gap: 12,
    marginBottom: 12,
  },
  jokefromhtmexhumrNameRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  jokefromhtmexhumrNameIdxPill: {
    width: 32,
    height: 32,
    borderRadius: 12,
    backgroundColor: '#7A1E16',
    alignItems: 'center',
    justifyContent: 'center',
  },
  jokefromhtmexhumrNameIdxText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  jokefromhtmexhumrNameInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
  },

  jokefromhtmexhumrWarnPill: {
    borderRadius: 14,
    backgroundColor: '#FF3D5A1A',
    borderWidth: 1,
    borderColor: '#FF3D5A33',
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  jokefromhtmexhumrWarnText: {
    color: '#FFFFFF99',
    fontSize: 12.5,
    fontWeight: '400',
    textAlign: 'center',
  },

  jokefromhtmexhumrTurnCard: {
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    marginBottom: 20,
    minHeight: 80,

    justifyContent: 'center',
  },
  jokefromhtmexhumrTurnCardInner: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  jokefromhtmexhumrTurnBadge: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#7A1E16',
    alignItems: 'center',
    justifyContent: 'center',
  },
  jokefromhtmexhumrTurnBadgeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
  jokefromhtmexhumrTurnCol: {
    flex: 1,
  },
  jokefromhtmexhumrTurnLabel: {
    color: '#FFFFFFB8',
    fontSize: 12,
    fontWeight: '400',
  },
  jokefromhtmexhumrTurnName: {
    marginTop: 4,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  jokefromhtmexhumrTurnCount: {
    color: '#FFFFFF9E',
    fontSize: 12,
    fontWeight: '600',
  },

  jokefromhtmexhumrPromptCard: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0D',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 16,
    marginBottom: 14,
  },
  jokefromhtmexhumrPromptLabel: {
    color: '#E6AD4C',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.4,
    marginBottom: 8,
  },
  jokefromhtmexhumrPromptText: {
    color: '#FFFFFFD6',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    fontStyle: 'italic',
  },

  jokefromhtmexhumrSectionLabel: {
    marginTop: 6,
    marginBottom: 8,
    color: '#E2A63B',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  jokefromhtmexhumrInputWrap: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0D',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
    marginBottom: 12,
  },
  jokefromhtmexhumrInput: {
    minHeight: 120,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },

  jokefromhtmexhumrPrimaryBtn: {
    marginTop: 16,
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7A1E16',
    borderWidth: 1,
    borderColor: '#7A1E1640',
  },
  jokefromhtmexhumrPrimaryBtnDisabled: {
    opacity: 0.35,
  },
  jokefromhtmexhumrPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  jokefromhtmexhumrVoteTurnCard: {
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    marginBottom: 14,
    minHeight: 70,
    justifyContent: 'center',
  },
  jokefromhtmexhumrVoteTurnInner: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  jokefromhtmexhumrVoteTurnTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  jokefromhtmexhumrVoteTurnBody: {
    color: '#FFFFFF9E',
    fontSize: 12,
    fontWeight: '400',
  },

  jokefromhtmexhumrEndingsCol: {
    gap: 12,
    marginTop: 8,
    marginBottom: 5,
  },
  jokefromhtmexhumrEndingCard: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    minHeight: 90,
  },
  jokefromhtmexhumrEndingCardOn: {
    borderColor: '#E6AD4C66',
    backgroundColor: '#FFFFFF0F',
  },
  jokefromhtmexhumrEndingCardDisabled: {
    opacity: 0.35,
  },
  jokefromhtmexhumrEndingIdxPill: {
    width: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: '#7A1E16',
    alignItems: 'center',
    justifyContent: 'center',
  },
  jokefromhtmexhumrEndingIdxText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },
  jokefromhtmexhumrEndingTextCol: {
    flex: 1,
  },
  jokefromhtmexhumrEndingHint: {
    color: '#FFFFFF70',
    fontSize: 11,
    fontWeight: '400',
    marginBottom: 6,
  },
  jokefromhtmexhumrEndingText: {
    color: '#FFFFFFD6',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },
  jokefromhtmexhumrThumbPill: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: '#600B1A4D',
    borderWidth: 1,
    borderColor: '#600B1A66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  jokefromhtmexhumrThumbText: {
    fontSize: 16,
  },

  jokefromhtmexhumrWinnerCard: {
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E6AD4C33',
    marginTop: 4,
    minHeight: 310,
    justifyContent: 'center',
    marginBottom: 15,
  },
  jokefromhtmexhumrWinnerInner: {
    padding: 18,
    alignItems: 'center',
  },
  jokefromhtmexhumrTrophy: {
    fontSize: 54,
    marginBottom: 18,
  },
  jokefromhtmexhumrWinnerLabel: {
    color: '#E2A63B',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.6,
    marginBottom: 14,
  },
  jokefromhtmexhumrWinnerName: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
  },
  jokefromhtmexhumrWinnerQuote: {
    width: '94%',
    borderRadius: 16,
    minHeight: 50,
    backgroundColor: '#0000004D',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  jokefromhtmexhumrWinnerQuoteText: {
    color: '#FFFFFFCC',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 18,
    fontStyle: 'italic',
  },
  jokefromhtmexhumrWinnerVotesPill: {
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 999,
    backgroundColor: '#E6AD4C33',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  jokefromhtmexhumrWinnerVotesText: {
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '700',
  },

  jokefromhtmexhumrResultsCol: {
    gap: 12,
    marginBottom: 14,
  },
  jokefromhtmexhumrResultRow: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  jokefromhtmexhumrResultRowOn: {
    backgroundColor: '#E6AD4C1A',
    borderColor: '#E6AD4C66',
  },
  jokefromhtmexhumrPlace: {
    width: 22,
    textAlign: 'center',
    fontSize: 16,
  },
  jokefromhtmexhumrResultNameCol: {
    flex: 1,
  },
  jokefromhtmexhumrResultName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  jokefromhtmexhumrResultVotes: {
    marginTop: 4,
    color: '#FFFFFF9E',
    fontSize: 12,
    fontWeight: '400',
  },
  jokefromhtmexhumrResultThumbs: {
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '700',
  },

  jokefromhtmexhumrBtnRow: {
    flexDirection: 'row',
    gap: 12,
  },
  jokefromhtmexhumrBtn: {
    flex: 1,
    height: 53,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  jokefromhtmexhumrBtnPrimary: {
    backgroundColor: '#7A1E16',
    borderColor: '#7A1E1640',
  },
  jokefromhtmexhumrBtnPrimaryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  jokefromhtmexhumrBtnGhost: {
    backgroundColor: '#FFFFFF12',
    borderColor: '#FFFFFF14',
  },
  jokefromhtmexhumrBtnText: {
    color: '#FFFFFFCC',
    fontSize: 14,
    fontWeight: '800',
  },
});
