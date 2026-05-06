import LinearGradient from 'react-native-linear-gradient';

import React, {useMemo, useState} from 'react';

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

const Chiijokefromemxicnngmp = () => {
  const [chiijokefromemxicnnPlayerCount, setChiijokefromemxicnnPlayerCount] =
    useState<3 | 4 | 5>(3);
  const [chiijokefromemxicnnPlayerNames, setChiijokefromemxicnnPlayerNames] =
    useState<string[]>(['', '', '']);

  const chiijokefromemxicnnPrompts = useMemo(
    () => [
      'Carlos opened the fridge at 2 AM and suddenly saw a dancing taco that whispered…',
      'Maria walked into the kitchen and found her grandmother teaching the family cactus how to sing…',
      'During the village fiesta, the mariachi band suddenly stopped playing because…',
      'Miguel tried to impress everyone with his cooking skills, but after one loud explosion…',
      'The mysterious hot sauce bottle came with a warning label that said…',
      'Three friends entered the taco eating contest, but halfway through the challenge…',
      'Juan bought the cheapest sombrero at the market and discovered it could actually…',
      'The old donkey escaped during the celebration and somehow ended up…',
      'When Sofia opened her burrito, she was shocked to find…',
      'The waiter smiled nervously after the customer asked why the tacos were glowing…',
      'During karaoke night, the shyest person in the restaurant suddenly grabbed the microphone and…',
      'Pedro tried to fix the broken blender, but instead he accidentally created…',
      'The family dinner became very quiet when Grandpa slowly stood up and announced…',
      'A tourist asked for ‘mild salsa,’ but the chef misunderstood and brought…',
      'The village talent show was going normally until someone released…',
      'Carlos challenged his cousin to a spicy pepper duel, but after the first bite…',
      'The tiny street dog stole a taco and then surprisingly…',
      'While cleaning the attic, Rosa discovered an old guitar that magically…',
      'The new cook promised the best burritos in Mexico, but nobody expected…',
      'At midnight, the taco truck owner heard strange music coming from inside the kitchen and saw…',
    ],
    [],
  );

  const [chiijokefromemxicnnPhase, setChiijokefromemxicnnPhase] = useState<
    'setup' | 'write' | 'vote' | 'result'
  >('setup');
  const [chiijokefromemxicnnPromptIdx, setChiijokefromemxicnnPromptIdx] =
    useState<number | null>(null);

  const [chiijokefromemxicnnWriterIdx, setChiijokefromemxicnnWriterIdx] =
    useState(0);
  const [chiijokefromemxicnnDraft, setChiijokefromemxicnnDraft] = useState('');
  const [chiijokefromemxicnnEndings, setChiijokefromemxicnnEndings] = useState<
    {playerIdx: number; text: string}[]
  >([]);

  const [chiijokefromemxicnnVoterIdx, setChiijokefromemxicnnVoterIdx] =
    useState(0);
  const [chiijokefromemxicnnVotes, setChiijokefromemxicnnVotes] = useState<
    number[]
  >([]);
  const [
    chiijokefromemxicnnSelectedEnding,
    setChiijokefromemxicnnSelectedEnding,
  ] = useState<number | null>(null);

  const chiijokefromemxicnnTotalPlayers = chiijokefromemxicnnPlayerCount;
  const chiijokefromemxicnnPrompt =
    chiijokefromemxicnnPromptIdx === null
      ? ''
      : chiijokefromemxicnnPrompts[chiijokefromemxicnnPromptIdx] ?? '';

  const chiijokefromemxicnnAllNamesFilled = chiijokefromemxicnnPlayerNames
    .slice(0, chiijokefromemxicnnPlayerCount)
    .every(n => n.trim().length > 0);

  const chiijokefromemxicnnSetPlayerCount = (count: 3 | 4 | 5) => {
    setChiijokefromemxicnnPlayerCount(count);
    setChiijokefromemxicnnPlayerNames(prev => {
      const next = [...prev];
      while (next.length < count) {
        next.push('');
      }
      return next.slice(0, count);
    });
  };

  const chiijokefromemxicnnSetPlayerName = (idx: number, name: string) => {
    setChiijokefromemxicnnPlayerNames(prev => {
      const next = [...prev];
      next[idx] = name;
      return next;
    });
  };

  const chiijokefromemxicnnStartGame = () => {
    if (!chiijokefromemxicnnAllNamesFilled) {
      return;
    }
    setChiijokefromemxicnnPromptIdx(
      Math.floor(Math.random() * chiijokefromemxicnnPrompts.length),
    );
    setChiijokefromemxicnnVotes(
      new Array(chiijokefromemxicnnPlayerCount).fill(0),
    );
    setChiijokefromemxicnnEndings([]);
    setChiijokefromemxicnnWriterIdx(0);
    setChiijokefromemxicnnVoterIdx(0);
    setChiijokefromemxicnnSelectedEnding(null);
    setChiijokefromemxicnnDraft('');
    setChiijokefromemxicnnPhase('write');
  };

  const chiijokefromemxicnnOnSubmitEnding = () => {
    const text = chiijokefromemxicnnDraft.trim();
    if (!text) {
      return;
    }

    setChiijokefromemxicnnEndings(prev => [
      ...prev,
      {playerIdx: chiijokefromemxicnnWriterIdx, text},
    ]);
    setChiijokefromemxicnnDraft('');

    const nextWriter = chiijokefromemxicnnWriterIdx + 1;
    if (nextWriter >= chiijokefromemxicnnTotalPlayers) {
      setChiijokefromemxicnnPhase('vote');
      setChiijokefromemxicnnWriterIdx(nextWriter);
      setChiijokefromemxicnnVoterIdx(0);
      setChiijokefromemxicnnSelectedEnding(null);
      return;
    }
    setChiijokefromemxicnnWriterIdx(nextWriter);
  };

  const chiijokefromemxicnnOnVote = () => {
    if (chiijokefromemxicnnSelectedEnding === null) {
      return;
    }
    const chosen = chiijokefromemxicnnSelectedEnding;
    const isOwn =
      chiijokefromemxicnnEndings[chosen]?.playerIdx ===
      chiijokefromemxicnnVoterIdx;
    if (isOwn) {
      return;
    }

    setChiijokefromemxicnnVotes(prev => {
      const next = [...prev];
      const winnerPlayerIdx =
        chiijokefromemxicnnEndings[chosen]?.playerIdx ?? -1;
      if (winnerPlayerIdx >= 0) {
        next[winnerPlayerIdx] = (next[winnerPlayerIdx] ?? 0) + 1;
      }
      return next;
    });

    const nextVoter = chiijokefromemxicnnVoterIdx + 1;
    if (nextVoter >= chiijokefromemxicnnTotalPlayers) {
      setChiijokefromemxicnnPhase('result');
      setChiijokefromemxicnnSelectedEnding(null);
      return;
    }
    setChiijokefromemxicnnVoterIdx(nextVoter);
    setChiijokefromemxicnnSelectedEnding(null);
  };

  const chiijokefromemxicnnWinner = useMemo(() => {
    const bestVotes = Math.max(...chiijokefromemxicnnVotes);
    const bestIdx = chiijokefromemxicnnVotes.findIndex(v => v === bestVotes);
    const ending = chiijokefromemxicnnEndings.find(
      e => e.playerIdx === bestIdx,
    );
    return {
      playerIdx: bestIdx,
      votes: bestVotes,
      text: ending?.text ?? '',
    };
  }, [chiijokefromemxicnnEndings, chiijokefromemxicnnVotes]);

  const chiijokefromemxicnnShareResults = async () => {
    try {
      const lines = chiijokefromemxicnnEndings
        .map(e => {
          const name = chiijokefromemxicnnPlayerNames[e.playerIdx] ?? 'Player';
          const v = chiijokefromemxicnnVotes[e.playerIdx] ?? 0;
          return `${name} — ${v} votes\n"${e.text}"`;
        })
        .join('\n\n');
      await Share.share({
        message: `Party Game — Results\n\nPrompt:\n"${chiijokefromemxicnnPrompt}"\n\n${lines}`,
      });
    } catch {
      console.log('error');
    }
  };

  const chiijokefromemxicnnReset = () => {
    setChiijokefromemxicnnPhase('setup');
    setChiijokefromemxicnnWriterIdx(0);
    setChiijokefromemxicnnVoterIdx(0);
    setChiijokefromemxicnnDraft('');
    setChiijokefromemxicnnEndings([]);
    setChiijokefromemxicnnVotes([]);
    setChiijokefromemxicnnSelectedEnding(null);
    setChiijokefromemxicnnPromptIdx(null);
    setChiijokefromemxicnnPlayerNames(
      new Array(chiijokefromemxicnnPlayerCount).fill(''),
    );
  };

  const chiijokefromemxicnnSortedResults = useMemo(() => {
    return chiijokefromemxicnnPlayerNames
      .map((name, idx) => ({
        idx,
        name,
        votes: chiijokefromemxicnnVotes[idx] ?? 0,
      }))
      .sort((a, b) => b.votes - a.votes);
  }, [chiijokefromemxicnnPlayerNames, chiijokefromemxicnnVotes]);

  const chiijokefromemxicnnActivePlayerStep =
    chiijokefromemxicnnPhase === 'write'
      ? chiijokefromemxicnnWriterIdx + 1
      : chiijokefromemxicnnPhase === 'vote'
      ? chiijokefromemxicnnVoterIdx + 1
      : 0;

  return (
    <View style={styles.chiijokefromemxicnnRoot}>
      <ScrollView
        contentContainerStyle={styles.chiijokefromemxicnnScrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.chiijokefromemxicnnHeader}>
          <Text style={styles.chiijokefromemxicnnHeaderIcon}>🎮</Text>
          <View>
            <Text style={styles.chiijokefromemxicnnHeaderTitle}>
              Party Game
            </Text>
            <Text style={styles.chiijokefromemxicnnHeaderSubtitle}>
              Finish the story — funniest ending wins!
            </Text>
          </View>
        </View>

        {chiijokefromemxicnnPhase === 'write' ||
        chiijokefromemxicnnPhase === 'vote' ? (
          <View style={styles.chiijokefromemxicnnPagerRow}>
            {new Array(chiijokefromemxicnnTotalPlayers)
              .fill(0)
              .map((_, idx) =>
                idx < chiijokefromemxicnnActivePlayerStep ? (
                  <LinearGradient
                    key={`seg-${idx}`}
                    colors={['#E6AD4C', '#9F4A0A']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={styles.chiijokefromemxicnnPagerSeg}
                  />
                ) : (
                  <View
                    key={`seg-${idx}`}
                    style={[
                      styles.chiijokefromemxicnnPagerSeg,
                      styles.chiijokefromemxicnnPagerSegOff,
                    ]}
                  />
                ),
              )}
          </View>
        ) : null}

        {chiijokefromemxicnnPhase === 'setup' ? (
          <>
            <LinearGradient
              colors={['#600B1A40', '#9F4A0A26']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.chiijokefromemxicnnHowToCard}>
              <View style={styles.chiijokefromemxicnnHowToInner}>
                <Image
                  source={require('../../assets/i/chiijokefromlgm.png')}
                  style={{marginRight: 4}}
                />
                <View style={styles.chiijokefromemxicnnHowToCol}>
                  <Text style={styles.chiijokefromemxicnnHowToTitle}>
                    How it works:
                  </Text>
                  <Text style={styles.chiijokefromemxicnnHowToBody}>
                    All players finish an unfinished story. Pass the phone after
                    each turn! Then vote for the funniest ending. You cannot
                    vote for yourself!
                  </Text>
                </View>
              </View>
            </LinearGradient>

            <Text style={styles.chiijokefromemxicnnSectionLabel}>
              NUMBER OF PLAYERS
            </Text>
            <View style={styles.chiijokefromemxicnnCountRow}>
              {[3, 4, 5].map(n => {
                const selected = n === chiijokefromemxicnnPlayerCount;
                return (
                  <Pressable
                    style={{flex: 1}}
                    key={n}
                    onPress={() =>
                      chiijokefromemxicnnSetPlayerCount(n as 3 | 4 | 5)
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
                        styles.chiijokefromemxicnnCountBtn,
                        selected && styles.chiijokefromemxicnnCountBtnOn,
                      ]}>
                      <Text style={styles.chiijokefromemxicnnCountNumber}>
                        {n}
                      </Text>
                      <Text style={styles.chiijokefromemxicnnCountLabel}>
                        players
                      </Text>
                    </LinearGradient>
                  </Pressable>
                );
              })}
            </View>

            <Text style={styles.chiijokefromemxicnnSectionLabel}>
              PLAYER NAMES (REQUIRED)
            </Text>
            <View style={styles.chiijokefromemxicnnNamesCol}>
              {new Array(chiijokefromemxicnnPlayerCount)
                .fill(0)
                .map((_, idx) => (
                  <View key={idx} style={styles.chiijokefromemxicnnNameRow}>
                    <LinearGradient
                      colors={['#600B1A', '#9F4A0A']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 1}}
                      style={styles.chiijokefromemxicnnNameIdxPill}>
                      <Text style={styles.chiijokefromemxicnnNameIdxText}>
                        {idx + 1}
                      </Text>
                    </LinearGradient>
                    <TextInput
                      value={chiijokefromemxicnnPlayerNames[idx] ?? ''}
                      onChangeText={t =>
                        chiijokefromemxicnnSetPlayerName(idx, t)
                      }
                      placeholder={`Player ${idx + 1} name…`}
                      placeholderTextColor="#FFFFFF52"
                      style={styles.chiijokefromemxicnnNameInput}
                    />
                  </View>
                ))}
            </View>

            {!chiijokefromemxicnnAllNamesFilled ? (
              <View style={styles.chiijokefromemxicnnWarnPill}>
                <Text style={styles.chiijokefromemxicnnWarnText}>
                  ⚠️ All players must enter their name to start
                </Text>
              </View>
            ) : null}

            <Pressable
              onPress={chiijokefromemxicnnStartGame}
              disabled={!chiijokefromemxicnnAllNamesFilled}
              style={[
                styles.chiijokefromemxicnnPrimaryBtn,
                !chiijokefromemxicnnAllNamesFilled &&
                  styles.chiijokefromemxicnnPrimaryBtnDisabled,
              ]}>
              <Text style={styles.chiijokefromemxicnnPrimaryText}>
                {!chiijokefromemxicnnAllNamesFilled
                  ? 'Enter all names first'
                  : '¡Vamos! Start Game 🎮'}
              </Text>
            </Pressable>
          </>
        ) : null}

        {chiijokefromemxicnnPhase === 'write' ? (
          <>
            <LinearGradient
              colors={['#600B1A4D', '#9F4A0A33']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.chiijokefromemxicnnTurnCard}>
              <View style={styles.chiijokefromemxicnnTurnCardInner}>
                <View style={styles.chiijokefromemxicnnTurnBadge}>
                  <Text style={styles.chiijokefromemxicnnTurnBadgeText}>
                    {chiijokefromemxicnnWriterIdx + 1}
                  </Text>
                </View>
                <View style={styles.chiijokefromemxicnnTurnCol}>
                  <Text style={styles.chiijokefromemxicnnTurnLabel}>
                    Now writing
                  </Text>
                  <Text style={styles.chiijokefromemxicnnTurnName}>
                    {
                      chiijokefromemxicnnPlayerNames[
                        chiijokefromemxicnnWriterIdx
                      ]
                    }
                  </Text>
                </View>
                <Text style={styles.chiijokefromemxicnnTurnCount}>
                  {chiijokefromemxicnnWriterIdx + 1}/
                  {chiijokefromemxicnnTotalPlayers}
                </Text>
              </View>
            </LinearGradient>

            <View style={styles.chiijokefromemxicnnPromptCard}>
              <Text style={styles.chiijokefromemxicnnPromptLabel}>
                🎭 COMPLETE THIS STORY
              </Text>
              <Text style={styles.chiijokefromemxicnnPromptText}>
                {'"'}
                {chiijokefromemxicnnPrompt}
                {'"'}
              </Text>
            </View>

            <Text style={styles.chiijokefromemxicnnSectionLabel}>
              YOUR FUNNY ENDING
            </Text>
            <View style={styles.chiijokefromemxicnnInputWrap}>
              <TextInput
                value={chiijokefromemxicnnDraft}
                onChangeText={setChiijokefromemxicnnDraft}
                placeholder="Write the funniest ending you can imagine! 😂"
                placeholderTextColor="#FFFFFF52"
                multiline
                maxLength={240}
                style={styles.chiijokefromemxicnnInput}
              />
            </View>

            <Pressable
              onPress={chiijokefromemxicnnOnSubmitEnding}
              disabled={!chiijokefromemxicnnDraft.trim()}
              style={[
                styles.chiijokefromemxicnnPrimaryBtn,
                !chiijokefromemxicnnDraft.trim() &&
                  styles.chiijokefromemxicnnPrimaryBtnDisabled,
              ]}>
              <Text style={styles.chiijokefromemxicnnPrimaryText}>
                {chiijokefromemxicnnWriterIdx ===
                chiijokefromemxicnnTotalPlayers - 1
                  ? 'Submit & Start Voting! 🗳️'
                  : 'Submit & Pass Phone 📱'}
              </Text>
            </Pressable>
          </>
        ) : null}

        {chiijokefromemxicnnPhase === 'vote' ? (
          <>
            <LinearGradient
              colors={['#E6AD4C1A', '#E6AD4C1A']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.chiijokefromemxicnnVoteTurnCard}>
              <View style={styles.chiijokefromemxicnnVoteTurnInner}>
                <Text style={{fontSize: 28}}>🗳️</Text>

                <View>
                  <Text style={styles.chiijokefromemxicnnVoteTurnTitle}>
                    {
                      chiijokefromemxicnnPlayerNames[
                        chiijokefromemxicnnVoterIdx
                      ]
                    }
                    's Turn to Vote
                  </Text>
                  <Text style={styles.chiijokefromemxicnnVoteTurnBody}>
                    Pick the funniest ending (not your own!)
                  </Text>
                </View>
              </View>
            </LinearGradient>

            <Text style={styles.chiijokefromemxicnnSectionLabel}>
              STORY ENDINGS
            </Text>
            <View style={styles.chiijokefromemxicnnEndingsCol}>
              {chiijokefromemxicnnEndings.map((e, idx) => {
                const isOwn = e.playerIdx === chiijokefromemxicnnVoterIdx;
                const selected = chiijokefromemxicnnSelectedEnding === idx;
                return (
                  <Pressable
                    key={`${e.playerIdx}-${idx}`}
                    onPress={() => {
                      if (isOwn) {
                        return;
                      }
                      setChiijokefromemxicnnSelectedEnding(idx);
                    }}
                    style={[
                      styles.chiijokefromemxicnnEndingCard,
                      selected && styles.chiijokefromemxicnnEndingCardOn,
                      isOwn && styles.chiijokefromemxicnnEndingCardDisabled,
                    ]}>
                    <View style={styles.chiijokefromemxicnnEndingIdxPill}>
                      <Text style={styles.chiijokefromemxicnnEndingIdxText}>
                        {idx + 1}
                      </Text>
                    </View>
                    <View style={styles.chiijokefromemxicnnEndingTextCol}>
                      {isOwn ? (
                        <Text style={styles.chiijokefromemxicnnEndingHint}>
                          (Your answer — can’t vote for yourself)
                        </Text>
                      ) : null}
                      <Text style={styles.chiijokefromemxicnnEndingText}>
                        {'"'}
                        {e.text}
                        {'"'}
                      </Text>
                    </View>
                    <LinearGradient
                      colors={['#600B1A', '#9F4A0A']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 1}}
                      style={styles.chiijokefromemxicnnThumbPill}>
                      <Text style={styles.chiijokefromemxicnnThumbText}>
                        👍
                      </Text>
                    </LinearGradient>
                  </Pressable>
                );
              })}
            </View>

            <Pressable
              onPress={chiijokefromemxicnnOnVote}
              disabled={chiijokefromemxicnnSelectedEnding === null}>
              <LinearGradient
                colors={['#600B1A', '#9F4A0A']}
                style={[
                  styles.chiijokefromemxicnnPrimaryBtn,
                  chiijokefromemxicnnSelectedEnding === null &&
                    styles.chiijokefromemxicnnPrimaryBtnDisabled,
                ]}>
                <Text style={styles.chiijokefromemxicnnPrimaryText}>
                  {chiijokefromemxicnnVoterIdx ===
                  chiijokefromemxicnnTotalPlayers - 1
                    ? 'Result'
                    : 'Choose'}
                </Text>
              </LinearGradient>
            </Pressable>
          </>
        ) : null}

        {chiijokefromemxicnnPhase === 'result' ? (
          <>
            <LinearGradient
              colors={['#E6AD4C33', '#9F4A0A26']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.chiijokefromemxicnnWinnerCard}>
              <View style={styles.chiijokefromemxicnnWinnerInner}>
                <Text style={styles.chiijokefromemxicnnTrophy}>🏆</Text>
                <Text style={styles.chiijokefromemxicnnWinnerLabel}>
                  FUNNIEST ENDING!
                </Text>
                <Text style={styles.chiijokefromemxicnnWinnerName}>
                  {
                    chiijokefromemxicnnPlayerNames[
                      chiijokefromemxicnnWinner.playerIdx
                    ]
                  }
                </Text>
                <View style={styles.chiijokefromemxicnnWinnerQuote}>
                  <Text style={styles.chiijokefromemxicnnWinnerQuoteText}>
                    {'"'}
                    {chiijokefromemxicnnWinner.text}
                    {'"'}
                  </Text>
                </View>
                <View style={styles.chiijokefromemxicnnWinnerVotesPill}>
                  <Text style={styles.chiijokefromemxicnnWinnerVotesText}>
                    👍 👍 {chiijokefromemxicnnWinner.votes} votes
                  </Text>
                </View>
              </View>
            </LinearGradient>

            <Text style={styles.chiijokefromemxicnnSectionLabel}>
              FULL RESULTS
            </Text>
            <View style={styles.chiijokefromemxicnnResultsCol}>
              {chiijokefromemxicnnSortedResults.map((row, pos) => {
                const place = pos === 0 ? '🥇' : pos === 1 ? '🥈' : '🥉';
                return (
                  <View
                    key={`${row.name}-${row.idx}`}
                    style={[
                      styles.chiijokefromemxicnnResultRow,
                      pos === 0 && styles.chiijokefromemxicnnResultRowOn,
                    ]}>
                    <Text style={styles.chiijokefromemxicnnPlace}>{place}</Text>
                    <View style={styles.chiijokefromemxicnnResultNameCol}>
                      <Text style={styles.chiijokefromemxicnnResultName}>
                        {row.name}
                      </Text>
                      <Text style={styles.chiijokefromemxicnnResultVotes}>
                        {row.votes} votes
                      </Text>
                    </View>
                    <Text style={styles.chiijokefromemxicnnResultThumbs}>
                      {'👍'.repeat(Math.min(2, row.votes))}
                    </Text>
                  </View>
                );
              })}
            </View>

            <View style={styles.chiijokefromemxicnnBtnRow}>
              <Pressable
                onPress={chiijokefromemxicnnShareResults}
                style={{flex: 1}}>
                <LinearGradient
                  colors={['#600B1A', '#9F4A0A']}
                  style={[
                    styles.chiijokefromemxicnnBtn,
                    styles.chiijokefromemxicnnBtnPrimary,
                  ]}>
                  <Text style={styles.chiijokefromemxicnnBtnPrimaryText}>
                    📤 Share Results
                  </Text>
                </LinearGradient>
              </Pressable>
              <Pressable
                onPress={chiijokefromemxicnnReset}
                style={[
                  styles.chiijokefromemxicnnBtn,
                  styles.chiijokefromemxicnnBtnGhost,
                ]}>
                <Text style={styles.chiijokefromemxicnnBtnText}>Back</Text>
              </Pressable>
            </View>
          </>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Chiijokefromemxicnngmp;

const styles = StyleSheet.create({
  chiijokefromemxicnnHeaderSubtitle: {
    marginTop: 4,
    color: '#E6AD4CB2',
    fontSize: 13,
    fontWeight: '400',
  },

  chiijokefromemxicnnPagerRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  chiijokefromemxicnnPagerSeg: {
    flex: 1,
    height: 4,
    borderRadius: 999,
  },
  chiijokefromemxicnnPagerSegOff: {
    backgroundColor: '#FFFFFF14',
  },

  chiijokefromemxicnnRoot: {
    flex: 1,
    backgroundColor: '#0A0203',
  },
  chiijokefromemxicnnTopGlow: {
    height: 220,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  chiijokefromemxicnnScrollContent: {
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 110,
  },

  chiijokefromemxicnnHeader: {
    paddingTop: 6,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chiijokefromemxicnnHeaderIcon: {
    fontSize: 22,
  },
  chiijokefromemxicnnHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
  },

  chiijokefromemxicnnHowToCard: {
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    marginBottom: 14,
  },
  chiijokefromemxicnnHowToInner: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chiijokefromemxicnnHowToIcon: {
    fontSize: 34,
  },
  chiijokefromemxicnnHowToCol: {
    flex: 1,
  },
  chiijokefromemxicnnHowToTitle: {
    color: '#E6AD4C',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 6,
  },
  chiijokefromemxicnnHowToBody: {
    color: '#FFFFFFB8',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },

  chiijokefromemxicnnCountRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
  },
  chiijokefromemxicnnCountBtn: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    minHeight: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chiijokefromemxicnnCountBtnOn: {
    backgroundColor: '#7A1E1633',
    borderColor: '#7A1E1640',
  },
  chiijokefromemxicnnCountNumber: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },
  chiijokefromemxicnnCountLabel: {
    marginTop: 4,
    color: '#FFFFFF9E',
    fontSize: 12,
    fontWeight: '400',
  },

  chiijokefromemxicnnNamesCol: {
    gap: 12,
    marginBottom: 12,
  },
  chiijokefromemxicnnNameRow: {
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
  chiijokefromemxicnnNameIdxPill: {
    width: 32,
    height: 32,
    borderRadius: 12,
    backgroundColor: '#7A1E16',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chiijokefromemxicnnNameIdxText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  chiijokefromemxicnnNameInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
  },

  chiijokefromemxicnnWarnPill: {
    borderRadius: 14,
    backgroundColor: '#FF3D5A1A',
    borderWidth: 1,
    borderColor: '#FF3D5A33',
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  chiijokefromemxicnnWarnText: {
    color: '#FFFFFF99',
    fontSize: 12.5,
    fontWeight: '400',
    textAlign: 'center',
  },

  chiijokefromemxicnnTurnCard: {
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    marginBottom: 20,
    minHeight: 80,

    justifyContent: 'center',
  },
  chiijokefromemxicnnTurnCardInner: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chiijokefromemxicnnTurnBadge: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#7A1E16',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chiijokefromemxicnnTurnBadgeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
  chiijokefromemxicnnTurnCol: {
    flex: 1,
  },
  chiijokefromemxicnnTurnLabel: {
    color: '#FFFFFFB8',
    fontSize: 12,
    fontWeight: '400',
  },
  chiijokefromemxicnnTurnName: {
    marginTop: 4,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  chiijokefromemxicnnTurnCount: {
    color: '#FFFFFF9E',
    fontSize: 12,
    fontWeight: '600',
  },

  chiijokefromemxicnnPromptCard: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0D',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 16,
    marginBottom: 14,
  },
  chiijokefromemxicnnPromptLabel: {
    color: '#E6AD4C',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.4,
    marginBottom: 8,
  },
  chiijokefromemxicnnPromptText: {
    color: '#FFFFFFD6',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    fontStyle: 'italic',
  },

  chiijokefromemxicnnSectionLabel: {
    marginTop: 6,
    marginBottom: 8,
    color: '#E2A63B',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  chiijokefromemxicnnInputWrap: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0D',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
    marginBottom: 12,
  },
  chiijokefromemxicnnInput: {
    minHeight: 120,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },

  chiijokefromemxicnnPrimaryBtn: {
    marginTop: 16,
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7A1E16',
    borderWidth: 1,
    borderColor: '#7A1E1640',
  },
  chiijokefromemxicnnPrimaryBtnDisabled: {
    opacity: 0.35,
  },
  chiijokefromemxicnnPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  chiijokefromemxicnnVoteTurnCard: {
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    marginBottom: 14,
    minHeight: 70,
    justifyContent: 'center',
  },
  chiijokefromemxicnnVoteTurnInner: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chiijokefromemxicnnVoteTurnTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  chiijokefromemxicnnVoteTurnBody: {
    color: '#FFFFFF9E',
    fontSize: 12,
    fontWeight: '400',
  },

  chiijokefromemxicnnEndingsCol: {
    gap: 12,
    marginTop: 8,
    marginBottom: 5,
  },
  chiijokefromemxicnnEndingCard: {
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
  chiijokefromemxicnnEndingCardOn: {
    borderColor: '#E6AD4C66',
    backgroundColor: '#FFFFFF0F',
  },
  chiijokefromemxicnnEndingCardDisabled: {
    opacity: 0.35,
  },
  chiijokefromemxicnnEndingIdxPill: {
    width: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: '#7A1E16',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chiijokefromemxicnnEndingIdxText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },
  chiijokefromemxicnnEndingTextCol: {
    flex: 1,
  },
  chiijokefromemxicnnEndingHint: {
    color: '#FFFFFF70',
    fontSize: 11,
    fontWeight: '400',
    marginBottom: 6,
  },
  chiijokefromemxicnnEndingText: {
    color: '#FFFFFFD6',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },
  chiijokefromemxicnnThumbPill: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: '#600B1A4D',
    borderWidth: 1,
    borderColor: '#600B1A66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chiijokefromemxicnnThumbText: {
    fontSize: 16,
  },

  chiijokefromemxicnnWinnerCard: {
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E6AD4C33',
    marginTop: 4,
    minHeight: 310,
    justifyContent: 'center',
    marginBottom: 15,
  },
  chiijokefromemxicnnWinnerInner: {
    padding: 18,
    alignItems: 'center',
  },
  chiijokefromemxicnnTrophy: {
    fontSize: 54,
    marginBottom: 18,
  },
  chiijokefromemxicnnWinnerLabel: {
    color: '#E2A63B',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.6,
    marginBottom: 14,
  },
  chiijokefromemxicnnWinnerName: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
  },
  chiijokefromemxicnnWinnerQuote: {
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
  chiijokefromemxicnnWinnerQuoteText: {
    color: '#FFFFFFCC',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 18,
    fontStyle: 'italic',
  },
  chiijokefromemxicnnWinnerVotesPill: {
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 999,
    backgroundColor: '#E6AD4C33',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  chiijokefromemxicnnWinnerVotesText: {
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '700',
  },

  chiijokefromemxicnnResultsCol: {
    gap: 12,
    marginBottom: 14,
  },
  chiijokefromemxicnnResultRow: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chiijokefromemxicnnResultRowOn: {
    backgroundColor: '#E6AD4C1A',
    borderColor: '#E6AD4C66',
  },
  chiijokefromemxicnnPlace: {
    width: 22,
    textAlign: 'center',
    fontSize: 16,
  },
  chiijokefromemxicnnResultNameCol: {
    flex: 1,
  },
  chiijokefromemxicnnResultName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  chiijokefromemxicnnResultVotes: {
    marginTop: 4,
    color: '#FFFFFF9E',
    fontSize: 12,
    fontWeight: '400',
  },
  chiijokefromemxicnnResultThumbs: {
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '700',
  },

  chiijokefromemxicnnBtnRow: {
    flexDirection: 'row',
    gap: 12,
  },
  chiijokefromemxicnnBtn: {
    flex: 1,
    height: 53,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  chiijokefromemxicnnBtnPrimary: {
    backgroundColor: '#7A1E16',
    borderColor: '#7A1E1640',
  },
  chiijokefromemxicnnBtnPrimaryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  chiijokefromemxicnnBtnGhost: {
    backgroundColor: '#FFFFFF12',
    borderColor: '#FFFFFF14',
  },
  chiijokefromemxicnnBtnText: {
    color: '#FFFFFFCC',
    fontSize: 14,
    fontWeight: '800',
  },
});
