import React, {useCallback, useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';
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
import {useFocusEffect} from '@react-navigation/native';
import WebView from 'react-native-webview';

import {
  rateBadPhrases,
  rateGoodPhrases,
  rateLoaderHtml,
} from '../data/rateContent';

const RateJokeScreen = () => {
  const [phase, setphase] = useState<
    'input' | 'loading' | 'result'
  >('input');
  const [joke, setjoke] = useState('');
  const [score, setscore] = useState<
    number | null
  >(null);
  const [verdict, setverdict] = useState<
    'good' | 'bad' | null
  >(null);

  const pickResult = () => {
    const trimmed = joke.trim();
    const len = trimmed.length;
    const good =
      len >= 30 && /[!?]/.test(trimmed) ? true : Math.random() > 0.55;

    if (good) {
      const pick =
        rateGoodPhrases[
          Math.floor(Math.random() * rateGoodPhrases.length)
        ]!;
      setverdict('good');
      setscore(pick.score);
      return pick;
    }

    const pick =
      rateBadPhrases[
        Math.floor(Math.random() * rateBadPhrases.length)
      ]!;
    setverdict('bad');
    setscore(pick.score);
    return pick;
  };

  const [resultText, setresultText] =
    useState<{title: string; body: string} | null>(null);

  const start = () => {
    if (!joke.trim()) {
      return;
    }
    setphase('loading');
    setTimeout(() => {
      const pick = pickResult();
      setresultText({title: pick.title, body: pick.body});
      setphase('result');
    }, 4000);
  };

  const reset = () => {
    setphase('input');
    setscore(null);
    setverdict(null);
    setresultText(null);
    setjoke('');
  };

  useFocusEffect(
    useCallback(() => {
      reset();
    }, []),
  );

  const shareResult = async () => {
    try {
      await Share.share({
        message:
          'Rate My Joke\n\n' +
          `Joke:\n${joke}\n\n` +
          `Result: ${resultText?.title ?? ''} (${
            score ?? ''
          }/10)\n\n` +
          `${resultText?.body ?? ''}`,
      });
    } catch {
      console.log('error');
    }
  };

  const canJudge = joke.trim().length > 0;

  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={styles.headerIcon}>⭐</Text>
          <View>
            <Text style={styles.headerTitle}>
              Rate My Joke
            </Text>
            <Text style={styles.headerSubtitle}>
              Miguel will personally judge your humor
            </Text>
          </View>
        </View>

        {phase === 'input' ? (
          <>
            <LinearGradient
              colors={['#600B1A40', '#9F4A0A26']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.judgeCard}>
              <View style={styles.judgeRow}>
                <Image
                  source={require('../assets/i/chiijokefromemxrat.png')}
                  style={styles.judgeAvatar}
                />
                <View style={styles.judgeTextCol}>
                  <Text style={styles.judgeTitle}>
                    Miguel the Judge says:
                  </Text>
                  <Text style={styles.judgeBody}>
                    {
                      '"Think you are funny, amigo?\nWrite your funniest joke below and I, Miguel, will evaluate it with the precision of a taco master.\nDo not disappoint me."'
                    }
                  </Text>
                </View>
              </View>
            </LinearGradient>

            <Text
              style={[styles.sectionLabel, {marginTop: 10}]}>
              YOUR JOKE
            </Text>
            <View style={styles.inputWrap}>
              <TextInput
                value={joke}
                onChangeText={setjoke}
                placeholder="Type your funniest joke here... Don't be shy, amigo! 🙂"
                placeholderTextColor="#FFFFFF52"
                multiline
                maxLength={500}
                style={styles.input}
                textAlignVertical="top"
              />
              <Text style={styles.counter}>
                {joke.length}/500
              </Text>
            </View>

            <View style={styles.tipsCard}>
              <Text style={styles.tipsTitle}>
                💡 Tips from Miguel:
              </Text>
              <Text style={styles.tipsBody}>
                Setup + punchline lands harder{'\n'}Timing is everything, even in
                text{'\n'}More specific = more funny
              </Text>
            </View>

            <Pressable
              onPress={start}
              disabled={!canJudge}>
              <LinearGradient
                colors={['#600B1A', '#9F4A0A']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={[
                  styles.primaryBtn,
                  !canJudge &&
                    styles.primaryBtnDisabled,
                ]}>
                <Text style={styles.primaryText}>
                  {canJudge
                    ? '😃 Let Miguel Judge!'
                    : 'Write your joke first...'}
                </Text>
              </LinearGradient>
            </Pressable>
          </>
        ) : null}

        {phase === 'loading' ? (
          <View style={styles.loadingWrap}>
            <Image
              source={require('../assets/i/chiijokefromload.png')}
              style={styles.loadingMiguel}
              resizeMode="contain"
            />
            <Text style={styles.loadingTitle}>
              Miguel is evaluating…
            </Text>
            <Text style={styles.loadingBody}>
              He is consulting his vast comedy archives, his abuela's wisdom,
              and 47 years of experience.
            </Text>
            <View style={styles.dots}>
              <WebView
                source={{html: rateLoaderHtml}}
                scrollEnabled={false}
                originWhitelist={['*']}
                style={{
                  width: '100%',
                  height: 50,
                  backgroundColor: 'transparent',
                }}
              />
            </View>
            <View style={styles.quoteCard}>
              <Text style={styles.quoteText}>
                {
                  '"Hmm… let me think about this very carefully.\nMy reputation as a comedy judge is on the line, ¿no?"'
                }
              </Text>
            </View>
          </View>
        ) : null}

        {phase === 'result' && resultText ? (
          <>
            <LinearGradient
              colors={
                verdict !== 'good'
                  ? ['#600B1A66', '#500A1466']
                  : ['#2EA04333', '#9F4A0A26']
              }
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={[
                styles.resultCard,
                verdict !== 'good'
                  ? styles.resultBorderGood
                  : styles.resultBorderBad,
              ]}>
              <View style={{padding: 16, alignItems: 'center'}}>
                <Image
                  source={
                    verdict === 'good'
                      ? require('../assets/i/chiijokefromemyes.png')
                      : require('../assets/i/chiijokefromemno.png')
                  }
                  style={styles.resultMiguel}
                  resizeMode="contain"
                />
                <Text
                  style={[
                    styles.resultTitle,
                    verdict === 'good'
                      ? styles.resultTitleGood
                      : styles.resultTitleBad,
                  ]}>
                  {resultText.title}
                </Text>

                <View
                  style={[
                    styles.starsRow,
                    verdict === 'good'
                      ? styles.starsRowGood
                      : styles.starsRowBad,
                  ]}>
                  <Text style={styles.stars}>
                    {'⭐'.repeat(
                      Math.max(
                        0,
                        Math.min(
                          5,
                          Math.round((score ?? 0) / 2),
                        ),
                      ),
                    )}
                    {'☆'.repeat(
                      Math.max(
                        0,
                        5 - Math.round((score ?? 0) / 2),
                      ),
                    )}
                  </Text>
                  <Text style={styles.scoreText}>
                    {score ?? 0}/10
                  </Text>
                </View>

                <Text style={styles.resultBody}>
                  {resultText.body}
                </Text>
              </View>
            </LinearGradient>

            <View
              style={[styles.miniInputWrap, {marginTop: 18}]}>
              <Text
                style={[
                  styles.sectionLabel,
                  {color: '#FFFFFF80'},
                ]}>
                YOUR JOKE
              </Text>
              <Text style={styles.miniInputText}>
                {joke}
              </Text>
            </View>

            <View style={styles.resultBtnRow}>
              <Pressable
                onPress={shareResult}
                style={{flex: 1}}>
                <LinearGradient
                  colors={['#600B1A', '#9F4A0A']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.shareBtn}>
                  <Text style={styles.shareText}>
                    📤 Share Result
                  </Text>
                </LinearGradient>
              </Pressable>
              <Pressable
                onPress={reset}
                style={styles.backBtn}>
                <Text style={styles.backText}>Back</Text>
              </Pressable>
            </View>
          </>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default RateJokeScreen;

const styles = StyleSheet.create({
  judgeTitle: {
    color: '#E6AD4C',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
  },

  judgeBody: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },

  root: {
    flex: 1,
    backgroundColor: '#050505',
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
  headerSubtitle: {
    marginTop: 4,
    color: '#E6AD4CB2',
    fontSize: 13,
    fontWeight: '400',
  },

  judgeCard: {
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    backgroundColor: '#FFFFFF0A',
    marginTop: 6,
  },
  judgeRow: {
    padding: 14,
    flexDirection: 'row',
    gap: 22,
    alignItems: 'center',
  },
  judgeAvatar: {},
  judgeTextCol: {
    flex: 1,
  },

  sectionLabel: {
    marginBottom: 8,
    color: '#E6AD4C',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  inputWrap: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 16,
  },
  input: {
    minHeight: 150,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
  },
  counter: {
    marginTop: 10,
    color: '#FFFFFF70',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'right',
  },

  tipsCard: {
    marginTop: 14,
    borderRadius: 18,
    backgroundColor: '#FFFFFF08',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
  },
  tipsTitle: {
    color: '#FFFFFF66',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
  },
  tipsBody: {
    color: '#FFFFFF80',
    fontSize: 12.5,
    fontWeight: '400',
    lineHeight: 18,
  },

  primaryBtn: {
    marginTop: 16,
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7A1E16',
    borderWidth: 1,
    borderColor: '#7A1E1640',
  },
  primaryBtnDisabled: {
    opacity: 0.55,
  },
  primaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  loadingWrap: {
    alignItems: 'center',
    paddingTop: 40,
  },
  loadingMiguel: {marginBottom: 20},
  loadingTitle: {
    marginTop: 10,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  loadingBody: {
    marginTop: 10,
    color: '#FFFFFF9E',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
    paddingHorizontal: 14,
  },
  dots: {
    marginTop: 28,
    flexDirection: 'row',
    gap: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF1A',
  },
  dotOn: {
    backgroundColor: '#E2A63B',
  },
  quoteCard: {
    marginTop: 38,
    borderRadius: 16,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 17,
    maxWidth: 320,
  },
  quoteText: {
    color: '#FFFFFFA8',
    fontSize: 12.5,
    fontWeight: '400',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 18,
  },

  resultCard: {
    borderRadius: 24,
    marginTop: 6,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF0A',
  },
  resultBorderGood: {
    borderColor: '#FF3D5A4D',
  },
  resultBorderBad: {
    borderColor: '#2EA0434D',
  },
  resultGood: {
    borderColor: '#2F7A3A66',
  },
  resultBad: {
    borderColor: '#7A1E1666',
  },
  resultMiguel: {
    marginBottom: 6,
  },
  resultTitle: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
  },
  resultTitleGood: {
    color: '#4ADE80',
  },
  resultTitleBad: {
    color: '#FF3D5A',
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#00000033',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    marginBottom: 10,
  },
  starsRowGood: {
    borderColor: '#4ADE8066',
    backgroundColor: '#4ADE801A',
  },
  starsRowBad: {
    borderColor: '#FF3D5A66',
    backgroundColor: '#FF3D5A1A',
  },
  stars: {
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  scoreText: {
    color: '#FFFFFFB8',
    fontSize: 13,
    fontWeight: '600',
  },
  resultBody: {
    color: '#FFFFFFD6',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 14,
  },
  miniInputWrap: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
  },
  miniInputText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
  },
  resultBtnRow: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 12,
  },
  shareBtn: {
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7A1E16',
    borderWidth: 1,
    borderColor: '#7A1E1640',
  },
  shareText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  backBtn: {
    flex: 1,
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF12',
    borderWidth: 1,
    borderColor: '#FFFFFF1A',
  },
  backText: {
    color: '#FFFFFFCC',
    fontSize: 14,
    fontWeight: '800',
  },
});
