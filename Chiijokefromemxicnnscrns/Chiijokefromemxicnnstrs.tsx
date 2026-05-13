import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useMemo, useState} from 'react';

import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {chiijokefromemxicnnStrsStories} from '../Chiijokefromemxicnndata/chiijokefromemxicnndatastrs';
import LinearGradient from 'react-native-linear-gradient';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Chiijokefromemxicnnstrs = () => {
  const navigation = useNavigation() as any;
  const [chiijokefromemxicnnFavIds, setChiijokefromemxicnnFavIds] = useState<
    string[]
  >([]);
  const [chiijokefromemxicnnFavFirst, setChiijokefromemxicnnFavFirst] =
    useState(true);

  const chiijokefromemxicnnFavKey = 'chiijokefromemxicnn:favStories';

  const chiijokefromemxicnnLoadFavs = useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(chiijokefromemxicnnFavKey);
      const parsed = raw ? (JSON.parse(raw) as unknown) : [];
      setChiijokefromemxicnnFavIds(
        Array.isArray(parsed) ? (parsed as string[]) : [],
      );
    } catch {
      setChiijokefromemxicnnFavIds([]);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      chiijokefromemxicnnLoadFavs();
    }, [chiijokefromemxicnnLoadFavs]),
  );

  const chiijokefromemxicnnToggleFav = async (id: string) => {
    try {
      const next = chiijokefromemxicnnFavIds.includes(id)
        ? chiijokefromemxicnnFavIds.filter(x => x !== id)
        : [...chiijokefromemxicnnFavIds, id];
      setChiijokefromemxicnnFavIds(next);
      await AsyncStorage.setItem(
        chiijokefromemxicnnFavKey,
        JSON.stringify(next),
      );
    } catch {
      console.log('error');
    }
  };

  const chiijokefromemxicnnSortedStories = useMemo(() => {
    if (!chiijokefromemxicnnFavFirst) {
      return chiijokefromemxicnnStrsStories;
    }
    const favSet = new Set(chiijokefromemxicnnFavIds);
    return [...chiijokefromemxicnnStrsStories].sort((a, b) => {
      const af = favSet.has(a.id) ? 1 : 0;
      const bf = favSet.has(b.id) ? 1 : 0;
      return bf - af;
    });
  }, [chiijokefromemxicnnFavFirst, chiijokefromemxicnnFavIds]);

  return (
    <View style={styles.chiijokefromemxicnnRoot}>
      <ScrollView
        style={styles.chiijokefromemxicnnScroll}
        contentContainerStyle={styles.chiijokefromemxicnnScrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.chiijokefromemxicnnHeader}>
          <Text style={styles.chiijokefromemxicnnHeaderIcon}>📖</Text>
          <View>
            <Text style={styles.chiijokefromemxicnnHeaderTitle}>
              Funny Stories
            </Text>
            <Text style={styles.chiijokefromemxicnnHeaderSubtitle}>
              Tales from Miguel's legendary life
            </Text>
          </View>
        </View>

        <View style={styles.chiijokefromemxicnnMiguelWrap}>
          <LinearGradient
            colors={['#600B1A4D', '#9F4A0A33']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.chiijokefromemxicnnMiguelGradient}>
            <View style={styles.chiijokefromemxicnnMiguelRow}>
              <View style={styles.chiijokefromemxicnnMiguelAvatar}>
                <Image
                  source={require('../assets/i/chiijokefromemximigl.png')}
                  style={styles.chiijokefromemxicnnMiguelImg}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.chiijokefromemxicnnMiguelBody}>
                {
                  '"These are 100% true stories from my life.\nWell… maybe 60% true. Okay, some parts I improved a little. It is called storytelling, amigo."'
                }
              </Text>
            </View>
          </LinearGradient>
        </View>

        <Pressable
          onPress={() => setChiijokefromemxicnnFavFirst(v => !v)}
          style={styles.chiijokefromemxicnnFavFirstRow}>
          <Text style={styles.chiijokefromemxicnnFavFirstStar}>⭐</Text>
          <Text style={styles.chiijokefromemxicnnFavFirstText}>
            Favorites shown first
          </Text>
          <View style={styles.chiijokefromemxicnnFavFirstSpacer} />
        </Pressable>

        <View style={styles.chiijokefromemxicnnList}>
          {chiijokefromemxicnnSortedStories.map(story => {
            const isFav = chiijokefromemxicnnFavIds.includes(story.id);
            return (
              <View
                key={story.id}
                style={[
                  styles.chiijokefromemxicnnStoryCard,
                  isFav && styles.chiijokefromemxicnnStoryCardFav,
                ]}>
                <View style={styles.chiijokefromemxicnnStoryTopRow}>
                  <View style={styles.chiijokefromemxicnnStoryIconWrap}>
                    <LinearGradient
                      colors={['#600B1A66', '#9F4A0A4D']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 1}}
                      style={styles.chiijokefromemxicnnStoryIconWrap}>
                      <Text style={styles.chiijokefromemxicnnStoryIconText}>
                        {story.icon}
                      </Text>
                    </LinearGradient>
                  </View>
                  <View style={styles.chiijokefromemxicnnStoryTitleCol}>
                    <View style={styles.chiijokefromemxicnnStoryTitleRow}>
                      {isFav ? (
                        <Text style={styles.chiijokefromemxicnnFavSmall}>
                          ★
                        </Text>
                      ) : null}
                      <Text style={styles.chiijokefromemxicnnStoryTitle}>
                        {story.title}
                      </Text>
                    </View>
                    <Text style={styles.chiijokefromemxicnnStoryExcerpt}>
                      {story.excerpt}
                    </Text>
                  </View>
                  <Text style={styles.chiijokefromemxicnnArrow}>→</Text>
                </View>

                <View style={styles.chiijokefromemxicnnStoryBtnRow}>
                  <Pressable
                    onPress={() => chiijokefromemxicnnToggleFav(story.id)}
                    style={[
                      styles.chiijokefromemxicnnStoryBtn,
                      styles.chiijokefromemxicnnStoryBtnGhost,
                      isFav && styles.chiijokefromemxicnnStoryBtnGhostOn,
                    ]}>
                    <Text style={styles.chiijokefromemxicnnStoryBtnText}>
                      {isFav ? '★ Favorited' : '☆ Favorite'}
                    </Text>
                  </Pressable>

                  <Pressable
                    onPress={() =>
                      navigation.navigate('Chiijokefromemxicnnstrsdtl', {
                        id: story.id,
                        title: story.title,
                        icon: story.icon,
                        body: story.body,
                      })
                    }
                    style={[
                      styles.chiijokefromemxicnnStoryBtn,
                      styles.chiijokefromemxicnnStoryBtnPrimary,
                    ]}>
                    <Text style={styles.chiijokefromemxicnnStoryBtnPrimaryText}>
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

export default Chiijokefromemxicnnstrs;

const styles = StyleSheet.create({
  chiijokefromemxicnnHeaderIcon: {
    fontSize: 22,
  },
  chiijokefromemxicnnHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
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

  chiijokefromemxicnnHeaderSubtitle: {
    marginTop: 4,
    color: '#E6AD4CB2',
    fontSize: 13,
    fontWeight: '400',
  },

  chiijokefromemxicnnMiguelWrap: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  chiijokefromemxicnnMiguelGradient: {},
  chiijokefromemxicnnMiguelRow: {
    padding: 14,
    flexDirection: 'row',
    gap: 22,
    alignItems: 'center',
  },
  chiijokefromemxicnnMiguelAvatar: {
    borderRadius: 16,
    backgroundColor: '#00000022',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  chiijokefromemxicnnMiguelImg: {
    width: 36,
    height: 87,
  },
  chiijokefromemxicnnMiguelBody: {
    flex: 1,
    color: '#FFFFFF99',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },

  chiijokefromemxicnnFavFirstRow: {
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
  chiijokefromemxicnnFavFirstStar: {
    fontSize: 14,
  },
  chiijokefromemxicnnFavFirstText: {
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '600',
  },
  chiijokefromemxicnnFavFirstSpacer: {
    flex: 1,
  },

  chiijokefromemxicnnList: {
    gap: 14,
  },
  chiijokefromemxicnnStoryCard: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 16,
  },
  chiijokefromemxicnnStoryCardFav: {
    backgroundColor: '#E6AD4C14',
    borderColor: '#E6AD4C40',
  },
  chiijokefromemxicnnStoryTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chiijokefromemxicnnStoryIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: '#9F4A0A66',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chiijokefromemxicnnStoryIconText: {
    fontSize: 22,
  },
  chiijokefromemxicnnStoryTitleCol: {
    flex: 1,
  },
  chiijokefromemxicnnStoryTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  chiijokefromemxicnnFavSmall: {
    color: '#E2A63B',
    fontSize: 14,
    fontWeight: '900',
  },
  chiijokefromemxicnnStoryTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  chiijokefromemxicnnStoryExcerpt: {
    marginTop: 6,
    color: '#FFFFFF9E',
    fontSize: 12.5,
    fontWeight: '400',
    lineHeight: 17,
  },
  chiijokefromemxicnnArrow: {
    color: '#FFFFFF4D',
    fontSize: 20,
    fontWeight: '400',
  },

  chiijokefromemxicnnStoryBtnRow: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 12,
  },
  chiijokefromemxicnnStoryBtn: {
    flex: 1,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  chiijokefromemxicnnStoryBtnGhost: {
    backgroundColor: '#FFFFFF0F',
    borderColor: '#FFFFFF14',
  },
  chiijokefromemxicnnStoryBtnGhostOn: {
    backgroundColor: '#E6AD4C33',
    borderColor: '#E6AD4C66',
  },
  chiijokefromemxicnnStoryBtnText: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '600',
  },
  chiijokefromemxicnnStoryBtnPrimary: {
    backgroundColor: '#600B1A4D',
    borderColor: '#600B1A66',
  },
  chiijokefromemxicnnStoryBtnPrimaryText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
