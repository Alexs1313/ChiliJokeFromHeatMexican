import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useMemo, useState} from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView, Share, StyleSheet, Text, View} from 'react-native';

import BackPillButton from '../components/ui/BackPillButton';
import StoryDetailActionRow from '../components/ui/StoryDetailActionRow';
import {STORAGE_KEYS} from '../constants';
import type {StoryDetailParams} from '../types';

const StoryDetailScreen = () => {
  const navigation = useNavigation() as any;
  const route = useRoute();
  const params = (route.params as StoryDetailParams | undefined) ?? undefined;

  const storyId = params?.id ?? '';
  const title = params?.title ?? '';
  const icon = params?.icon ?? '📖';
  const body = params?.body ?? '';

  const favKey = STORAGE_KEYS.favStories;
  const [fav, setfav] = useState(false);

  useMemo(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(favKey);
        const parsed = raw ? (JSON.parse(raw) as unknown) : [];
        const list: string[] = Array.isArray(parsed)
          ? (parsed as string[])
          : [];
        setfav(list.includes(storyId));
      } catch {
        setfav(false);
      }
    })();
  }, [storyId, favKey]);

  const toggleFav = async () => {
    try {
      const raw = await AsyncStorage.getItem(favKey);
      const parsed = raw ? (JSON.parse(raw) as unknown) : [];
      const list: string[] = Array.isArray(parsed) ? (parsed as string[]) : [];
      const next = list.includes(storyId)
        ? list.filter(x => x !== storyId)
        : [...list, storyId];
      await AsyncStorage.setItem(favKey, JSON.stringify(next));
      setfav(next.includes(storyId));
    } catch {
      console.log('error');
    }
  };

  const share = async () => {
    try {
      await Share.share({
        message: `${title}\n\n${body}`,
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

        <View style={styles.headerRow}>
          <LinearGradient
            colors={['#600B1A66', '#9F4A0A4D']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.iconWrap}>
            <Text style={styles.iconText}>{icon}</Text>
          </LinearGradient>
          <View style={styles.headerCol}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.byline}>😃 by Miguel</Text>
          </View>
        </View>

        <Text style={styles.body}>{body}</Text>

        <View style={styles.quoteCard}>
          <Text style={styles.quoteText}>
            {
              '"¡Eso es todo, amigo! Every word is true… more or less. Until next time!"'
            }
          </Text>
        </View>

        <StoryDetailActionRow
          isFavorite={fav}
          onToggleFavorite={toggleFav}
          onShare={share}
        />
      </ScrollView>
    </View>
  );
};

export default StoryDetailScreen;

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
    marginBottom: 14,
  },

  iconWrap: {
    width: 70,
    height: 70,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E6AD4C26',
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingBottom: 40,
  },

  iconText: {
    fontSize: 22,
  },
  headerCol: {
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
  },
  byline: {
    marginTop: 6,
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '400',
  },

  body: {
    color: '#FFFFFFD6',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },

  quoteCard: {
    marginTop: 18,
    borderRadius: 16,
    backgroundColor: '#FFFFFF08',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
  },
  quoteText: {
    color: '#FFFFFFA8',
    fontSize: 12.5,
    fontWeight: '400',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 18,
  },
});
