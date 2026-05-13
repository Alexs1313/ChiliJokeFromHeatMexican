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
import Chiijokefromemxicnnback from '../Chiijokefromemxicnncmp/Chiijokefromemxicnnback';

type ChiijokefromemxicnnStrsDtlParams = {
  id: string;
  title: string;
  icon: string;
  body: string;
};

const Chiijokefromemxicnnstrsdtl = () => {
  const navigation = useNavigation() as any;
  const route = useRoute();
  const chiijokefromemxicnnParams =
    (route.params as ChiijokefromemxicnnStrsDtlParams | undefined) ?? undefined;

  const chiijokefromemxicnnId = chiijokefromemxicnnParams?.id ?? '';
  const chiijokefromemxicnnTitle = chiijokefromemxicnnParams?.title ?? '';
  const chiijokefromemxicnnIcon = chiijokefromemxicnnParams?.icon ?? '📖';
  const chiijokefromemxicnnBody = chiijokefromemxicnnParams?.body ?? '';

  const chiijokefromemxicnnFavKey = 'chiijokefromemxicnn:favStories';
  const [chiijokefromemxicnnFav, setChiijokefromemxicnnFav] = useState(false);

  useMemo(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(chiijokefromemxicnnFavKey);
        const parsed = raw ? (JSON.parse(raw) as unknown) : [];
        const list: string[] = Array.isArray(parsed)
          ? (parsed as string[])
          : [];
        setChiijokefromemxicnnFav(list.includes(chiijokefromemxicnnId));
      } catch {
        setChiijokefromemxicnnFav(false);
      }
    })();
  }, [chiijokefromemxicnnId]);

  const chiijokefromemxicnnToggleFav = async () => {
    try {
      const raw = await AsyncStorage.getItem(chiijokefromemxicnnFavKey);
      const parsed = raw ? (JSON.parse(raw) as unknown) : [];
      const list: string[] = Array.isArray(parsed) ? (parsed as string[]) : [];
      const next = list.includes(chiijokefromemxicnnId)
        ? list.filter(x => x !== chiijokefromemxicnnId)
        : [...list, chiijokefromemxicnnId];
      await AsyncStorage.setItem(
        chiijokefromemxicnnFavKey,
        JSON.stringify(next),
      );
      setChiijokefromemxicnnFav(next.includes(chiijokefromemxicnnId));
    } catch {
      console.log('error');
    }
  };

  const chiijokefromemxicnnShare = async () => {
    try {
      await Share.share({
        message: `${chiijokefromemxicnnTitle}\n\n${chiijokefromemxicnnBody}`,
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

        <View style={styles.chiijokefromemxicnnHeaderRow}>
          <LinearGradient
            colors={['#600B1A66', '#9F4A0A4D']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.chiijokefromemxicnnIconWrap}>
            <Text style={styles.chiijokefromemxicnnIconText}>
              {chiijokefromemxicnnIcon}
            </Text>
          </LinearGradient>
          <View style={styles.chiijokefromemxicnnHeaderCol}>
            <Text style={styles.chiijokefromemxicnnTitle}>
              {chiijokefromemxicnnTitle}
            </Text>
            <Text style={styles.chiijokefromemxicnnByline}>😃 by Miguel</Text>
          </View>
        </View>

        <Text style={styles.chiijokefromemxicnnBody}>
          {chiijokefromemxicnnBody}
        </Text>

        <View style={styles.chiijokefromemxicnnQuoteCard}>
          <Text style={styles.chiijokefromemxicnnQuoteText}>
            {
              '"¡Eso es todo, amigo! Every word is true… more or less. Until next time!"'
            }
          </Text>
        </View>

        <View style={styles.chiijokefromemxicnnBtnRow}>
          <Pressable
            onPress={chiijokefromemxicnnToggleFav}
            style={[
              styles.chiijokefromemxicnnBtn,
              styles.chiijokefromemxicnnBtnGhost,
              chiijokefromemxicnnFav && styles.chiijokefromemxicnnBtnGhostOn,
            ]}>
            <Text style={styles.chiijokefromemxicnnBtnText}>
              {chiijokefromemxicnnFav ? '★ Unfavorite' : '☆ Favorite'}
            </Text>
          </Pressable>

          <Pressable onPress={chiijokefromemxicnnShare} style={{flex: 1}}>
            <LinearGradient
              colors={['#600B1A', '#9F4A0A']}
              style={[
                styles.chiijokefromemxicnnBtn,
                styles.chiijokefromemxicnnBtnPrimary,
              ]}>
              <Text style={styles.chiijokefromemxicnnBtnPrimaryText}>
                📤 Share
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </ScrollView>
    </Chiijokefromemxicnnback>
  );
};

export default Chiijokefromemxicnnstrsdtl;

const styles = StyleSheet.create({
  chiijokefromemxicnnHeaderRow: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
    marginBottom: 14,
  },

  chiijokefromemxicnnIconWrap: {
    width: 70,
    height: 70,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E6AD4C26',
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingBottom: 40,
  },

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
  chiijokefromemxicnnBackText: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '700',
  },

  chiijokefromemxicnnIconText: {
    fontSize: 22,
  },
  chiijokefromemxicnnHeaderCol: {
    flex: 1,
  },
  chiijokefromemxicnnTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
  },
  chiijokefromemxicnnByline: {
    marginTop: 6,
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '400',
  },

  chiijokefromemxicnnBody: {
    color: '#FFFFFFD6',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },

  chiijokefromemxicnnQuoteCard: {
    marginTop: 18,
    borderRadius: 16,
    backgroundColor: '#FFFFFF08',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
  },
  chiijokefromemxicnnQuoteText: {
    color: '#FFFFFFA8',
    fontSize: 12.5,
    fontWeight: '400',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 18,
  },

  chiijokefromemxicnnBtnRow: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 12,
  },
  chiijokefromemxicnnBtn: {
    flex: 1,
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  chiijokefromemxicnnBtnGhost: {
    backgroundColor: '#FFFFFF12',
    borderColor: '#FFFFFF1A',
  },
  chiijokefromemxicnnBtnGhostOn: {
    backgroundColor: '#E6AD4C26',
    borderColor: '#E6AD4C66',
  },
  chiijokefromemxicnnBtnText: {
    color: '#FFFFFFCC',
    fontSize: 14,
    fontWeight: '800',
  },
  chiijokefromemxicnnBtnPrimary: {
    backgroundColor: '#7A1E16',
    borderColor: '#7A1E1640',
  },
  chiijokefromemxicnnBtnPrimaryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
});
