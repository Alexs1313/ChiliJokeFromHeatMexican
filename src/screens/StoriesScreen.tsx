import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useMemo, useState} from 'react';

import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {stories} from '../data/storiesData';
import LinearGradient from 'react-native-linear-gradient';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const StoriesScreen = () => {
  const navigation = useNavigation() as any;
  const [favIds, setfavIds] = useState<string[]>([]);
  const [favFirst, setfavFirst] = useState(true);

  const favKey = 'chili:favStories';

  const loadFavs = useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(favKey);
      const parsed = raw ? (JSON.parse(raw) as unknown) : [];
      setfavIds(Array.isArray(parsed) ? (parsed as string[]) : []);
    } catch {
      setfavIds([]);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadFavs();
    }, [loadFavs]),
  );

  const toggleFav = async (id: string) => {
    try {
      const next = favIds.includes(id)
        ? favIds.filter(x => x !== id)
        : [...favIds, id];
      setfavIds(next);
      await AsyncStorage.setItem(favKey, JSON.stringify(next));
    } catch {
      console.log('error');
    }
  };

  const sortedStories = useMemo(() => {
    if (!favFirst) {
      return stories;
    }
    const favSet = new Set(favIds);
    return [...stories].sort((a, b) => {
      const af = favSet.has(a.id) ? 1 : 0;
      const bf = favSet.has(b.id) ? 1 : 0;
      return bf - af;
    });
  }, [favFirst, favIds]);

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerIcon}>📖</Text>
          <View>
            <Text style={styles.headerTitle}>Funny Stories</Text>
            <Text style={styles.headerSubtitle}>
              Tales from Miguel's legendary life
            </Text>
          </View>
        </View>

        <View style={styles.miguelWrap}>
          <LinearGradient
            colors={['#600B1A4D', '#9F4A0A33']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.miguelGradient}>
            <View style={styles.miguelRow}>
              <View style={styles.miguelAvatar}>
                <Image
                  source={require('../assets/i/chiijokefromemximigl.png')}
                  style={styles.miguelImg}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.miguelBody}>
                {
                  '"These are 100% true stories from my life.\nWell… maybe 60% true. Okay, some parts I improved a little. It is called storytelling, amigo."'
                }
              </Text>
            </View>
          </LinearGradient>
        </View>

        <Pressable
          onPress={() => setfavFirst(v => !v)}
          style={styles.favFirstRow}>
          <Text style={styles.favFirstStar}>⭐</Text>
          <Text style={styles.favFirstText}>Favorites shown first</Text>
          <View style={styles.favFirstSpacer} />
        </Pressable>

        <View style={styles.list}>
          {sortedStories.map(story => {
            const isFav = favIds.includes(story.id);
            return (
              <View
                key={story.id}
                style={[styles.storyCard, isFav && styles.storyCardFav]}>
                <View style={styles.storyTopRow}>
                  <View style={styles.storyIconWrap}>
                    <LinearGradient
                      colors={['#600B1A66', '#9F4A0A4D']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 1}}
                      style={styles.storyIconWrap}>
                      <Text style={styles.storyIconText}>{story.icon}</Text>
                    </LinearGradient>
                  </View>
                  <View style={styles.storyTitleCol}>
                    <View style={styles.storyTitleRow}>
                      {isFav ? <Text style={styles.favSmall}>★</Text> : null}
                      <Text style={styles.storyTitle}>{story.title}</Text>
                    </View>
                    <Text style={styles.storyExcerpt}>{story.excerpt}</Text>
                  </View>
                  <Text style={styles.arrow}>→</Text>
                </View>

                <View style={styles.storyBtnRow}>
                  <Pressable
                    onPress={() => toggleFav(story.id)}
                    style={[
                      styles.storyBtn,
                      styles.storyBtnGhost,
                      isFav && styles.storyBtnGhostOn,
                    ]}>
                    <Text style={styles.storyBtnText}>
                      {isFav ? '★ Favorited' : '☆ Favorite'}
                    </Text>
                  </Pressable>

                  <Pressable
                    onPress={() =>
                      navigation.navigate('StoryDetail', {
                        id: story.id,
                        title: story.title,
                        icon: story.icon,
                        body: story.body,
                      })
                    }
                    style={[styles.storyBtn, styles.storyBtnPrimary]}>
                    <Text style={styles.storyBtnPrimaryText}>📖 Read</Text>
                  </Pressable>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default StoriesScreen;

const styles = StyleSheet.create({
  miguelImg: {
    width: 36,
    height: 87,
  },
  miguelBody: {
    flex: 1,
    color: '#FFFFFF99',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },
  headerIcon: {
    fontSize: 22,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
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

  headerSubtitle: {
    marginTop: 4,
    color: '#E6AD4CB2',
    fontSize: 13,
    fontWeight: '400',
  },

  miguelWrap: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  miguelGradient: {},
  miguelRow: {
    padding: 14,
    flexDirection: 'row',
    gap: 22,
    alignItems: 'center',
  },
  miguelAvatar: {
    borderRadius: 16,
    backgroundColor: '#00000022',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },

  favFirstRow: {
    borderRadius: 14,
    backgroundColor: '#E6AD4C14',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    paddingVertical: 13,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },
  favFirstStar: {
    fontSize: 14,
  },
  favFirstText: {
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '600',
  },
  favFirstSpacer: {
    flex: 1,
  },

  list: {
    gap: 14,
  },
  storyCard: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 16,
  },
  storyCardFav: {
    backgroundColor: '#E6AD4C14',
    borderColor: '#E6AD4C40',
  },
  storyTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  storyIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: '#9F4A0A66',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyIconText: {
    fontSize: 22,
  },
  storyTitleCol: {
    flex: 1,
  },
  storyTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  favSmall: {
    color: '#E2A63B',
    fontSize: 14,
    fontWeight: '900',
  },
  storyTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  storyExcerpt: {
    marginTop: 6,
    color: '#FFFFFF9E',
    fontSize: 12.5,
    fontWeight: '400',
    lineHeight: 17,
  },
  arrow: {
    color: '#FFFFFF4D',
    fontSize: 20,
    fontWeight: '400',
  },

  storyBtnRow: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 12,
  },
  storyBtn: {
    flex: 1,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  storyBtnGhost: {
    backgroundColor: '#FFFFFF0F',
    borderColor: '#FFFFFF14',
  },
  storyBtnGhostOn: {
    backgroundColor: '#E6AD4C33',
    borderColor: '#E6AD4C66',
  },
  storyBtnText: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '600',
  },
  storyBtnPrimary: {
    backgroundColor: '#600B1A4D',
    borderColor: '#600B1A66',
  },
  storyBtnPrimaryText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
