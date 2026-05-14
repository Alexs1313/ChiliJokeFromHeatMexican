import LinearGradient from 'react-native-linear-gradient';

import React, {useMemo, useState} from 'react';

import {gamePrompts} from '../data/gamePrompts';
import {
  Image,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import ChiliGradientButton from '../components/ui/ChiliGradientButton';
import EndingVoteOptionCard from '../components/ui/EndingVoteOptionCard';
import PlayerCountPill from '../components/ui/PlayerCountPill';
import ShareResultBackRow from '../components/ui/ShareResultBackRow';
import SolidChiliButton from '../components/ui/SolidChiliButton';

const GroupGameScreen = () => {
  const [playerCount, setplayerCount] =
    useState<3 | 4 | 5>(3);
  const [playerNames, setplayerNames] =
    useState<string[]>(['', '', '']);

  const [phase, setphase] = useState<
    'setup' | 'write' | 'vote' | 'result'
  >('setup');
  const [promptIdx, setpromptIdx] = useState<
    number | null
  >(null);

  const [writerIdx, setwriterIdx] =
    useState(0);
  const [draft, setdraft] = useState('');
  const [endings, setendings] = useState<
    {playerIdx: number; text: string}[]
  >([]);

  const [voterIdx, setvoterIdx] = useState(0);
  const [votes, setvotes] = useState<
    number[]
  >([]);
  const [selectedEnding, setselectedEnding] =
    useState<number | null>(null);

  const totalPlayers = playerCount;
  const prompt =
    promptIdx === null
      ? ''
      : gamePrompts[promptIdx] ?? '';

  const allNamesFilled = playerNames
    .slice(0, playerCount)
    .every(n => n.trim().length > 0);

  const setPlayerCount = (count: 3 | 4 | 5) => {
    setplayerCount(count);
    setplayerNames(prev => {
      const next = [...prev];
      while (next.length < count) {
        next.push('');
      }
      return next.slice(0, count);
    });
  };

  const setPlayerName = (idx: number, name: string) => {
    setplayerNames(prev => {
      const next = [...prev];
      next[idx] = name;
      return next;
    });
  };

  const startGame = () => {
    if (!allNamesFilled) {
      return;
    }
    setpromptIdx(
      Math.floor(Math.random() * gamePrompts.length),
    );
    setvotes(new Array(playerCount).fill(0));
    setendings([]);
    setwriterIdx(0);
    setvoterIdx(0);
    setselectedEnding(null);
    setdraft('');
    setphase('write');
  };

  const onSubmitEnding = () => {
    const text = draft.trim();
    if (!text) {
      return;
    }

    setendings(prev => [
      ...prev,
      {playerIdx: writerIdx, text},
    ]);
    setdraft('');

    const nextWriter = writerIdx + 1;
    if (nextWriter >= totalPlayers) {
      setphase('vote');
      setwriterIdx(nextWriter);
      setvoterIdx(0);
      setselectedEnding(null);
      return;
    }
    setwriterIdx(nextWriter);
  };

  const onVote = () => {
    if (selectedEnding === null) {
      return;
    }
    const chosen = selectedEnding;
    const isOwn =
      endings[chosen]?.playerIdx === voterIdx;
    if (isOwn) {
      return;
    }

    setvotes(prev => {
      const next = [...prev];
      const winnerPlayerIdx = endings[chosen]?.playerIdx ?? -1;
      if (winnerPlayerIdx >= 0) {
        next[winnerPlayerIdx] = (next[winnerPlayerIdx] ?? 0) + 1;
      }
      return next;
    });

    const nextVoter = voterIdx + 1;
    if (nextVoter >= totalPlayers) {
      setphase('result');
      setselectedEnding(null);
      return;
    }
    setvoterIdx(nextVoter);
    setselectedEnding(null);
  };

  const winner = useMemo(() => {
    const maxVoteCount = Math.max(...votes);
    const leadPlayerIdx = votes.findIndex(v => v === maxVoteCount);
    const ending = endings.find(e => e.playerIdx === leadPlayerIdx);
    return {
      playerIdx: leadPlayerIdx,
      votes: maxVoteCount,
      text: ending?.text ?? '',
    };
  }, [endings, votes]);

  const shareResults = async () => {
    try {
      const lines = endings
        .map(e => {
          const name = playerNames[e.playerIdx] ?? 'Player';
          const v = votes[e.playerIdx] ?? 0;
          return `${name} — ${v} votes\n"${e.text}"`;
        })
        .join('\n\n');
      await Share.share({
        message: `Results\n\nPrompt:\n"${prompt}"\n\n${lines}`,
      });
    } catch {
      console.log('error');
    }
  };

  const reset = () => {
    setphase('setup');
    setwriterIdx(0);
    setvoterIdx(0);
    setdraft('');
    setendings([]);
    setvotes([]);
    setselectedEnding(null);
    setpromptIdx(null);
    setplayerNames(
      new Array(playerCount).fill(''),
    );
  };

  const sortedResults = useMemo(() => {
    return playerNames
      .map((name, idx) => ({
        idx,
        name,
        votes: votes[idx] ?? 0,
      }))
      .sort((a, b) => b.votes - a.votes);
  }, [playerNames, votes]);

  const activePlayerStep =
    phase === 'write'
      ? writerIdx + 1
      : phase === 'vote'
      ? voterIdx + 1
      : 0;

  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={styles.headerIcon}>🎮</Text>
          <View>
            <Text style={styles.headerTitle}>Party Game</Text>
            <Text style={styles.headerSubtitle}>
              Finish the story — vote for the funniest ending!
            </Text>
          </View>
        </View>

        {phase === 'write' ||
        phase === 'vote' ? (
          <View style={styles.pagerRow}>
            {new Array(totalPlayers)
              .fill(0)
              .map((_, idx) =>
                idx < activePlayerStep ? (
                  <LinearGradient
                    key={`seg-${idx}`}
                    colors={['#E6AD4C', '#9F4A0A']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={styles.pagerSeg}
                  />
                ) : (
                  <View
                    key={`seg-${idx}`}
                    style={[
                      styles.pagerSeg,
                      styles.pagerSegOff,
                    ]}
                  />
                ),
              )}
          </View>
        ) : null}

        {phase === 'setup' ? (
          <>
            <LinearGradient
              colors={['#600B1A40', '#9F4A0A26']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.howToCard}>
              <View style={styles.howToInner}>
                <Image
                  source={require('../assets/i/chiijokefromlgm.png')}
                  style={{marginRight: 4}}
                />
                <View style={styles.howToCol}>
                  <Text style={styles.howToTitle}>
                    How it works:
                  </Text>
                  <Text style={styles.howToBody}>
                    All players finish an unfinished story. Pass the phone after
                    each turn! Then vote for the funniest ending. You cannot
                    vote for yourself!
                  </Text>
                </View>
              </View>
            </LinearGradient>

            <Text style={styles.sectionLabel}>
              NUMBER OF PLAYERS
            </Text>
            <View style={styles.countRow}>
              {([3, 4, 5] as const).map(n => (
                <PlayerCountPill
                  key={n}
                  value={n}
                  selected={n === playerCount}
                  onPress={() => setPlayerCount(n)}
                />
              ))}
            </View>

            <Text style={styles.sectionLabel}>
              PLAYER NAMES (REQUIRED)
            </Text>
            <View style={styles.namesCol}>
              {new Array(playerCount).fill(0).map((_, idx) => (
                <View key={idx} style={styles.nameRow}>
                  <LinearGradient
                    colors={['#600B1A', '#9F4A0A']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={styles.nameIdxPill}>
                    <Text style={styles.nameIdxText}>
                      {idx + 1}
                    </Text>
                  </LinearGradient>
                  <TextInput
                    value={playerNames[idx] ?? ''}
                    onChangeText={t => setPlayerName(idx, t)}
                    placeholder={`Player ${idx + 1} name…`}
                    placeholderTextColor="#FFFFFF52"
                    style={styles.nameInput}
                  />
                </View>
              ))}
            </View>

            {!allNamesFilled ? (
              <View style={styles.warnPill}>
                <Text style={styles.warnText}>
                  ⚠️ All players must enter their name to start
                </Text>
              </View>
            ) : null}

            <SolidChiliButton
              onPress={startGame}
              disabled={!allNamesFilled}
              label={
                !allNamesFilled
                  ? 'Enter all names first'
                  : '¡Vamos! Start Game 🎮'
              }
            />
          </>
        ) : null}

        {phase === 'write' ? (
          <>
            <LinearGradient
              colors={['#600B1A4D', '#9F4A0A33']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.turnCard}>
              <View style={styles.turnCardInner}>
                <View style={styles.turnBadge}>
                  <Text style={styles.turnBadgeText}>
                    {writerIdx + 1}
                  </Text>
                </View>
                <View style={styles.turnCol}>
                  <Text style={styles.turnLabel}>
                    Now writing
                  </Text>
                  <Text style={styles.turnName}>
                    {playerNames[writerIdx]}
                  </Text>
                </View>
                <Text style={styles.turnCount}>
                  {writerIdx + 1}/
                  {totalPlayers}
                </Text>
              </View>
            </LinearGradient>

            <View style={styles.promptCard}>
              <Text style={styles.promptLabel}>
                🎭 COMPLETE THIS STORY
              </Text>
              <Text style={styles.promptText}>
                {'"'}
                {prompt}
                {'"'}
              </Text>
            </View>

            <Text style={styles.sectionLabel}>
              YOUR FUNNY ENDING
            </Text>
            <View style={styles.inputWrap}>
              <TextInput
                value={draft}
                onChangeText={setdraft}
                placeholder="Write the funniest ending you can imagine! 😂"
                placeholderTextColor="#FFFFFF52"
                multiline
                maxLength={240}
                style={styles.input}
                textAlignVertical="top"
              />
            </View>

            <SolidChiliButton
              onPress={onSubmitEnding}
              disabled={!draft.trim()}
              label={
                writerIdx === totalPlayers - 1
                  ? 'Submit & Start Voting! 🗳️'
                  : 'Submit & Pass Phone 📱'
              }
            />
          </>
        ) : null}

        {phase === 'vote' ? (
          <>
            <LinearGradient
              colors={['#E6AD4C1A', '#E6AD4C1A']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.voteTurnCard}>
              <View style={styles.voteTurnInner}>
                <Text style={{fontSize: 28}}>🗳️</Text>

                <View>
                  <Text style={styles.voteTurnTitle}>
                    {playerNames[voterIdx]}
                    's Turn to Vote
                  </Text>
                  <Text style={styles.voteTurnBody}>
                    Pick the funniest ending (not your own!)
                  </Text>
                </View>
              </View>
            </LinearGradient>

            <Text style={styles.sectionLabel}>
              STORY ENDINGS
            </Text>
            <View style={styles.endingsCol}>
              {endings.map((e, idx) => {
                const isOwn = e.playerIdx === voterIdx;
                const selected = selectedEnding === idx;
                return (
                  <EndingVoteOptionCard
                    key={`${e.playerIdx}-${idx}`}
                    index={idx}
                    text={e.text}
                    isOwn={isOwn}
                    selected={selected}
                    onPress={() => {
                      if (isOwn) {
                        return;
                      }
                      setselectedEnding(idx);
                    }}
                  />
                );
              })}
            </View>

            <ChiliGradientButton
              onPress={onVote}
              disabled={selectedEnding === null}
              disabledOpacity={0.35}
              label={
                voterIdx === totalPlayers - 1 ? 'Result' : 'Choose'
              }
              containerStyle={{marginTop: 16}}
            />
          </>
        ) : null}

        {phase === 'result' ? (
          <>
            <LinearGradient
              colors={['#E6AD4C33', '#9F4A0A26']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.winnerCard}>
              <View style={styles.winnerInner}>
                <Text style={styles.trophy}>🏆</Text>
                <Text style={styles.winnerLabel}>
                  FUNNIEST ENDING!
                </Text>
                <Text style={styles.winnerName}>
                  {
                    playerNames[
                      winner.playerIdx
                    ]
                  }
                </Text>
                <View style={styles.winnerQuote}>
                  <Text style={styles.winnerQuoteText}>
                    {'"'}
                    {winner.text}
                    {'"'}
                  </Text>
                </View>
                <View style={styles.winnerVotesPill}>
                  <Text style={styles.winnerVotesText}>
                    👍 👍 {winner.votes} votes
                  </Text>
                </View>
              </View>
            </LinearGradient>

            <Text style={styles.sectionLabel}>
              FULL RESULTS
            </Text>
            <View style={styles.resultsCol}>
              {sortedResults.map((row, pos) => {
                const place = pos === 0 ? '🥇' : pos === 1 ? '🥈' : '🥉';
                return (
                  <View
                    key={`${row.name}-${row.idx}`}
                    style={[
                      styles.resultRow,
                      pos === 0 && styles.resultRowOn,
                    ]}>
                    <Text style={styles.place}>{place}</Text>
                    <View style={styles.resultNameCol}>
                      <Text style={styles.resultName}>
                        {row.name}
                      </Text>
                      <Text style={styles.resultVotes}>
                        {row.votes} votes
                      </Text>
                    </View>
                    <Text style={styles.resultThumbs}>
                      {'👍'.repeat(Math.min(2, row.votes))}
                    </Text>
                  </View>
                );
              })}
            </View>

            <ShareResultBackRow
              onShare={shareResults}
              onBack={reset}
              shareLabel="📤 Share Results"
            />
          </>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default GroupGameScreen;

const styles = StyleSheet.create({
  headerSubtitle: {
    marginTop: 4,
    color: '#E6AD4CB2',
    fontSize: 13,
    fontWeight: '400',
  },

  pagerRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  pagerSeg: {
    flex: 1,
    height: 4,
    borderRadius: 999,
  },
  pagerSegOff: {
    backgroundColor: '#FFFFFF14',
  },

  root: {
    flex: 1,
    backgroundColor: '#0A0203',
  },
  topGlow: {
    height: 220,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 110,
  },

  header: {
    paddingTop: 6,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerIcon: {
    fontSize: 22,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
  },

  howToCard: {
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    marginBottom: 14,
  },
  howToInner: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  howToIcon: {
    fontSize: 34,
  },
  howToCol: {
    flex: 1,
  },
  howToTitle: {
    color: '#E6AD4C',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 6,
  },
  howToBody: {
    color: '#FFFFFFB8',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },

  countRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
  },
  namesCol: {
    gap: 12,
    marginBottom: 12,
  },
  nameRow: {
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
  nameIdxPill: {
    width: 32,
    height: 32,
    borderRadius: 12,
    backgroundColor: '#7A1E16',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameIdxText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  nameInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
  },

  warnPill: {
    borderRadius: 14,
    backgroundColor: '#FF3D5A1A',
    borderWidth: 1,
    borderColor: '#FF3D5A33',
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  warnText: {
    color: '#FFFFFF99',
    fontSize: 12.5,
    fontWeight: '400',
    textAlign: 'center',
  },

  turnCard: {
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    marginBottom: 20,
    minHeight: 80,

    justifyContent: 'center',
  },
  turnCardInner: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  turnBadge: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#7A1E16',
    alignItems: 'center',
    justifyContent: 'center',
  },
  turnBadgeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
  turnCol: {
    flex: 1,
  },
  turnLabel: {
    color: '#FFFFFFB8',
    fontSize: 12,
    fontWeight: '400',
  },
  turnName: {
    marginTop: 4,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  turnCount: {
    color: '#FFFFFF9E',
    fontSize: 12,
    fontWeight: '600',
  },

  promptCard: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0D',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 16,
    marginBottom: 14,
  },
  promptLabel: {
    color: '#E6AD4C',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.4,
    marginBottom: 8,
  },
  promptText: {
    color: '#FFFFFFD6',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    fontStyle: 'italic',
  },

  sectionLabel: {
    marginTop: 6,
    marginBottom: 8,
    color: '#E2A63B',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  inputWrap: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0D',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
    marginBottom: 12,
  },
  input: {
    minHeight: 120,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },

  voteTurnCard: {
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    marginBottom: 14,
    minHeight: 70,
    justifyContent: 'center',
  },
  voteTurnInner: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  voteTurnTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  voteTurnBody: {
    color: '#FFFFFF9E',
    fontSize: 12,
    fontWeight: '400',
  },

  endingsCol: {
    gap: 12,
    marginTop: 8,
    marginBottom: 5,
  },
  winnerCard: {
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E6AD4C33',
    marginTop: 4,
    minHeight: 310,
    justifyContent: 'center',
    marginBottom: 15,
  },
  winnerInner: {
    padding: 18,
    alignItems: 'center',
  },
  trophy: {
    fontSize: 54,
    marginBottom: 18,
  },
  winnerLabel: {
    color: '#E2A63B',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.6,
    marginBottom: 14,
  },
  winnerName: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
  },
  winnerQuote: {
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
  winnerQuoteText: {
    color: '#FFFFFFCC',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 18,
    fontStyle: 'italic',
  },
  winnerVotesPill: {
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 999,
    backgroundColor: '#E6AD4C33',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  winnerVotesText: {
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '700',
  },

  resultsCol: {
    gap: 12,
    marginBottom: 14,
  },
  resultRow: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  resultRowOn: {
    backgroundColor: '#E6AD4C1A',
    borderColor: '#E6AD4C66',
  },
  place: {
    width: 22,
    textAlign: 'center',
    fontSize: 16,
  },
  resultNameCol: {
    flex: 1,
  },
  resultName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  resultVotes: {
    marginTop: 4,
    color: '#FFFFFF9E',
    fontSize: 12,
    fontWeight: '400',
  },
  resultThumbs: {
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '700',
  },
});
