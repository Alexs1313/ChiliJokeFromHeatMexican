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

const SavedJokesScreen = () => {
  const navigation = useNavigation() as any;
  const allSavedKey = 'chili:savedJokes:all';

  const [items, setitems] = useState<
    {
      id: string;
      categoryKey: string;
      categoryTitle: string;
      categoryIcon: string;
      joke: string;
    }[]
  >([]);

  const load = useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(allSavedKey);
      const parsed = raw ? (JSON.parse(raw) as unknown) : [];
      setitems(Array.isArray(parsed) ? (parsed as any[]) : []);
    } catch {
      setitems([]);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load]),
  );

  const remove = async (id: string) => {
    const next = items.filter(x => x.id !== id);
    setitems(next);
    try {
      await AsyncStorage.setItem(allSavedKey, JSON.stringify(next));
    } catch {
      console.log('error');
    }
  };

  const share = async (categoryTitle: string, joke: string) => {
    try {
      await Share.share({
        message: `${categoryTitle}\n\n${joke}`,
      });
    } catch {
      console.log('error');
    }
  };

  const goToJokes = () => {
    navigation.navigate('Jokes');
  };

  const hasData = items.length > 0;

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerIcon}>🔖</Text>
          <View>
            <Text style={styles.headerTitle}>Saved Jokes</Text>
            <Text style={styles.headerSubtitle}>
              {items.length} jokes in your collection
            </Text>
          </View>
        </View>

        {hasData ? (
          <View style={styles.list}>
            {items.map(item => (
              <View key={item.id} style={styles.card}>
                <View style={styles.cardTopRow}>
                  <View style={styles.catPill}>
                    <Text style={styles.catPillText}>
                      {item.categoryIcon} {item.categoryTitle}
                    </Text>
                  </View>
                </View>

                <Text style={styles.jokeText}>{item.joke}</Text>

                <View style={styles.actions}>
                  <Pressable
                    onPress={() => share(item.categoryTitle, item.joke)}
                    style={styles.shareBtn}>
                    <Text style={styles.shareText}>📤 Share</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => remove(item.id)}
                    style={styles.trashBtn}>
                    <Text style={styles.trashText}>🗑️</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.empty}>
            <Image
              source={require('../assets/i/chiijokefromemximemptsvd.png')}
              style={styles.emptyImage}
              resizeMode="contain"
            />
            <Text style={styles.emptyTitle}>Nothing saved yet, amigo!</Text>
            <Text style={styles.emptyBody}>
              Go to Jokes and save your favorites. They will be right here
              waiting for you, like a loyal taco.
            </Text>
            <Pressable onPress={goToJokes} style={styles.emptyBtn}>
              <Text style={styles.emptyBtnText}>
                🌶️ Head to Jokes tab to start saving!
              </Text>
            </Pressable>
          </View>
        )}

        <View style={styles.bottomPad} />
      </ScrollView>
    </View>
  );
};

export default SavedJokesScreen;

const styles = StyleSheet.create({
  catPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#0000003A',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  catPillText: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '700',
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
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 70,

    paddingBottom: 110,
  },
  header: {
    paddingTop: 6,
    paddingBottom: 14,

    flexDirection: 'row',

    alignItems: 'center',
    gap: 12,
  },
  headerIcon: {
    fontSize: 30,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
  },
  headerSubtitle: {
    marginTop: 4,
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '400',
  },

  list: {
    marginTop: 16,
    gap: 14,
  },
  card: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 16,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  jokeText: {
    color: '#FFFFFFD6',
    fontSize: 14,
    fontWeight: '400',

    lineHeight: 20,
  },

  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 14,
  },
  empty: {
    alignItems: 'center',
    paddingTop: 24,
  },
  emptyImage: {
    marginBottom: 34,
    marginTop: 20,
  },
  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  shareBtn: {
    flex: 1,
    height: 43,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#600B1A4D',
    borderWidth: 1,
    borderColor: '#600B1A66',
  },
  shareText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  trashBtn: {
    width: 48,
    height: 43,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FF3D5A1A',
    borderWidth: 1,
    borderColor: '#FF3D5A33',
  },
  trashText: {
    color: '#FFFFFFB8',
    fontSize: 12,
    fontWeight: '700',
  },

  emptyBody: {
    color: '#FFFFFF80',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    textAlign: 'center',
    paddingHorizontal: 18,
    marginBottom: 18,
  },
  emptyBtn: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#E6AD4C1A',
    borderWidth: 1,
    borderColor: '#E6AD4C33',
  },
  emptyBtnText: {
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },

  bottomPad: {
    height: 8,
  },
});
