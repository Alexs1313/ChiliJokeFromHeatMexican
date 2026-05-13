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
  chiijokefromemxicnnRateBadPhrases,
  chiijokefromemxicnnRateGoodPhrases,
  chiijokefromemxicnnRateLoaderHtml,
} from '../Chiijokefromemxicnndata/chiijokefromemxicnndatarate';
import Chiijokefromemxicnnback from '../Chiijokefromemxicnncmp/Chiijokefromemxicnnback';

const Chiijokefromemxicnnrate = () => {
  const [chiijokefromemxicnnPhase, setChiijokefromemxicnnPhase] = useState<
    'input' | 'loading' | 'result'
  >('input');
  const [chiijokefromemxicnnJoke, setChiijokefromemxicnnJoke] = useState('');
  const [chiijokefromemxicnnScore, setChiijokefromemxicnnScore] = useState<
    number | null
  >(null);
  const [chiijokefromemxicnnVerdict, setChiijokefromemxicnnVerdict] = useState<
    'good' | 'bad' | null
  >(null);

  const chiijokefromemxicnnPickResult = () => {
    const trimmed = chiijokefromemxicnnJoke.trim();
    const len = trimmed.length;
    const good =
      len >= 30 && /[!?]/.test(trimmed) ? true : Math.random() > 0.55;

    if (good) {
      const pick =
        chiijokefromemxicnnRateGoodPhrases[
          Math.floor(Math.random() * chiijokefromemxicnnRateGoodPhrases.length)
        ]!;
      setChiijokefromemxicnnVerdict('good');
      setChiijokefromemxicnnScore(pick.score);
      return pick;
    }

    const pick =
      chiijokefromemxicnnRateBadPhrases[
        Math.floor(Math.random() * chiijokefromemxicnnRateBadPhrases.length)
      ]!;
    setChiijokefromemxicnnVerdict('bad');
    setChiijokefromemxicnnScore(pick.score);
    return pick;
  };

  const [chiijokefromemxicnnResultText, setChiijokefromemxicnnResultText] =
    useState<{title: string; body: string} | null>(null);

  const chiijokefromemxicnnStart = () => {
    if (!chiijokefromemxicnnJoke.trim()) {
      return;
    }
    setChiijokefromemxicnnPhase('loading');
    setTimeout(() => {
      const pick = chiijokefromemxicnnPickResult();
      setChiijokefromemxicnnResultText({title: pick.title, body: pick.body});
      setChiijokefromemxicnnPhase('result');
    }, 4000);
  };

  const chiijokefromemxicnnReset = () => {
    setChiijokefromemxicnnPhase('input');
    setChiijokefromemxicnnScore(null);
    setChiijokefromemxicnnVerdict(null);
    setChiijokefromemxicnnResultText(null);
    setChiijokefromemxicnnJoke('');
  };

  useFocusEffect(
    useCallback(() => {
      chiijokefromemxicnnReset();
    }, []),
  );

  const chiijokefromemxicnnShareResult = async () => {
    try {
      await Share.share({
        message:
          'Rate My Joke\n\n' +
          `Joke:\n${chiijokefromemxicnnJoke}\n\n` +
          `Result: ${chiijokefromemxicnnResultText?.title ?? ''} (${
            chiijokefromemxicnnScore ?? ''
          }/10)\n\n` +
          `${chiijokefromemxicnnResultText?.body ?? ''}`,
      });
    } catch {
      console.log('error');
    }
  };

  const chiijokefromemxicnnCanJudge = chiijokefromemxicnnJoke.trim().length > 0;

  return (
    <Chiijokefromemxicnnback>
      <ScrollView
        contentContainerStyle={styles.chiijokefromemxicnnScrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.chiijokefromemxicnnHeader}>
          <Text style={styles.chiijokefromemxicnnHeaderIcon}>⭐</Text>
          <View>
            <Text style={styles.chiijokefromemxicnnHeaderTitle}>
              Rate My Joke
            </Text>
            <Text style={styles.chiijokefromemxicnnHeaderSubtitle}>
              Miguel will personally judge your humor
            </Text>
          </View>
        </View>

        {chiijokefromemxicnnPhase === 'input' ? (
          <>
            <LinearGradient
              colors={['#600B1A40', '#9F4A0A26']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.chiijokefromemxicnnJudgeCard}>
              <View style={styles.chiijokefromemxicnnJudgeRow}>
                <Image
                  source={require('../../assets/i/chiijokefromemxrat.png')}
                  style={styles.chiijokefromemxicnnJudgeAvatar}
                />
                <View style={styles.chiijokefromemxicnnJudgeTextCol}>
                  <Text style={styles.chiijokefromemxicnnJudgeTitle}>
                    Miguel the Judge says:
                  </Text>
                  <Text style={styles.chiijokefromemxicnnJudgeBody}>
                    {
                      '"Think you are funny, amigo?\nWrite your best joke below and I, Miguel, will evaluate it with the precision of a taco master.\nDo not disappoint me."'
                    }
                  </Text>
                </View>
              </View>
            </LinearGradient>

            <Text
              style={[styles.chiijokefromemxicnnSectionLabel, {marginTop: 10}]}>
              YOUR JOKE
            </Text>
            <View style={styles.chiijokefromemxicnnInputWrap}>
              <TextInput
                value={chiijokefromemxicnnJoke}
                onChangeText={setChiijokefromemxicnnJoke}
                placeholder="Type your funniest joke here... Don't be shy, amigo! 🙂"
                placeholderTextColor="#FFFFFF52"
                multiline
                maxLength={500}
                style={styles.chiijokefromemxicnnInput}
                textAlignVertical="top"
              />
              <Text style={styles.chiijokefromemxicnnCounter}>
                {chiijokefromemxicnnJoke.length}/500
              </Text>
            </View>

            <View style={styles.chiijokefromemxicnnTipsCard}>
              <Text style={styles.chiijokefromemxicnnTipsTitle}>
                💡 Tips from Miguel:
              </Text>
              <Text style={styles.chiijokefromemxicnnTipsBody}>
                Setup + punchline works best{'\n'}Timing is everything, even in
                text{'\n'}More specific = more funny
              </Text>
            </View>

            <Pressable
              onPress={chiijokefromemxicnnStart}
              disabled={!chiijokefromemxicnnCanJudge}>
              <LinearGradient
                colors={['#600B1A', '#9F4A0A']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={[
                  styles.chiijokefromemxicnnPrimaryBtn,
                  !chiijokefromemxicnnCanJudge &&
                    styles.chiijokefromemxicnnPrimaryBtnDisabled,
                ]}>
                <Text style={styles.chiijokefromemxicnnPrimaryText}>
                  {chiijokefromemxicnnCanJudge
                    ? '😃 Let Miguel Judge!'
                    : 'Write your joke first...'}
                </Text>
              </LinearGradient>
            </Pressable>
          </>
        ) : null}

        {chiijokefromemxicnnPhase === 'loading' ? (
          <View style={styles.chiijokefromemxicnnLoadingWrap}>
            <Image
              source={require('../../assets/i/chiijokefromload.png')}
              style={styles.chiijokefromemxicnnLoadingMiguel}
              resizeMode="contain"
            />
            <Text style={styles.chiijokefromemxicnnLoadingTitle}>
              Miguel is evaluating…
            </Text>
            <Text style={styles.chiijokefromemxicnnLoadingBody}>
              He is consulting his vast comedy archives, his abuela's wisdom,
              and 47 years of experience.
            </Text>
            <View style={styles.chiijokefromemxicnnDots}>
              <WebView
                source={{html: chiijokefromemxicnnRateLoaderHtml}}
                scrollEnabled={false}
                originWhitelist={['*']}
                style={{
                  width: '100%',
                  height: 50,
                  backgroundColor: 'transparent',
                }}
              />
            </View>
            <View style={styles.chiijokefromemxicnnQuoteCard}>
              <Text style={styles.chiijokefromemxicnnQuoteText}>
                {
                  '"Hmm… let me think about this very carefully.\nMy reputation as a comedy judge is on the line, ¿no?"'
                }
              </Text>
            </View>
          </View>
        ) : null}

        {chiijokefromemxicnnPhase === 'result' &&
        chiijokefromemxicnnResultText ? (
          <>
            <LinearGradient
              colors={
                chiijokefromemxicnnVerdict !== 'good'
                  ? ['#600B1A66', '#500A1466']
                  : ['#2EA04333', '#9F4A0A26']
              }
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={[
                styles.chiijokefromemxicnnResultCard,
                chiijokefromemxicnnVerdict !== 'good'
                  ? styles.chiijokefromemxicnnResultBorderGood
                  : styles.chiijokefromemxicnnResultBorderBad,
              ]}>
              <View style={{padding: 16, alignItems: 'center'}}>
                <Image
                  source={
                    chiijokefromemxicnnVerdict === 'good'
                      ? require('../../assets/i/chiijokefromemyes.png')
                      : require('../../assets/i/chiijokefromemno.png')
                  }
                  style={styles.chiijokefromemxicnnResultMiguel}
                  resizeMode="contain"
                />
                <Text
                  style={[
                    styles.chiijokefromemxicnnResultTitle,
                    chiijokefromemxicnnVerdict === 'good'
                      ? styles.chiijokefromemxicnnResultTitleGood
                      : styles.chiijokefromemxicnnResultTitleBad,
                  ]}>
                  {chiijokefromemxicnnResultText.title}
                </Text>

                <View
                  style={[
                    styles.chiijokefromemxicnnStarsRow,
                    chiijokefromemxicnnVerdict === 'good'
                      ? styles.chiijokefromemxicnnStarsRowGood
                      : styles.chiijokefromemxicnnStarsRowBad,
                  ]}>
                  <Text style={styles.chiijokefromemxicnnStars}>
                    {'⭐'.repeat(
                      Math.max(
                        0,
                        Math.min(
                          5,
                          Math.round((chiijokefromemxicnnScore ?? 0) / 2),
                        ),
                      ),
                    )}
                    {'☆'.repeat(
                      Math.max(
                        0,
                        5 - Math.round((chiijokefromemxicnnScore ?? 0) / 2),
                      ),
                    )}
                  </Text>
                  <Text style={styles.chiijokefromemxicnnScoreText}>
                    {chiijokefromemxicnnScore ?? 0}/10
                  </Text>
                </View>

                <Text style={styles.chiijokefromemxicnnResultBody}>
                  {chiijokefromemxicnnResultText.body}
                </Text>
              </View>
            </LinearGradient>

            <View
              style={[
                styles.chiijokefromemxicnnMiniInputWrap,
                {marginTop: 18},
              ]}>
              <Text
                style={[
                  styles.chiijokefromemxicnnSectionLabel,
                  {color: '#FFFFFF80'},
                ]}>
                YOUR JOKE
              </Text>
              <Text style={styles.chiijokefromemxicnnMiniInputText}>
                {chiijokefromemxicnnJoke}
              </Text>
            </View>

            <View style={styles.chiijokefromemxicnnResultBtnRow}>
              <Pressable
                onPress={chiijokefromemxicnnShareResult}
                style={{flex: 1}}>
                <LinearGradient
                  colors={['#600B1A', '#9F4A0A']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.chiijokefromemxicnnShareBtn}>
                  <Text style={styles.chiijokefromemxicnnShareText}>
                    📤 Share Result
                  </Text>
                </LinearGradient>
              </Pressable>
              <Pressable
                onPress={chiijokefromemxicnnReset}
                style={styles.chiijokefromemxicnnBackBtn}>
                <Text style={styles.chiijokefromemxicnnBackText}>Back</Text>
              </Pressable>
            </View>
          </>
        ) : null}
      </ScrollView>
    </Chiijokefromemxicnnback>
  );
};

export default Chiijokefromemxicnnrate;

const styles = StyleSheet.create({
  chiijokefromemxicnnJudgeTitle: {
    color: '#E6AD4C',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
  },

  chiijokefromemxicnnJudgeBody: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },

  chiijokefromemxicnnRoot: {
    flex: 1,
    backgroundColor: '#050505',
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
  chiijokefromemxicnnHeaderSubtitle: {
    marginTop: 4,
    color: '#E6AD4CB2',
    fontSize: 13,
    fontWeight: '400',
  },

  chiijokefromemxicnnJudgeCard: {
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    backgroundColor: '#FFFFFF0A',
    marginTop: 6,
  },
  chiijokefromemxicnnJudgeRow: {
    padding: 14,
    flexDirection: 'row',
    gap: 22,
    alignItems: 'center',
  },
  chiijokefromemxicnnJudgeAvatar: {},
  chiijokefromemxicnnJudgeTextCol: {
    flex: 1,
  },

  chiijokefromemxicnnSectionLabel: {
    marginBottom: 8,
    color: '#E6AD4C',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  chiijokefromemxicnnInputWrap: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 16,
  },
  chiijokefromemxicnnInput: {
    minHeight: 150,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
  },
  chiijokefromemxicnnCounter: {
    marginTop: 10,
    color: '#FFFFFF70',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'right',
  },

  chiijokefromemxicnnTipsCard: {
    marginTop: 14,
    borderRadius: 18,
    backgroundColor: '#FFFFFF08',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
  },
  chiijokefromemxicnnTipsTitle: {
    color: '#FFFFFF66',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
  },
  chiijokefromemxicnnTipsBody: {
    color: '#FFFFFF80',
    fontSize: 12.5,
    fontWeight: '400',
    lineHeight: 18,
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
    opacity: 0.55,
  },
  chiijokefromemxicnnPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  chiijokefromemxicnnLoadingWrap: {
    alignItems: 'center',
    paddingTop: 40,
  },
  chiijokefromemxicnnLoadingMiguel: {marginBottom: 20},
  chiijokefromemxicnnLoadingTitle: {
    marginTop: 10,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  chiijokefromemxicnnLoadingBody: {
    marginTop: 10,
    color: '#FFFFFF9E',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
    paddingHorizontal: 14,
  },
  chiijokefromemxicnnDots: {
    marginTop: 28,
    flexDirection: 'row',
    gap: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chiijokefromemxicnnDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF1A',
  },
  chiijokefromemxicnnDotOn: {
    backgroundColor: '#E2A63B',
  },
  chiijokefromemxicnnQuoteCard: {
    marginTop: 38,
    borderRadius: 16,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 17,
    maxWidth: 320,
  },
  chiijokefromemxicnnQuoteText: {
    color: '#FFFFFFA8',
    fontSize: 12.5,
    fontWeight: '400',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 18,
  },

  chiijokefromemxicnnResultCard: {
    borderRadius: 24,
    marginTop: 6,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF0A',
  },
  chiijokefromemxicnnResultBorderGood: {
    borderColor: '#FF3D5A4D',
  },
  chiijokefromemxicnnResultBorderBad: {
    borderColor: '#2EA0434D',
  },
  chiijokefromemxicnnResultGood: {
    borderColor: '#2F7A3A66',
  },
  chiijokefromemxicnnResultBad: {
    borderColor: '#7A1E1666',
  },
  chiijokefromemxicnnResultMiguel: {
    marginBottom: 6,
  },
  chiijokefromemxicnnResultTitle: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
  },
  chiijokefromemxicnnResultTitleGood: {
    color: '#4ADE80',
  },
  chiijokefromemxicnnResultTitleBad: {
    color: '#FF3D5A',
  },
  chiijokefromemxicnnStarsRow: {
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
  chiijokefromemxicnnStarsRowGood: {
    borderColor: '#4ADE8066',
    backgroundColor: '#4ADE801A',
  },
  chiijokefromemxicnnStarsRowBad: {
    borderColor: '#FF3D5A66',
    backgroundColor: '#FF3D5A1A',
  },
  chiijokefromemxicnnStars: {
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  chiijokefromemxicnnScoreText: {
    color: '#FFFFFFB8',
    fontSize: 13,
    fontWeight: '600',
  },
  chiijokefromemxicnnResultBody: {
    color: '#FFFFFFD6',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 14,
  },
  chiijokefromemxicnnMiniInputWrap: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
  },
  chiijokefromemxicnnMiniInputText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
  },
  chiijokefromemxicnnResultBtnRow: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 12,
  },
  chiijokefromemxicnnShareBtn: {
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7A1E16',
    borderWidth: 1,
    borderColor: '#7A1E1640',
  },
  chiijokefromemxicnnShareText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  chiijokefromemxicnnBackBtn: {
    flex: 1,
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF12',
    borderWidth: 1,
    borderColor: '#FFFFFF1A',
  },
  chiijokefromemxicnnBackText: {
    color: '#FFFFFFCC',
    fontSize: 14,
    fontWeight: '800',
  },
});
