import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useMemo, useState} from 'react';

import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {jokefromhtmexhumrStrsStories} from '../JokeFromhtmexhumrdata/jokefromhtmexhumrdatastrs';
import LinearGradient from 'react-native-linear-gradient';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const JokeFromhtmexhumrstrs = () => {
  const navigation = useNavigation() as any;
  const [jokefromhtmexhumrFavIds, setJokeFromhtmexhumrFavIds] = useState<
    string[]
  >([]);
  const [jokefromhtmexhumrFavFirst, setJokeFromhtmexhumrFavFirst] =
    useState(true);

  const jokefromhtmexhumrFavKey = 'jokefromhtmexhumr:favStories';

  const jokefromhtmexhumrLoadFavs = useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(jokefromhtmexhumrFavKey);
      const parsed = raw ? (JSON.parse(raw) as unknown) : [];
      setJokeFromhtmexhumrFavIds(
        Array.isArray(parsed) ? (parsed as string[]) : [],
      );
    } catch {
      setJokeFromhtmexhumrFavIds([]);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      jokefromhtmexhumrLoadFavs();
    }, [jokefromhtmexhumrLoadFavs]),
  );

  const jokefromhtmexhumrToggleFav = async (id: string) => {
    try {
      const next = jokefromhtmexhumrFavIds.includes(id)
        ? jokefromhtmexhumrFavIds.filter(x => x !== id)
        : [...jokefromhtmexhumrFavIds, id];
      setJokeFromhtmexhumrFavIds(next);
      await AsyncStorage.setItem(
        jokefromhtmexhumrFavKey,
        JSON.stringify(next),
      );
    } catch {
      console.log('error');
    }
  };

  const jokefromhtmexhumrSortedStories = useMemo(() => {
    if (!jokefromhtmexhumrFavFirst) {
      return jokefromhtmexhumrStrsStories;
    }
    const favSet = new Set(jokefromhtmexhumrFavIds);
    return [...jokefromhtmexhumrStrsStories].sort((a, b) => {
      const af = favSet.has(a.id) ? 1 : 0;
      const bf = favSet.has(b.id) ? 1 : 0;
      return bf - af;
    });
  }, [jokefromhtmexhumrFavFirst, jokefromhtmexhumrFavIds]);

  return (
    <View style={styles.jokefromhtmexhumrRoot}>
      <ScrollView
        style={styles.jokefromhtmexhumrScroll}
        contentContainerStyle={styles.jokefromhtmexhumrScrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.jokefromhtmexhumrHeader}>
          <Text style={styles.jokefromhtmexhumrHeaderIcon}>📖</Text>
          <View>
            <Text style={styles.jokefromhtmexhumrHeaderTitle}>
              Funny Stories
            </Text>
            <Text style={styles.jokefromhtmexhumrHeaderSubtitle}>
              Tales from Miguel's legendary life
            </Text>
          </View>
        </View>

        <View style={styles.jokefromhtmexhumrMiguelWrap}>
          <LinearGradient
            colors={['#600B1A4D', '#9F4A0A33']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.jokefromhtmexhumrMiguelGradient}>
            <View style={styles.jokefromhtmexhumrMiguelRow}>
              <View style={styles.jokefromhtmexhumrMiguelAvatar}>
                <Image
                  source={require('../assets/i/chiijokefromemximigl.png')}
                  style={styles.jokefromhtmexhumrMiguelImg}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.jokefromhtmexhumrMiguelBody}>
                {
                  '"These are 100% true stories from my life.\nWell… maybe 60% true. Okay, some parts I improved a little. It is called storytelling, amigo."'
                }
              </Text>
            </View>
          </LinearGradient>
        </View>

        <Pressable
          onPress={() => setJokeFromhtmexhumrFavFirst(v => !v)}
          style={styles.jokefromhtmexhumrFavFirstRow}>
          <Text style={styles.jokefromhtmexhumrFavFirstStar}>⭐</Text>
          <Text style={styles.jokefromhtmexhumrFavFirstText}>
            Favorites shown first
          </Text>
          <View style={styles.jokefromhtmexhumrFavFirstSpacer} />
        </Pressable>

        <View style={styles.jokefromhtmexhumrList}>
          {jokefromhtmexhumrSortedStories.map(story => {
            const isFav = jokefromhtmexhumrFavIds.includes(story.id);
            return (
              <View
                key={story.id}
                style={[
                  styles.jokefromhtmexhumrStoryCard,
                  isFav && styles.jokefromhtmexhumrStoryCardFav,
                ]}>
                <View style={styles.jokefromhtmexhumrStoryTopRow}>
                  <View style={styles.jokefromhtmexhumrStoryIconWrap}>
                    <LinearGradient
                      colors={['#600B1A66', '#9F4A0A4D']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 1}}
                      style={styles.jokefromhtmexhumrStoryIconWrap}>
                      <Text style={styles.jokefromhtmexhumrStoryIconText}>
                        {story.icon}
                      </Text>
                    </LinearGradient>
                  </View>
                  <View style={styles.jokefromhtmexhumrStoryTitleCol}>
                    <View style={styles.jokefromhtmexhumrStoryTitleRow}>
                      {isFav ? (
                        <Text style={styles.jokefromhtmexhumrFavSmall}>
                          ★
                        </Text>
                      ) : null}
                      <Text style={styles.jokefromhtmexhumrStoryTitle}>
                        {story.title}
                      </Text>
                    </View>
                    <Text style={styles.jokefromhtmexhumrStoryExcerpt}>
                      {story.excerpt}
                    </Text>
                  </View>
                  <Text style={styles.jokefromhtmexhumrArrow}>→</Text>
                </View>

                <View style={styles.jokefromhtmexhumrStoryBtnRow}>
                  <Pressable
                    onPress={() => jokefromhtmexhumrToggleFav(story.id)}
                    style={[
                      styles.jokefromhtmexhumrStoryBtn,
                      styles.jokefromhtmexhumrStoryBtnGhost,
                      isFav && styles.jokefromhtmexhumrStoryBtnGhostOn,
                    ]}>
                    <Text style={styles.jokefromhtmexhumrStoryBtnText}>
                      {isFav ? '★ Favorited' : '☆ Favorite'}
                    </Text>
                  </Pressable>

                  <Pressable
                    onPress={() =>
                      navigation.navigate('JokeFromhtmexhumrstrsdtl', {
                        id: story.id,
                        title: story.title,
                        icon: story.icon,
                        body: story.body,
                      })
                    }
                    style={[
                      styles.jokefromhtmexhumrStoryBtn,
                      styles.jokefromhtmexhumrStoryBtnPrimary,
                    ]}>
                    <Text style={styles.jokefromhtmexhumrStoryBtnPrimaryText}>
                      📖 Read
                    </Text>
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

export default JokeFromhtmexhumrstrs;

const styles = StyleSheet.create({
  jokefromhtmexhumrHeaderIcon: {
    fontSize: 22,
  },
  jokefromhtmexhumrHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
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

  jokefromhtmexhumrHeaderSubtitle: {
    marginTop: 4,
    color: '#E6AD4CB2',
    fontSize: 13,
    fontWeight: '400',
  },

  jokefromhtmexhumrMiguelWrap: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  jokefromhtmexhumrMiguelGradient: {},
  jokefromhtmexhumrMiguelRow: {
    padding: 14,
    flexDirection: 'row',
    gap: 22,
    alignItems: 'center',
  },
  jokefromhtmexhumrMiguelAvatar: {
    borderRadius: 16,
    backgroundColor: '#00000022',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  jokefromhtmexhumrMiguelImg: {
    width: 36,
    height: 87,
  },
  jokefromhtmexhumrMiguelBody: {
    flex: 1,
    color: '#FFFFFF99',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },

  jokefromhtmexhumrFavFirstRow: {
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
  jokefromhtmexhumrFavFirstStar: {
    fontSize: 14,
  },
  jokefromhtmexhumrFavFirstText: {
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '600',
  },
  jokefromhtmexhumrFavFirstSpacer: {
    flex: 1,
  },

  jokefromhtmexhumrList: {
    gap: 14,
  },
  jokefromhtmexhumrStoryCard: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 16,
  },
  jokefromhtmexhumrStoryCardFav: {
    backgroundColor: '#E6AD4C14',
    borderColor: '#E6AD4C40',
  },
  jokefromhtmexhumrStoryTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  jokefromhtmexhumrStoryIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: '#9F4A0A66',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  jokefromhtmexhumrStoryIconText: {
    fontSize: 22,
  },
  jokefromhtmexhumrStoryTitleCol: {
    flex: 1,
  },
  jokefromhtmexhumrStoryTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  jokefromhtmexhumrFavSmall: {
    color: '#E2A63B',
    fontSize: 14,
    fontWeight: '900',
  },
  jokefromhtmexhumrStoryTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  jokefromhtmexhumrStoryExcerpt: {
    marginTop: 6,
    color: '#FFFFFF9E',
    fontSize: 12.5,
    fontWeight: '400',
    lineHeight: 17,
  },
  jokefromhtmexhumrArrow: {
    color: '#FFFFFF4D',
    fontSize: 20,
    fontWeight: '400',
  },

  jokefromhtmexhumrStoryBtnRow: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 12,
  },
  jokefromhtmexhumrStoryBtn: {
    flex: 1,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  jokefromhtmexhumrStoryBtnGhost: {
    backgroundColor: '#FFFFFF0F',
    borderColor: '#FFFFFF14',
  },
  jokefromhtmexhumrStoryBtnGhostOn: {
    backgroundColor: '#E6AD4C33',
    borderColor: '#E6AD4C66',
  },
  jokefromhtmexhumrStoryBtnText: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '600',
  },
  jokefromhtmexhumrStoryBtnPrimary: {
    backgroundColor: '#600B1A4D',
    borderColor: '#600B1A66',
  },
  jokefromhtmexhumrStoryBtnPrimaryText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
