// details jokes

import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useMemo, useState} from 'react';

import {
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type JokeFromhtmexhumrJksDtlParams = {
  categoryKey?: string;
  title: string;
  subtitle: string;
  quote?: string;
  tag?: string;
  icon?: string;
  accent?: string;
  jokes: string[];
};

type JokeFromhtmexhumrSavedJokeItem = {
  id: string;
  categoryKey: string;
  categoryTitle: string;
  categoryIcon: string;
  joke: string;
};

const JokeFromhtmexhumrjksdtl = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const jokefromhtmexhumrParams =
    (route.params as JokeFromhtmexhumrJksDtlParams | undefined) ?? undefined;

  const jokefromhtmexhumrCategoryKey =
    jokefromhtmexhumrParams?.categoryKey ?? 'unknown';
  const jokefromhtmexhumrTitle = jokefromhtmexhumrParams?.title ?? '';
  const jokefromhtmexhumrSubtitle = jokefromhtmexhumrParams?.subtitle ?? '';
  const jokefromhtmexhumrQuote =
    jokefromhtmexhumrParams?.quote ??
    '"Ay, caramba! Why is everything so WRONG?!"';
  const jokefromhtmexhumrTag = jokefromhtmexhumrParams?.tag ?? '🌶️';
  const jokefromhtmexhumrIcon = jokefromhtmexhumrParams?.icon ?? '😤';
  const jokefromhtmexhumrAccent =
    jokefromhtmexhumrParams?.accent ?? '#E2A63B';
  const jokefromhtmexhumrJokes = jokefromhtmexhumrParams?.jokes ?? [];

  const jokefromhtmexhumrStorageKey = useMemo(
    () => `jokefromhtmexhumr:savedJokes:${jokefromhtmexhumrCategoryKey}`,
    [jokefromhtmexhumrCategoryKey],
  );
  const jokefromhtmexhumrAllSavedKey = 'jokefromhtmexhumr:savedJokes:all';

  const jokefromhtmexhumrInitialSaved = useMemo(
    () => new Array(jokefromhtmexhumrJokes.length).fill(false) as boolean[],
    [jokefromhtmexhumrJokes.length],
  );
  const [jokefromhtmexhumrSaved, setJokeFromhtmexhumrSaved] = useState<
    boolean[]
  >(jokefromhtmexhumrInitialSaved);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(jokefromhtmexhumrStorageKey);
        if (!alive) {
          return;
        }
        if (!raw) {
          setJokeFromhtmexhumrSaved(jokefromhtmexhumrInitialSaved);
          return;
        }
        const parsed = JSON.parse(raw) as unknown;
        if (!Array.isArray(parsed)) {
          setJokeFromhtmexhumrSaved(jokefromhtmexhumrInitialSaved);
          return;
        }

        const restored = jokefromhtmexhumrInitialSaved.map((_, idx) =>
          Boolean(parsed[idx]),
        );
        setJokeFromhtmexhumrSaved(restored);
      } catch {
        setJokeFromhtmexhumrSaved(jokefromhtmexhumrInitialSaved);
      }
    })();
    return () => {
      alive = false;
    };
  }, [jokefromhtmexhumrInitialSaved, jokefromhtmexhumrStorageKey]);

  const jokefromhtmexhumrToggleSaved = (idx: number) => {
    setJokeFromhtmexhumrSaved(prev => {
      const next = [...prev];
      next[idx] = !next[idx];
      AsyncStorage.setItem(jokefromhtmexhumrStorageKey, JSON.stringify(next))
        .then(async () => {
          try {
            const raw = await AsyncStorage.getItem(
              jokefromhtmexhumrAllSavedKey,
            );
            const parsed = raw ? (JSON.parse(raw) as unknown) : [];
            const list: JokeFromhtmexhumrSavedJokeItem[] = Array.isArray(
              parsed,
            )
              ? (parsed as JokeFromhtmexhumrSavedJokeItem[])
              : [];

            const jokeText = jokefromhtmexhumrJokes[idx] ?? '';
            const id = `${jokefromhtmexhumrCategoryKey}:${jokeText}`;
            const exists = list.some(x => x?.id === id);

            const nextList = next[idx]
              ? exists
                ? list
                : [
                    ...list,
                    {
                      id,
                      categoryKey: jokefromhtmexhumrCategoryKey,
                      categoryTitle: jokefromhtmexhumrTitle,
                      categoryIcon: jokefromhtmexhumrIcon,
                      joke: jokeText,
                    },
                  ]
              : list.filter(x => x?.id !== id);

            await AsyncStorage.setItem(
              jokefromhtmexhumrAllSavedKey,
              JSON.stringify(nextList),
            );
          } catch {
            // ignore
          }
        })
        .catch(() => {});
      return next;
    });
  };

  const jokefromhtmexhumrShareJoke = async (joke: string) => {
    try {
      await Share.share({
        message: `${jokefromhtmexhumrTitle}\n\n${joke}`,
      });
    } catch {
      console.log('error');
    }
  };

  return (
    <View style={styles.jokefromhtmexhumrRoot}>
      <LinearGradient
        colors={['#600B1ACC', '#00000000']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={styles.jokefromhtmexhumrTopGlow}
      />

      <ScrollView
        contentContainerStyle={styles.jokefromhtmexhumrScrollContent}
        showsVerticalScrollIndicator={false}>
        <Pressable
          onPress={() => navigation.goBack()}
          hitSlop={10}
          style={styles.jokefromhtmexhumrBackPill}>
          <Text style={styles.jokefromhtmexhumrBackText}>← Back</Text>
        </Pressable>

        <View style={styles.jokefromhtmexhumrHeader}>
          <Text style={styles.jokefromhtmexhumrHeaderIcon}>
            {jokefromhtmexhumrIcon}
          </Text>

          <View>
            <Text style={styles.jokefromhtmexhumrHeaderTitle}>
              {jokefromhtmexhumrTitle}
            </Text>
            <Text
              style={[
                styles.jokefromhtmexhumrHeaderSubtitle,
                {color: jokefromhtmexhumrAccent},
              ]}>
              {jokefromhtmexhumrSubtitle} {jokefromhtmexhumrTag}
            </Text>
            <Text style={styles.jokefromhtmexhumrHeaderQuote}>
              {jokefromhtmexhumrQuote}
            </Text>
          </View>
        </View>

        <View style={styles.jokefromhtmexhumrList}>
          {jokefromhtmexhumrJokes.map((joke, idx) => (
            <View key={idx} style={styles.jokefromhtmexhumrJokeCard}>
              <View style={styles.jokefromhtmexhumrJokeTopRow}>
                <View style={styles.jokefromhtmexhumrJokeIndexPill}>
                  <Text style={styles.jokefromhtmexhumrJokeIndexText}>
                    {idx + 1}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.jokefromhtmexhumrJokeTag,
                    {color: jokefromhtmexhumrAccent},
                  ]}>
                  {jokefromhtmexhumrIcon} {jokefromhtmexhumrTitle}
                </Text>
              </View>

              <Text style={styles.jokefromhtmexhumrJokeBody}>{joke}</Text>

              <View style={styles.jokefromhtmexhumrActions}>
                <Pressable
                  onPress={() => jokefromhtmexhumrToggleSaved(idx)}
                  style={[
                    styles.jokefromhtmexhumrActionBtn,
                    jokefromhtmexhumrSaved[idx]
                      ? styles.jokefromhtmexhumrActionBtnSaved
                      : styles.jokefromhtmexhumrActionBtnIdle,
                  ]}>
                  <Text style={styles.jokefromhtmexhumrActionText}>
                    {jokefromhtmexhumrSaved[idx] ? '🔖 Saved' : '🔖 Save'}
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => {
                    jokefromhtmexhumrShareJoke(joke);
                  }}
                  style={[
                    styles.jokefromhtmexhumrActionBtn,
                    styles.jokefromhtmexhumrShareBtn,
                  ]}>
                  <Text style={styles.jokefromhtmexhumrActionText}>
                    📤 Share
                  </Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.jokefromhtmexhumrBottomPad} />
      </ScrollView>
    </View>
  );
};

export default JokeFromhtmexhumrjksdtl;

const styles = StyleSheet.create({
  jokefromhtmexhumrBackPill: {
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#FFFFFF10',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    marginBottom: 14,
  },

  jokefromhtmexhumrRoot: {
    flexGrow: 1,

    backgroundColor: '#0A0203',
  },
  jokefromhtmexhumrScrollContent: {
    paddingHorizontal: 20,

    paddingTop: 60,
    paddingBottom: 40,
  },
  jokefromhtmexhumrTopGlow: {
    height: 220,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },

  jokefromhtmexhumrBackText: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '700',
  },

  jokefromhtmexhumrHeader: {
    alignItems: 'center',
    paddingBottom: 10,
    flexDirection: 'row',
    gap: 22,
  },

  jokefromhtmexhumrHeaderIcon: {
    fontSize: 32,
  },
  jokefromhtmexhumrHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
  },
  jokefromhtmexhumrHeaderSubtitle: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: '400',
  },
  jokefromhtmexhumrHeaderQuote: {
    marginTop: 5,
    color: '#FFFFFFA8',
    fontSize: 12.5,
    fontWeight: '400',
    fontStyle: 'italic',
  },

  jokefromhtmexhumrList: {
    marginTop: 14,
    gap: 14,
  },
  jokefromhtmexhumrJokeCard: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 16,
  },
  jokefromhtmexhumrJokeTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  jokefromhtmexhumrJokeIndexPill: {
    width: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: '#7A1E16',
    alignItems: 'center',
    justifyContent: 'center',
  },
  jokefromhtmexhumrJokeIndexText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  jokefromhtmexhumrJokeTag: {
    fontSize: 13,
    fontWeight: '700',
  },
  jokefromhtmexhumrJokeBody: {
    color: '#FFFFFFD6',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },

  jokefromhtmexhumrActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 14,
  },
  jokefromhtmexhumrActionBtn: {
    flex: 1,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  jokefromhtmexhumrActionBtnIdle: {
    backgroundColor: '#FFFFFF12',
    borderColor: '#FFFFFF14',
  },
  jokefromhtmexhumrActionBtnSaved: {
    backgroundColor: '#E6AD4C33',
    borderColor: '#E6AD4C66',
  },
  jokefromhtmexhumrShareBtn: {
    backgroundColor: '#600B1A4D',
    borderColor: '#600B1A66',
  },
  jokefromhtmexhumrActionText: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '600',
  },

  jokefromhtmexhumrBottomPad: {
    height: 8,
  },
});
