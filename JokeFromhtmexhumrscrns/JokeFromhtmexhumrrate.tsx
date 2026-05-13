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
  jokefromhtmexhumrRateBadPhrases,
  jokefromhtmexhumrRateGoodPhrases,
  jokefromhtmexhumrRateLoaderHtml,
} from '../JokeFromhtmexhumrdata/jokefromhtmexhumrdatarate';

const JokeFromhtmexhumrrate = () => {
  const [jokefromhtmexhumrPhase, setJokeFromhtmexhumrPhase] = useState<
    'input' | 'loading' | 'result'
  >('input');
  const [jokefromhtmexhumrJoke, setJokeFromhtmexhumrJoke] = useState('');
  const [jokefromhtmexhumrScore, setJokeFromhtmexhumrScore] = useState<
    number | null
  >(null);
  const [jokefromhtmexhumrVerdict, setJokeFromhtmexhumrVerdict] = useState<
    'good' | 'bad' | null
  >(null);

  const jokefromhtmexhumrPickResult = () => {
    const trimmed = jokefromhtmexhumrJoke.trim();
    const len = trimmed.length;
    const good =
      len >= 30 && /[!?]/.test(trimmed) ? true : Math.random() > 0.55;

    if (good) {
      const pick =
        jokefromhtmexhumrRateGoodPhrases[
          Math.floor(Math.random() * jokefromhtmexhumrRateGoodPhrases.length)
        ]!;
      setJokeFromhtmexhumrVerdict('good');
      setJokeFromhtmexhumrScore(pick.score);
      return pick;
    }

    const pick =
      jokefromhtmexhumrRateBadPhrases[
        Math.floor(Math.random() * jokefromhtmexhumrRateBadPhrases.length)
      ]!;
    setJokeFromhtmexhumrVerdict('bad');
    setJokeFromhtmexhumrScore(pick.score);
    return pick;
  };

  const [jokefromhtmexhumrResultText, setJokeFromhtmexhumrResultText] =
    useState<{title: string; body: string} | null>(null);

  const jokefromhtmexhumrStart = () => {
    if (!jokefromhtmexhumrJoke.trim()) {
      return;
    }
    setJokeFromhtmexhumrPhase('loading');
    setTimeout(() => {
      const pick = jokefromhtmexhumrPickResult();
      setJokeFromhtmexhumrResultText({title: pick.title, body: pick.body});
      setJokeFromhtmexhumrPhase('result');
    }, 4000);
  };

  const jokefromhtmexhumrReset = () => {
    setJokeFromhtmexhumrPhase('input');
    setJokeFromhtmexhumrScore(null);
    setJokeFromhtmexhumrVerdict(null);
    setJokeFromhtmexhumrResultText(null);
    setJokeFromhtmexhumrJoke('');
  };

  useFocusEffect(
    useCallback(() => {
      jokefromhtmexhumrReset();
    }, []),
  );

  const jokefromhtmexhumrShareResult = async () => {
    try {
      await Share.share({
        message:
          'Rate My Joke\n\n' +
          `Joke:\n${jokefromhtmexhumrJoke}\n\n` +
          `Result: ${jokefromhtmexhumrResultText?.title ?? ''} (${
            jokefromhtmexhumrScore ?? ''
          }/10)\n\n` +
          `${jokefromhtmexhumrResultText?.body ?? ''}`,
      });
    } catch {
      console.log('error');
    }
  };

  const jokefromhtmexhumrCanJudge = jokefromhtmexhumrJoke.trim().length > 0;

  return (
    <View style={styles.jokefromhtmexhumrRoot}>
      <ScrollView
        contentContainerStyle={styles.jokefromhtmexhumrScrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.jokefromhtmexhumrHeader}>
          <Text style={styles.jokefromhtmexhumrHeaderIcon}>⭐</Text>
          <View>
            <Text style={styles.jokefromhtmexhumrHeaderTitle}>
              Rate My Joke
            </Text>
            <Text style={styles.jokefromhtmexhumrHeaderSubtitle}>
              Miguel will personally judge your humor
            </Text>
          </View>
        </View>

        {jokefromhtmexhumrPhase === 'input' ? (
          <>
            <LinearGradient
              colors={['#600B1A40', '#9F4A0A26']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.jokefromhtmexhumrJudgeCard}>
              <View style={styles.jokefromhtmexhumrJudgeRow}>
                <Image
                  source={require('../assets/i/chiijokefromemxrat.png')}
                  style={styles.jokefromhtmexhumrJudgeAvatar}
                />
                <View style={styles.jokefromhtmexhumrJudgeTextCol}>
                  <Text style={styles.jokefromhtmexhumrJudgeTitle}>
                    Miguel the Judge says:
                  </Text>
                  <Text style={styles.jokefromhtmexhumrJudgeBody}>
                    {
                      '"Think you are funny, amigo?\nWrite your best joke below and I, Miguel, will evaluate it with the precision of a taco master.\nDo not disappoint me."'
                    }
                  </Text>
                </View>
              </View>
            </LinearGradient>

            <Text
              style={[styles.jokefromhtmexhumrSectionLabel, {marginTop: 10}]}>
              YOUR JOKE
            </Text>
            <View style={styles.jokefromhtmexhumrInputWrap}>
              <TextInput
                value={jokefromhtmexhumrJoke}
                onChangeText={setJokeFromhtmexhumrJoke}
                placeholder="Type your funniest joke here... Don't be shy, amigo! 🙂"
                placeholderTextColor="#FFFFFF52"
                multiline
                maxLength={500}
                style={styles.jokefromhtmexhumrInput}
                textAlignVertical="top"
              />
              <Text style={styles.jokefromhtmexhumrCounter}>
                {jokefromhtmexhumrJoke.length}/500
              </Text>
            </View>

            <View style={styles.jokefromhtmexhumrTipsCard}>
              <Text style={styles.jokefromhtmexhumrTipsTitle}>
                💡 Tips from Miguel:
              </Text>
              <Text style={styles.jokefromhtmexhumrTipsBody}>
                Setup + punchline works best{'\n'}Timing is everything, even in
                text{'\n'}More specific = more funny
              </Text>
            </View>

            <Pressable
              onPress={jokefromhtmexhumrStart}
              disabled={!jokefromhtmexhumrCanJudge}>
              <LinearGradient
                colors={['#600B1A', '#9F4A0A']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={[
                  styles.jokefromhtmexhumrPrimaryBtn,
                  !jokefromhtmexhumrCanJudge &&
                    styles.jokefromhtmexhumrPrimaryBtnDisabled,
                ]}>
                <Text style={styles.jokefromhtmexhumrPrimaryText}>
                  {jokefromhtmexhumrCanJudge
                    ? '😃 Let Miguel Judge!'
                    : 'Write your joke first...'}
                </Text>
              </LinearGradient>
            </Pressable>
          </>
        ) : null}

        {jokefromhtmexhumrPhase === 'loading' ? (
          <View style={styles.jokefromhtmexhumrLoadingWrap}>
            <Image
              source={require('../assets/i/chiijokefromload.png')}
              style={styles.jokefromhtmexhumrLoadingMiguel}
              resizeMode="contain"
            />
            <Text style={styles.jokefromhtmexhumrLoadingTitle}>
              Miguel is evaluating…
            </Text>
            <Text style={styles.jokefromhtmexhumrLoadingBody}>
              He is consulting his vast comedy archives, his abuela's wisdom,
              and 47 years of experience.
            </Text>
            <View style={styles.jokefromhtmexhumrDots}>
              <WebView
                source={{html: jokefromhtmexhumrRateLoaderHtml}}
                scrollEnabled={false}
                originWhitelist={['*']}
                style={{
                  width: '100%',
                  height: 50,
                  backgroundColor: 'transparent',
                }}
              />
            </View>
            <View style={styles.jokefromhtmexhumrQuoteCard}>
              <Text style={styles.jokefromhtmexhumrQuoteText}>
                {
                  '"Hmm… let me think about this very carefully.\nMy reputation as a comedy judge is on the line, ¿no?"'
                }
              </Text>
            </View>
          </View>
        ) : null}

        {jokefromhtmexhumrPhase === 'result' &&
        jokefromhtmexhumrResultText ? (
          <>
            <LinearGradient
              colors={
                jokefromhtmexhumrVerdict !== 'good'
                  ? ['#600B1A66', '#500A1466']
                  : ['#2EA04333', '#9F4A0A26']
              }
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={[
                styles.jokefromhtmexhumrResultCard,
                jokefromhtmexhumrVerdict !== 'good'
                  ? styles.jokefromhtmexhumrResultBorderGood
                  : styles.jokefromhtmexhumrResultBorderBad,
              ]}>
              <View style={{padding: 16, alignItems: 'center'}}>
                <Image
                  source={
                    jokefromhtmexhumrVerdict === 'good'
                      ? require('../assets/i/chiijokefromemyes.png')
                      : require('../assets/i/chiijokefromemno.png')
                  }
                  style={styles.jokefromhtmexhumrResultMiguel}
                  resizeMode="contain"
                />
                <Text
                  style={[
                    styles.jokefromhtmexhumrResultTitle,
                    jokefromhtmexhumrVerdict === 'good'
                      ? styles.jokefromhtmexhumrResultTitleGood
                      : styles.jokefromhtmexhumrResultTitleBad,
                  ]}>
                  {jokefromhtmexhumrResultText.title}
                </Text>

                <View
                  style={[
                    styles.jokefromhtmexhumrStarsRow,
                    jokefromhtmexhumrVerdict === 'good'
                      ? styles.jokefromhtmexhumrStarsRowGood
                      : styles.jokefromhtmexhumrStarsRowBad,
                  ]}>
                  <Text style={styles.jokefromhtmexhumrStars}>
                    {'⭐'.repeat(
                      Math.max(
                        0,
                        Math.min(
                          5,
                          Math.round((jokefromhtmexhumrScore ?? 0) / 2),
                        ),
                      ),
                    )}
                    {'☆'.repeat(
                      Math.max(
                        0,
                        5 - Math.round((jokefromhtmexhumrScore ?? 0) / 2),
                      ),
                    )}
                  </Text>
                  <Text style={styles.jokefromhtmexhumrScoreText}>
                    {jokefromhtmexhumrScore ?? 0}/10
                  </Text>
                </View>

                <Text style={styles.jokefromhtmexhumrResultBody}>
                  {jokefromhtmexhumrResultText.body}
                </Text>
              </View>
            </LinearGradient>

            <View
              style={[
                styles.jokefromhtmexhumrMiniInputWrap,
                {marginTop: 18},
              ]}>
              <Text
                style={[
                  styles.jokefromhtmexhumrSectionLabel,
                  {color: '#FFFFFF80'},
                ]}>
                YOUR JOKE
              </Text>
              <Text style={styles.jokefromhtmexhumrMiniInputText}>
                {jokefromhtmexhumrJoke}
              </Text>
            </View>

            <View style={styles.jokefromhtmexhumrResultBtnRow}>
              <Pressable
                onPress={jokefromhtmexhumrShareResult}
                style={{flex: 1}}>
                <LinearGradient
                  colors={['#600B1A', '#9F4A0A']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.jokefromhtmexhumrShareBtn}>
                  <Text style={styles.jokefromhtmexhumrShareText}>
                    📤 Share Result
                  </Text>
                </LinearGradient>
              </Pressable>
              <Pressable
                onPress={jokefromhtmexhumrReset}
                style={styles.jokefromhtmexhumrBackBtn}>
                <Text style={styles.jokefromhtmexhumrBackText}>Back</Text>
              </Pressable>
            </View>
          </>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default JokeFromhtmexhumrrate;

const styles = StyleSheet.create({
  jokefromhtmexhumrJudgeTitle: {
    color: '#E6AD4C',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
  },

  jokefromhtmexhumrJudgeBody: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },

  jokefromhtmexhumrRoot: {
    flex: 1,
    backgroundColor: '#050505',
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
  jokefromhtmexhumrHeaderSubtitle: {
    marginTop: 4,
    color: '#E6AD4CB2',
    fontSize: 13,
    fontWeight: '400',
  },

  jokefromhtmexhumrJudgeCard: {
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    backgroundColor: '#FFFFFF0A',
    marginTop: 6,
  },
  jokefromhtmexhumrJudgeRow: {
    padding: 14,
    flexDirection: 'row',
    gap: 22,
    alignItems: 'center',
  },
  jokefromhtmexhumrJudgeAvatar: {},
  jokefromhtmexhumrJudgeTextCol: {
    flex: 1,
  },

  jokefromhtmexhumrSectionLabel: {
    marginBottom: 8,
    color: '#E6AD4C',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  jokefromhtmexhumrInputWrap: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 16,
  },
  jokefromhtmexhumrInput: {
    minHeight: 150,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
  },
  jokefromhtmexhumrCounter: {
    marginTop: 10,
    color: '#FFFFFF70',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'right',
  },

  jokefromhtmexhumrTipsCard: {
    marginTop: 14,
    borderRadius: 18,
    backgroundColor: '#FFFFFF08',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
  },
  jokefromhtmexhumrTipsTitle: {
    color: '#FFFFFF66',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
  },
  jokefromhtmexhumrTipsBody: {
    color: '#FFFFFF80',
    fontSize: 12.5,
    fontWeight: '400',
    lineHeight: 18,
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
    opacity: 0.55,
  },
  jokefromhtmexhumrPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  jokefromhtmexhumrLoadingWrap: {
    alignItems: 'center',
    paddingTop: 40,
  },
  jokefromhtmexhumrLoadingMiguel: {marginBottom: 20},
  jokefromhtmexhumrLoadingTitle: {
    marginTop: 10,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  jokefromhtmexhumrLoadingBody: {
    marginTop: 10,
    color: '#FFFFFF9E',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
    paddingHorizontal: 14,
  },
  jokefromhtmexhumrDots: {
    marginTop: 28,
    flexDirection: 'row',
    gap: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  jokefromhtmexhumrDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF1A',
  },
  jokefromhtmexhumrDotOn: {
    backgroundColor: '#E2A63B',
  },
  jokefromhtmexhumrQuoteCard: {
    marginTop: 38,
    borderRadius: 16,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 17,
    maxWidth: 320,
  },
  jokefromhtmexhumrQuoteText: {
    color: '#FFFFFFA8',
    fontSize: 12.5,
    fontWeight: '400',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 18,
  },

  jokefromhtmexhumrResultCard: {
    borderRadius: 24,
    marginTop: 6,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF0A',
  },
  jokefromhtmexhumrResultBorderGood: {
    borderColor: '#FF3D5A4D',
  },
  jokefromhtmexhumrResultBorderBad: {
    borderColor: '#2EA0434D',
  },
  jokefromhtmexhumrResultGood: {
    borderColor: '#2F7A3A66',
  },
  jokefromhtmexhumrResultBad: {
    borderColor: '#7A1E1666',
  },
  jokefromhtmexhumrResultMiguel: {
    marginBottom: 6,
  },
  jokefromhtmexhumrResultTitle: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
  },
  jokefromhtmexhumrResultTitleGood: {
    color: '#4ADE80',
  },
  jokefromhtmexhumrResultTitleBad: {
    color: '#FF3D5A',
  },
  jokefromhtmexhumrStarsRow: {
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
  jokefromhtmexhumrStarsRowGood: {
    borderColor: '#4ADE8066',
    backgroundColor: '#4ADE801A',
  },
  jokefromhtmexhumrStarsRowBad: {
    borderColor: '#FF3D5A66',
    backgroundColor: '#FF3D5A1A',
  },
  jokefromhtmexhumrStars: {
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  jokefromhtmexhumrScoreText: {
    color: '#FFFFFFB8',
    fontSize: 13,
    fontWeight: '600',
  },
  jokefromhtmexhumrResultBody: {
    color: '#FFFFFFD6',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 14,
  },
  jokefromhtmexhumrMiniInputWrap: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
  },
  jokefromhtmexhumrMiniInputText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
  },
  jokefromhtmexhumrResultBtnRow: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 12,
  },
  jokefromhtmexhumrShareBtn: {
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7A1E16',
    borderWidth: 1,
    borderColor: '#7A1E1640',
  },
  jokefromhtmexhumrShareText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  jokefromhtmexhumrBackBtn: {
    flex: 1,
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF12',
    borderWidth: 1,
    borderColor: '#FFFFFF1A',
  },
  jokefromhtmexhumrBackText: {
    color: '#FFFFFFCC',
    fontSize: 14,
    fontWeight: '800',
  },
});
