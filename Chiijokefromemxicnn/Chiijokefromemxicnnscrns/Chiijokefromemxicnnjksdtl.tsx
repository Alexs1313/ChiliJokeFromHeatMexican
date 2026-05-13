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
import Chiijokefromemxicnnback from '../Chiijokefromemxicnncmp/Chiijokefromemxicnnback';

type ChiijokefromemxicnnJksDtlParams = {
  categoryKey?: string;
  title: string;
  subtitle: string;
  quote?: string;
  tag?: string;
  icon?: string;
  accent?: string;
  jokes: string[];
};

type ChiijokefromemxicnnSavedJokeItem = {
  id: string;
  categoryKey: string;
  categoryTitle: string;
  categoryIcon: string;
  joke: string;
};

const Chiijokefromemxicnnjksdtl = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const chiijokefromemxicnnParams =
    (route.params as ChiijokefromemxicnnJksDtlParams | undefined) ?? undefined;

  const chiijokefromemxicnnCategoryKey =
    chiijokefromemxicnnParams?.categoryKey ?? 'unknown';
  const chiijokefromemxicnnTitle = chiijokefromemxicnnParams?.title ?? '';
  const chiijokefromemxicnnSubtitle = chiijokefromemxicnnParams?.subtitle ?? '';
  const chiijokefromemxicnnQuote =
    chiijokefromemxicnnParams?.quote ??
    '"Ay, caramba! Why is everything so WRONG?!"';
  const chiijokefromemxicnnTag = chiijokefromemxicnnParams?.tag ?? '🌶️';
  const chiijokefromemxicnnIcon = chiijokefromemxicnnParams?.icon ?? '😤';
  const chiijokefromemxicnnAccent =
    chiijokefromemxicnnParams?.accent ?? '#E2A63B';
  const chiijokefromemxicnnJokes = chiijokefromemxicnnParams?.jokes ?? [];

  const chiijokefromemxicnnStorageKey = useMemo(
    () => `chiijokefromemxicnn:savedJokes:${chiijokefromemxicnnCategoryKey}`,
    [chiijokefromemxicnnCategoryKey],
  );
  const chiijokefromemxicnnAllSavedKey = 'chiijokefromemxicnn:savedJokes:all';

  const chiijokefromemxicnnInitialSaved = useMemo(
    () => new Array(chiijokefromemxicnnJokes.length).fill(false) as boolean[],
    [chiijokefromemxicnnJokes.length],
  );
  const [chiijokefromemxicnnSaved, setChiijokefromemxicnnSaved] = useState<
    boolean[]
  >(chiijokefromemxicnnInitialSaved);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(chiijokefromemxicnnStorageKey);
        if (!alive) {
          return;
        }
        if (!raw) {
          setChiijokefromemxicnnSaved(chiijokefromemxicnnInitialSaved);
          return;
        }
        const parsed = JSON.parse(raw) as unknown;
        if (!Array.isArray(parsed)) {
          setChiijokefromemxicnnSaved(chiijokefromemxicnnInitialSaved);
          return;
        }

        const restored = chiijokefromemxicnnInitialSaved.map((_, idx) =>
          Boolean(parsed[idx]),
        );
        setChiijokefromemxicnnSaved(restored);
      } catch {
        setChiijokefromemxicnnSaved(chiijokefromemxicnnInitialSaved);
      }
    })();
    return () => {
      alive = false;
    };
  }, [chiijokefromemxicnnInitialSaved, chiijokefromemxicnnStorageKey]);

  const chiijokefromemxicnnToggleSaved = (idx: number) => {
    setChiijokefromemxicnnSaved(prev => {
      const next = [...prev];
      next[idx] = !next[idx];
      AsyncStorage.setItem(chiijokefromemxicnnStorageKey, JSON.stringify(next))
        .then(async () => {
          try {
            const raw = await AsyncStorage.getItem(
              chiijokefromemxicnnAllSavedKey,
            );
            const parsed = raw ? (JSON.parse(raw) as unknown) : [];
            const list: ChiijokefromemxicnnSavedJokeItem[] = Array.isArray(
              parsed,
            )
              ? (parsed as ChiijokefromemxicnnSavedJokeItem[])
              : [];

            const jokeText = chiijokefromemxicnnJokes[idx] ?? '';
            const id = `${chiijokefromemxicnnCategoryKey}:${jokeText}`;
            const exists = list.some(x => x?.id === id);

            const nextList = next[idx]
              ? exists
                ? list
                : [
                    ...list,
                    {
                      id,
                      categoryKey: chiijokefromemxicnnCategoryKey,
                      categoryTitle: chiijokefromemxicnnTitle,
                      categoryIcon: chiijokefromemxicnnIcon,
                      joke: jokeText,
                    },
                  ]
              : list.filter(x => x?.id !== id);

            await AsyncStorage.setItem(
              chiijokefromemxicnnAllSavedKey,
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

  const chiijokefromemxicnnShareJoke = async (joke: string) => {
    try {
      await Share.share({
        message: `${chiijokefromemxicnnTitle}\n\n${joke}`,
      });
    } catch {
      console.log('error');
    }
  };

  return (
    <Chiijokefromemxicnnback>
      <LinearGradient
        colors={['#600B1ACC', '#00000000']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={styles.chiijokefromemxicnnTopGlow}
      />

      <ScrollView
        contentContainerStyle={styles.chiijokefromemxicnnScrollContent}
        showsVerticalScrollIndicator={false}>
        <Pressable
          onPress={() => navigation.goBack()}
          hitSlop={10}
          style={styles.chiijokefromemxicnnBackPill}>
          <Text style={styles.chiijokefromemxicnnBackText}>← Back</Text>
        </Pressable>

        <View style={styles.chiijokefromemxicnnHeader}>
          <Text style={styles.chiijokefromemxicnnHeaderIcon}>
            {chiijokefromemxicnnIcon}
          </Text>

          <View>
            <Text style={styles.chiijokefromemxicnnHeaderTitle}>
              {chiijokefromemxicnnTitle}
            </Text>
            <Text
              style={[
                styles.chiijokefromemxicnnHeaderSubtitle,
                {color: chiijokefromemxicnnAccent},
              ]}>
              {chiijokefromemxicnnSubtitle} {chiijokefromemxicnnTag}
            </Text>
            <Text style={styles.chiijokefromemxicnnHeaderQuote}>
              {chiijokefromemxicnnQuote}
            </Text>
          </View>
        </View>

        <View style={styles.chiijokefromemxicnnList}>
          {chiijokefromemxicnnJokes.map((joke, idx) => (
            <View key={idx} style={styles.chiijokefromemxicnnJokeCard}>
              <View style={styles.chiijokefromemxicnnJokeTopRow}>
                <View style={styles.chiijokefromemxicnnJokeIndexPill}>
                  <Text style={styles.chiijokefromemxicnnJokeIndexText}>
                    {idx + 1}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.chiijokefromemxicnnJokeTag,
                    {color: chiijokefromemxicnnAccent},
                  ]}>
                  {chiijokefromemxicnnIcon} {chiijokefromemxicnnTitle}
                </Text>
              </View>

              <Text style={styles.chiijokefromemxicnnJokeBody}>{joke}</Text>

              <View style={styles.chiijokefromemxicnnActions}>
                <Pressable
                  onPress={() => chiijokefromemxicnnToggleSaved(idx)}
                  style={[
                    styles.chiijokefromemxicnnActionBtn,
                    chiijokefromemxicnnSaved[idx]
                      ? styles.chiijokefromemxicnnActionBtnSaved
                      : styles.chiijokefromemxicnnActionBtnIdle,
                  ]}>
                  <Text style={styles.chiijokefromemxicnnActionText}>
                    {chiijokefromemxicnnSaved[idx] ? '🔖 Saved' : '🔖 Save'}
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => {
                    chiijokefromemxicnnShareJoke(joke);
                  }}
                  style={[
                    styles.chiijokefromemxicnnActionBtn,
                    styles.chiijokefromemxicnnShareBtn,
                  ]}>
                  <Text style={styles.chiijokefromemxicnnActionText}>
                    📤 Share
                  </Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.chiijokefromemxicnnBottomPad} />
      </ScrollView>
    </Chiijokefromemxicnnback>
  );
};

export default Chiijokefromemxicnnjksdtl;

const styles = StyleSheet.create({
  chiijokefromemxicnnBackPill: {
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#FFFFFF10',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    marginBottom: 14,
  },

  chiijokefromemxicnnRoot: {
    flexGrow: 1,

    backgroundColor: '#0A0203',
  },
  chiijokefromemxicnnScrollContent: {
    paddingHorizontal: 20,

    paddingTop: 60,
    paddingBottom: 40,
  },
  chiijokefromemxicnnTopGlow: {
    height: 220,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },

  chiijokefromemxicnnBackText: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '700',
  },

  chiijokefromemxicnnHeader: {
    alignItems: 'center',
    paddingBottom: 10,
    flexDirection: 'row',
    gap: 22,
  },

  chiijokefromemxicnnHeaderIcon: {
    fontSize: 32,
  },
  chiijokefromemxicnnHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
  },
  chiijokefromemxicnnHeaderSubtitle: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: '400',
  },
  chiijokefromemxicnnHeaderQuote: {
    marginTop: 5,
    color: '#FFFFFFA8',
    fontSize: 12.5,
    fontWeight: '400',
    fontStyle: 'italic',
  },

  chiijokefromemxicnnList: {
    marginTop: 14,
    gap: 14,
  },
  chiijokefromemxicnnJokeCard: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 16,
  },
  chiijokefromemxicnnJokeTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  chiijokefromemxicnnJokeIndexPill: {
    width: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: '#7A1E16',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chiijokefromemxicnnJokeIndexText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  chiijokefromemxicnnJokeTag: {
    fontSize: 13,
    fontWeight: '700',
  },
  chiijokefromemxicnnJokeBody: {
    color: '#FFFFFFD6',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },

  chiijokefromemxicnnActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 14,
  },
  chiijokefromemxicnnActionBtn: {
    flex: 1,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  chiijokefromemxicnnActionBtnIdle: {
    backgroundColor: '#FFFFFF12',
    borderColor: '#FFFFFF14',
  },
  chiijokefromemxicnnActionBtnSaved: {
    backgroundColor: '#E6AD4C33',
    borderColor: '#E6AD4C66',
  },
  chiijokefromemxicnnShareBtn: {
    backgroundColor: '#600B1A4D',
    borderColor: '#600B1A66',
  },
  chiijokefromemxicnnActionText: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '600',
  },

  chiijokefromemxicnnBottomPad: {
    height: 8,
  },
});
