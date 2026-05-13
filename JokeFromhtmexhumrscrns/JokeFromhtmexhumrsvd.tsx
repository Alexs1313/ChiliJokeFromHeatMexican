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

const JokeFromhtmexhumrsvd = () => {
  const navigation = useNavigation() as any;
  const jokefromhtmexhumrAllSavedKey = 'jokefromhtmexhumr:savedJokes:all';

  const [jokefromhtmexhumrItems, setJokeFromhtmexhumrItems] = useState<
    {
      id: string;
      categoryKey: string;
      categoryTitle: string;
      categoryIcon: string;
      joke: string;
    }[]
  >([]);

  const jokefromhtmexhumrLoad = useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(jokefromhtmexhumrAllSavedKey);
      const parsed = raw ? (JSON.parse(raw) as unknown) : [];
      setJokeFromhtmexhumrItems(
        Array.isArray(parsed) ? (parsed as any[]) : [],
      );
    } catch {
      setJokeFromhtmexhumrItems([]);
    }
  }, []);

  useEffect(() => {
    jokefromhtmexhumrLoad();
  }, [jokefromhtmexhumrLoad]);

  useFocusEffect(
    useCallback(() => {
      jokefromhtmexhumrLoad();
    }, [jokefromhtmexhumrLoad]),
  );

  const jokefromhtmexhumrRemove = async (id: string) => {
    const next = jokefromhtmexhumrItems.filter(x => x.id !== id);
    setJokeFromhtmexhumrItems(next);
    try {
      await AsyncStorage.setItem(
        jokefromhtmexhumrAllSavedKey,
        JSON.stringify(next),
      );
    } catch {
      console.log('error');
    }
  };

  const jokefromhtmexhumrShare = async (
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

  const jokefromhtmexhumrGoToJokes = () => {
    navigation.navigate('JokeFromhtmexhumrjks');
  };

  const jokefromhtmexhumrHasData = jokefromhtmexhumrItems.length > 0;

  return (
    <View style={styles.jokefromhtmexhumrRoot}>
      <ScrollView
        style={styles.jokefromhtmexhumrScroll}
        contentContainerStyle={styles.jokefromhtmexhumrScrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.jokefromhtmexhumrHeader}>
          <Text style={styles.jokefromhtmexhumrHeaderIcon}>🔖</Text>
          <View>
            <Text style={styles.jokefromhtmexhumrHeaderTitle}>
              Saved Jokes
            </Text>
            <Text style={styles.jokefromhtmexhumrHeaderSubtitle}>
              {jokefromhtmexhumrItems.length} jokes in your collection
            </Text>
          </View>
        </View>

        {jokefromhtmexhumrHasData ? (
          <View style={styles.jokefromhtmexhumrList}>
            {jokefromhtmexhumrItems.map(item => (
              <View key={item.id} style={styles.jokefromhtmexhumrCard}>
                <View style={styles.jokefromhtmexhumrCardTopRow}>
                  <View style={styles.jokefromhtmexhumrCatPill}>
                    <Text style={styles.jokefromhtmexhumrCatPillText}>
                      {item.categoryIcon} {item.categoryTitle}
                    </Text>
                  </View>
                </View>

                <Text style={styles.jokefromhtmexhumrJokeText}>
                  {item.joke}
                </Text>

                <View style={styles.jokefromhtmexhumrActions}>
                  <Pressable
                    onPress={() =>
                      jokefromhtmexhumrShare(item.categoryTitle, item.joke)
                    }
                    style={styles.jokefromhtmexhumrShareBtn}>
                    <Text style={styles.jokefromhtmexhumrShareText}>
                      📤 Share
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => jokefromhtmexhumrRemove(item.id)}
                    style={styles.jokefromhtmexhumrTrashBtn}>
                    <Text style={styles.jokefromhtmexhumrTrashText}>🗑️</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.jokefromhtmexhumrEmpty}>
            <Image
              source={require('../assets/i/chiijokefromemximemptsvd.png')}
              style={styles.jokefromhtmexhumrEmptyImage}
              resizeMode="contain"
            />
            <Text style={styles.jokefromhtmexhumrEmptyTitle}>
              Nothing saved yet, amigo!
            </Text>
            <Text style={styles.jokefromhtmexhumrEmptyBody}>
              Go to Jokes and save your favorites. They will be right here
              waiting for you, like a loyal taco.
            </Text>
            <Pressable
              onPress={jokefromhtmexhumrGoToJokes}
              style={styles.jokefromhtmexhumrEmptyBtn}>
              <Text style={styles.jokefromhtmexhumrEmptyBtnText}>
                🌶️ Head to Jokes tab to start saving!
              </Text>
            </Pressable>
          </View>
        )}

        <View style={styles.jokefromhtmexhumrBottomPad} />
      </ScrollView>
    </View>
  );
};

export default JokeFromhtmexhumrsvd;

const styles = StyleSheet.create({
  jokefromhtmexhumrCatPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#0000003A',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  jokefromhtmexhumrCatPillText: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '700',
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
  jokefromhtmexhumrScroll: {
    flex: 1,
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
    fontSize: 30,
  },
  jokefromhtmexhumrHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
  },
  jokefromhtmexhumrHeaderSubtitle: {
    marginTop: 4,
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '400',
  },

  jokefromhtmexhumrList: {
    marginTop: 16,
    gap: 14,
  },
  jokefromhtmexhumrCard: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 16,
  },
  jokefromhtmexhumrCardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  jokefromhtmexhumrJokeText: {
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
  jokefromhtmexhumrShareBtn: {
    flex: 1,
    height: 43,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#600B1A4D',
    borderWidth: 1,
    borderColor: '#600B1A66',
  },
  jokefromhtmexhumrShareText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  jokefromhtmexhumrTrashBtn: {
    width: 48,
    height: 43,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3D5A1A',
    borderWidth: 1,
    borderColor: '#FF3D5A33',
  },
  jokefromhtmexhumrTrashText: {
    color: '#FFFFFFB8',
    fontSize: 12,
    fontWeight: '700',
  },

  jokefromhtmexhumrEmpty: {
    alignItems: 'center',
    paddingTop: 24,
  },
  jokefromhtmexhumrEmptyImage: {
    marginBottom: 34,
    marginTop: 20,
  },
  jokefromhtmexhumrEmptyTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  jokefromhtmexhumrEmptyBody: {
    color: '#FFFFFF80',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    textAlign: 'center',
    paddingHorizontal: 18,
    marginBottom: 18,
  },
  jokefromhtmexhumrEmptyBtn: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#E6AD4C1A',
    borderWidth: 1,
    borderColor: '#E6AD4C33',
  },
  jokefromhtmexhumrEmptyBtnText: {
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },

  jokefromhtmexhumrBottomPad: {
    height: 8,
  },
});
