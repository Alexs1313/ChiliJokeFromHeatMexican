import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useEffect, useState} from 'react';

import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {
  Image,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Chiijokefromemxicnnsvd = () => {
  const navigation = useNavigation() as any;
  const chiijokefromemxicnnAllSavedKey = 'chiijokefromemxicnn:savedJokes:all';

  const [chiijokefromemxicnnItems, setChiijokefromemxicnnItems] = useState<
    {
      id: string;
      categoryKey: string;
      categoryTitle: string;
      categoryIcon: string;
      joke: string;
    }[]
  >([]);

  const chiijokefromemxicnnLoad = useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(chiijokefromemxicnnAllSavedKey);
      const parsed = raw ? (JSON.parse(raw) as unknown) : [];
      setChiijokefromemxicnnItems(
        Array.isArray(parsed) ? (parsed as any[]) : [],
      );
    } catch {
      setChiijokefromemxicnnItems([]);
    }
  }, []);

  useEffect(() => {
    chiijokefromemxicnnLoad();
  }, [chiijokefromemxicnnLoad]);

  useFocusEffect(
    useCallback(() => {
      chiijokefromemxicnnLoad();
    }, [chiijokefromemxicnnLoad]),
  );

  const chiijokefromemxicnnRemove = async (id: string) => {
    const next = chiijokefromemxicnnItems.filter(x => x.id !== id);
    setChiijokefromemxicnnItems(next);
    try {
      await AsyncStorage.setItem(
        chiijokefromemxicnnAllSavedKey,
        JSON.stringify(next),
      );
    } catch {
      console.log('error');
    }
  };

  const chiijokefromemxicnnShare = async (
    categoryTitle: string,
    joke: string,
  ) => {
    try {
      await Share.share({
        message: `${categoryTitle}\n\n${joke}`,
      });
    } catch {
      console.log('error');
    }
  };

  const chiijokefromemxicnnGoToJokes = () => {
    navigation.navigate('Chiijokefromemxicnnjks');
  };

  const chiijokefromemxicnnHasData = chiijokefromemxicnnItems.length > 0;

  return (
    <View style={styles.chiijokefromemxicnnRoot}>
      <ScrollView
        style={styles.chiijokefromemxicnnScroll}
        contentContainerStyle={styles.chiijokefromemxicnnScrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.chiijokefromemxicnnHeader}>
          <Text style={styles.chiijokefromemxicnnHeaderIcon}>🔖</Text>
          <View>
            <Text style={styles.chiijokefromemxicnnHeaderTitle}>
              Saved Jokes
            </Text>
            <Text style={styles.chiijokefromemxicnnHeaderSubtitle}>
              {chiijokefromemxicnnItems.length} jokes in your collection
            </Text>
          </View>
        </View>

        {chiijokefromemxicnnHasData ? (
          <View style={styles.chiijokefromemxicnnList}>
            {chiijokefromemxicnnItems.map(item => (
              <View key={item.id} style={styles.chiijokefromemxicnnCard}>
                <View style={styles.chiijokefromemxicnnCardTopRow}>
                  <View style={styles.chiijokefromemxicnnCatPill}>
                    <Text style={styles.chiijokefromemxicnnCatPillText}>
                      {item.categoryIcon} {item.categoryTitle}
                    </Text>
                  </View>
                </View>

                <Text style={styles.chiijokefromemxicnnJokeText}>
                  {item.joke}
                </Text>

                <View style={styles.chiijokefromemxicnnActions}>
                  <Pressable
                    onPress={() =>
                      chiijokefromemxicnnShare(item.categoryTitle, item.joke)
                    }
                    style={styles.chiijokefromemxicnnShareBtn}>
                    <Text style={styles.chiijokefromemxicnnShareText}>
                      📤 Share
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => chiijokefromemxicnnRemove(item.id)}
                    style={styles.chiijokefromemxicnnTrashBtn}>
                    <Text style={styles.chiijokefromemxicnnTrashText}>🗑️</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.chiijokefromemxicnnEmpty}>
            <Image
              source={require('../../assets/i/chiijokefromemximemptsvd.png')}
              style={styles.chiijokefromemxicnnEmptyImage}
              resizeMode="contain"
            />
            <Text style={styles.chiijokefromemxicnnEmptyTitle}>
              Nothing saved yet, amigo!
            </Text>
            <Text style={styles.chiijokefromemxicnnEmptyBody}>
              Go to Jokes and save your favorites. They will be right here
              waiting for you, like a loyal taco.
            </Text>
            <Pressable
              onPress={chiijokefromemxicnnGoToJokes}
              style={styles.chiijokefromemxicnnEmptyBtn}>
              <Text style={styles.chiijokefromemxicnnEmptyBtnText}>
                🌶️ Head to Jokes tab to start saving!
              </Text>
            </Pressable>
          </View>
        )}

        <View style={styles.chiijokefromemxicnnBottomPad} />
      </ScrollView>
    </View>
  );
};

export default Chiijokefromemxicnnsvd;

const styles = StyleSheet.create({
  chiijokefromemxicnnCatPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#0000003A',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  chiijokefromemxicnnCatPillText: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '700',
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
  chiijokefromemxicnnScroll: {
    flex: 1,
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
    fontSize: 30,
  },
  chiijokefromemxicnnHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
  },
  chiijokefromemxicnnHeaderSubtitle: {
    marginTop: 4,
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '400',
  },

  chiijokefromemxicnnList: {
    marginTop: 16,
    gap: 14,
  },
  chiijokefromemxicnnCard: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 16,
  },
  chiijokefromemxicnnCardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  chiijokefromemxicnnJokeText: {
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
  chiijokefromemxicnnShareBtn: {
    flex: 1,
    height: 43,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#600B1A4D',
    borderWidth: 1,
    borderColor: '#600B1A66',
  },
  chiijokefromemxicnnShareText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  chiijokefromemxicnnTrashBtn: {
    width: 48,
    height: 43,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3D5A1A',
    borderWidth: 1,
    borderColor: '#FF3D5A33',
  },
  chiijokefromemxicnnTrashText: {
    color: '#FFFFFFB8',
    fontSize: 12,
    fontWeight: '700',
  },

  chiijokefromemxicnnEmpty: {
    alignItems: 'center',
    paddingTop: 24,
  },
  chiijokefromemxicnnEmptyImage: {
    marginBottom: 34,
    marginTop: 20,
  },
  chiijokefromemxicnnEmptyTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  chiijokefromemxicnnEmptyBody: {
    color: '#FFFFFF80',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    textAlign: 'center',
    paddingHorizontal: 18,
    marginBottom: 18,
  },
  chiijokefromemxicnnEmptyBtn: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#E6AD4C1A',
    borderWidth: 1,
    borderColor: '#E6AD4C33',
  },
  chiijokefromemxicnnEmptyBtnText: {
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },

  chiijokefromemxicnnBottomPad: {
    height: 8,
  },
});
