// details

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useMemo, useState} from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type JokeFromhtmexhumrStrsDtlParams = {
  id: string;
  title: string;
  icon: string;
  body: string;
};

const JokeFromhtmexhumrstrsdtl = () => {
  const navigation = useNavigation() as any;
  const route = useRoute();
  const jokefromhtmexhumrParams =
    (route.params as JokeFromhtmexhumrStrsDtlParams | undefined) ?? undefined;

  const jokefromhtmexhumrId = jokefromhtmexhumrParams?.id ?? '';
  const jokefromhtmexhumrTitle = jokefromhtmexhumrParams?.title ?? '';
  const jokefromhtmexhumrIcon = jokefromhtmexhumrParams?.icon ?? '📖';
  const jokefromhtmexhumrBody = jokefromhtmexhumrParams?.body ?? '';

  const jokefromhtmexhumrFavKey = 'jokefromhtmexhumr:favStories';
  const [jokefromhtmexhumrFav, setJokeFromhtmexhumrFav] = useState(false);

  useMemo(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(jokefromhtmexhumrFavKey);
        const parsed = raw ? (JSON.parse(raw) as unknown) : [];
        const list: string[] = Array.isArray(parsed)
          ? (parsed as string[])
          : [];
        setJokeFromhtmexhumrFav(list.includes(jokefromhtmexhumrId));
      } catch {
        setJokeFromhtmexhumrFav(false);
      }
    })();
  }, [jokefromhtmexhumrId]);

  const jokefromhtmexhumrToggleFav = async () => {
    try {
      const raw = await AsyncStorage.getItem(jokefromhtmexhumrFavKey);
      const parsed = raw ? (JSON.parse(raw) as unknown) : [];
      const list: string[] = Array.isArray(parsed) ? (parsed as string[]) : [];
      const next = list.includes(jokefromhtmexhumrId)
        ? list.filter(x => x !== jokefromhtmexhumrId)
        : [...list, jokefromhtmexhumrId];
      await AsyncStorage.setItem(
        jokefromhtmexhumrFavKey,
        JSON.stringify(next),
      );
      setJokeFromhtmexhumrFav(next.includes(jokefromhtmexhumrId));
    } catch {
      console.log('error');
    }
  };

  const jokefromhtmexhumrShare = async () => {
    try {
      await Share.share({
        message: `${jokefromhtmexhumrTitle}\n\n${jokefromhtmexhumrBody}`,
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

        <View style={styles.jokefromhtmexhumrHeaderRow}>
          <LinearGradient
            colors={['#600B1A66', '#9F4A0A4D']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.jokefromhtmexhumrIconWrap}>
            <Text style={styles.jokefromhtmexhumrIconText}>
              {jokefromhtmexhumrIcon}
            </Text>
          </LinearGradient>
          <View style={styles.jokefromhtmexhumrHeaderCol}>
            <Text style={styles.jokefromhtmexhumrTitle}>
              {jokefromhtmexhumrTitle}
            </Text>
            <Text style={styles.jokefromhtmexhumrByline}>😃 by Miguel</Text>
          </View>
        </View>

        <Text style={styles.jokefromhtmexhumrBody}>
          {jokefromhtmexhumrBody}
        </Text>

        <View style={styles.jokefromhtmexhumrQuoteCard}>
          <Text style={styles.jokefromhtmexhumrQuoteText}>
            {
              '"¡Eso es todo, amigo! Every word is true… more or less. Until next time!"'
            }
          </Text>
        </View>

        <View style={styles.jokefromhtmexhumrBtnRow}>
          <Pressable
            onPress={jokefromhtmexhumrToggleFav}
            style={[
              styles.jokefromhtmexhumrBtn,
              styles.jokefromhtmexhumrBtnGhost,
              jokefromhtmexhumrFav && styles.jokefromhtmexhumrBtnGhostOn,
            ]}>
            <Text style={styles.jokefromhtmexhumrBtnText}>
              {jokefromhtmexhumrFav ? '★ Unfavorite' : '☆ Favorite'}
            </Text>
          </Pressable>

          <Pressable onPress={jokefromhtmexhumrShare} style={{flex: 1}}>
            <LinearGradient
              colors={['#600B1A', '#9F4A0A']}
              style={[
                styles.jokefromhtmexhumrBtn,
                styles.jokefromhtmexhumrBtnPrimary,
              ]}>
              <Text style={styles.jokefromhtmexhumrBtnPrimaryText}>
                📤 Share
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default JokeFromhtmexhumrstrsdtl;

const styles = StyleSheet.create({
  jokefromhtmexhumrHeaderRow: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
    marginBottom: 14,
  },

  jokefromhtmexhumrIconWrap: {
    width: 70,
    height: 70,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E6AD4C26',
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingBottom: 40,
  },

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
  jokefromhtmexhumrBackText: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '700',
  },

  jokefromhtmexhumrIconText: {
    fontSize: 22,
  },
  jokefromhtmexhumrHeaderCol: {
    flex: 1,
  },
  jokefromhtmexhumrTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
  },
  jokefromhtmexhumrByline: {
    marginTop: 6,
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '400',
  },

  jokefromhtmexhumrBody: {
    color: '#FFFFFFD6',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },

  jokefromhtmexhumrQuoteCard: {
    marginTop: 18,
    borderRadius: 16,
    backgroundColor: '#FFFFFF08',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
  },
  jokefromhtmexhumrQuoteText: {
    color: '#FFFFFFA8',
    fontSize: 12.5,
    fontWeight: '400',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 18,
  },

  jokefromhtmexhumrBtnRow: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 12,
  },
  jokefromhtmexhumrBtn: {
    flex: 1,
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  jokefromhtmexhumrBtnGhost: {
    backgroundColor: '#FFFFFF12',
    borderColor: '#FFFFFF1A',
  },
  jokefromhtmexhumrBtnGhostOn: {
    backgroundColor: '#E6AD4C26',
    borderColor: '#E6AD4C66',
  },
  jokefromhtmexhumrBtnText: {
    color: '#FFFFFFCC',
    fontSize: 14,
    fontWeight: '800',
  },
  jokefromhtmexhumrBtnPrimary: {
    backgroundColor: '#7A1E16',
    borderColor: '#7A1E1640',
  },
  jokefromhtmexhumrBtnPrimaryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
});
