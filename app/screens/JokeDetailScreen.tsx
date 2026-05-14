// details jokes

import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useMemo, useState} from 'react';

import {ScrollView, Share, StyleSheet, Text, View} from 'react-native';

import BackPillButton from '../components/ui/BackPillButton';
import JokeCardActionRow from '../components/ui/JokeCardActionRow';
import {savedJokesCategoryKey, STORAGE_KEYS} from '../constants';
import type {
  JokeDetailParams,
  SavedJokeItem,
} from '../types';

const JokeDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const params =
    (route.params as JokeDetailParams | undefined) ?? undefined;

  const categoryKey =
    params?.categoryKey ?? 'unknown';
  const title = params?.title ?? '';
  const subtitle = params?.subtitle ?? '';
  const quote =
    params?.quote ??
    '"Ay, caramba! Why is everything so WRONG?!"';
  const tag = params?.tag ?? '🌶️';
  const icon = params?.icon ?? '😤';
  const accent =
    params?.accent ?? '#E2A63B';
  const jokes = params?.jokes ?? [];

  const storageKey = useMemo(
    () => savedJokesCategoryKey(categoryKey),
    [categoryKey],
  );
  const allSavedKey = STORAGE_KEYS.allSavedJokes;

  const initialSaved = useMemo(
    () => new Array(jokes.length).fill(false) as boolean[],
    [jokes.length],
  );
  const [saved, setsaved] = useState<
    boolean[]
  >(initialSaved);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(storageKey);
        if (!alive) {
          return;
        }
        if (!raw) {
          setsaved(initialSaved);
          return;
        }
        const parsed = JSON.parse(raw) as unknown;
        if (!Array.isArray(parsed)) {
          setsaved(initialSaved);
          return;
        }

        const restored = initialSaved.map((_, idx) =>
          Boolean(parsed[idx]),
        );
        setsaved(restored);
      } catch {
        setsaved(initialSaved);
      }
    })();
    return () => {
      alive = false;
    };
  }, [initialSaved, storageKey]);

  const toggleSaved = (idx: number) => {
    setsaved(prev => {
      const next = [...prev];
      next[idx] = !next[idx];
      AsyncStorage.setItem(storageKey, JSON.stringify(next))
        .then(async () => {
          try {
            const raw = await AsyncStorage.getItem(
              allSavedKey,
            );
            const parsed = raw ? (JSON.parse(raw) as unknown) : [];
            const list: SavedJokeItem[] = Array.isArray(
              parsed,
            )
              ? (parsed as SavedJokeItem[])
              : [];

            const jokeText = jokes[idx] ?? '';
            const id = `${categoryKey}:${jokeText}`;
            const exists = list.some(x => x?.id === id);

            const nextList = next[idx]
              ? exists
                ? list
                : [
                    ...list,
                    {
                      id,
                      categoryKey: categoryKey,
                      categoryTitle: title,
                      categoryIcon: icon,
                      joke: jokeText,
                    },
                  ]
              : list.filter(x => x?.id !== id);

            await AsyncStorage.setItem(
              allSavedKey,
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

  const shareJoke = async (joke: string) => {
    try {
      await Share.share({
        message: `${title}\n\n${joke}`,
      });
    } catch {
      console.log('error');
    }
  };

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={['#600B1ACC', '#00000000']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={styles.topGlow}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <BackPillButton onPress={() => navigation.goBack()} />

        <View style={styles.header}>
          <Text style={styles.headerIcon}>
            {icon}
          </Text>

          <View>
            <Text style={styles.headerTitle}>
              {title}
            </Text>
            <Text
              style={[
                styles.headerSubtitle,
                {color: accent},
              ]}>
              {subtitle} {tag}
            </Text>
            <Text style={styles.headerQuote}>
              {quote}
            </Text>
          </View>
        </View>

        <View style={styles.list}>
          {jokes.map((joke, idx) => (
            <View key={idx} style={styles.jokeCard}>
              <View style={styles.jokeTopRow}>
                <View style={styles.jokeIndexPill}>
                  <Text style={styles.jokeIndexText}>
                    {idx + 1}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.jokeTag,
                    {color: accent},
                  ]}>
                  {icon} {title}
                </Text>
              </View>

              <Text style={styles.jokeBody}>{joke}</Text>

              <JokeCardActionRow
                saved={Boolean(saved[idx])}
                onToggleSave={() => toggleSaved(idx)}
                onShare={() => shareJoke(joke)}
              />
            </View>
          ))}
        </View>

        <View style={styles.bottomPad} />
      </ScrollView>
    </View>
  );
};

export default JokeDetailScreen;

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,

    backgroundColor: '#0A0203',
  },
  scrollContent: {
    paddingHorizontal: 20,

    paddingTop: 60,
    paddingBottom: 40,
  },
  topGlow: {
    height: 220,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },

  header: {
    alignItems: 'center',
    paddingBottom: 10,
    flexDirection: 'row',
    gap: 22,
  },

  headerIcon: {
    fontSize: 32,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
  },
  headerSubtitle: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: '400',
  },
  headerQuote: {
    marginTop: 5,
    color: '#FFFFFFA8',
    fontSize: 12.5,
    fontWeight: '400',
    fontStyle: 'italic',
  },

  list: {
    marginTop: 14,
    gap: 14,
  },
  jokeCard: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 16,
  },
  jokeTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  jokeIndexPill: {
    width: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: '#7A1E16',
    alignItems: 'center',
    justifyContent: 'center',
  },
  jokeIndexText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  jokeTag: {
    fontSize: 13,
    fontWeight: '700',
  },
  jokeBody: {
    color: '#FFFFFFD6',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },

  bottomPad: {
    height: 8,
  },
});
