import LinearGradient from 'react-native-linear-gradient';

import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  type ChiijokefromemxicnnJokeCategory,
  chiijokefromemxicnnJokeCategories,
} from '../Chiijokefromemxicnndata/chiijokefromemxicnndatajks';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Chiijokefromemxicnnjks = () => {
  const navigation = useNavigation() as any;

  const chiijokefromemxicnnOpenCategory = (
    chiijokefromemxicnnCategory: ChiijokefromemxicnnJokeCategory,
  ) => {
    navigation.navigate('Chiijokefromemxicnnjksdtl', {
      categoryKey: chiijokefromemxicnnCategory.key,
      title: chiijokefromemxicnnCategory.title,
      subtitle: chiijokefromemxicnnCategory.subtitle,
      quote: chiijokefromemxicnnCategory.quote,
      tag: chiijokefromemxicnnCategory.tag,
      icon: chiijokefromemxicnnCategory.icon,
      accent: '#E2A63B',
      jokes: chiijokefromemxicnnCategory.jokes,
    });
  };

  return (
    <View style={styles.chiijokefromemxicnnRoot}>
      <ScrollView
        style={styles.chiijokefromemxicnnScroll}
        contentContainerStyle={styles.chiijokefromemxicnnScrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.chiijokefromemxicnnHeader}>
          <Text style={styles.chiijokefromemxicnnMiguelAvatarText}>🌮</Text>
          <View>
            <Text style={styles.chiijokefromemxicnnHeaderTitle}>
              Joke Categories
            </Text>
            <Text style={styles.chiijokefromemxicnnHeaderSubtitle}>
              Choose your flavor of humor, amigo
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
                />
              </View>
              <View style={styles.chiijokefromemxicnnMiguelTextCol}>
                <Text style={styles.chiijokefromemxicnnMiguelTitle}>
                  Miguel says:
                </Text>
                <Text style={styles.chiijokefromemxicnnMiguelBody}>
                  {
                    '"Hola, amigo! Ready to laugh? Pick a style or let fate decide — I have jokes for every mood!"'
                  }
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.chiijokefromemxicnnCardsCol}>
          {chiijokefromemxicnnJokeCategories.map(chiijokefromemxicnnCategory => (
            <Pressable
              key={chiijokefromemxicnnCategory.key}
              onPress={() => {
                chiijokefromemxicnnOpenCategory(chiijokefromemxicnnCategory);
              }}
              style={styles.chiijokefromemxicnnCardOuter}>
              <LinearGradient
                colors={chiijokefromemxicnnCategory.gradient}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={[
                  styles.chiijokefromemxicnnCardGradient,
                  {borderColor: chiijokefromemxicnnCategory.border},
                ]}>
                <View style={styles.chiijokefromemxicnnCardInner}>
                  <View style={styles.chiijokefromemxicnnCardTopRow}>
                    <View style={styles.chiijokefromemxicnnCardIconWrap}>
                      <Text style={styles.chiijokefromemxicnnCardIcon}>
                        {chiijokefromemxicnnCategory.icon}
                      </Text>
                    </View>
                    <View style={styles.chiijokefromemxicnnCardTitleCol}>
                      <Text style={styles.chiijokefromemxicnnCardTitle}>
                        {chiijokefromemxicnnCategory.title}
                      </Text>
                      <Text style={styles.chiijokefromemxicnnCardSubtitle}>
                        {chiijokefromemxicnnCategory.subtitle}
                      </Text>
                      <Text style={styles.chiijokefromemxicnnCardDesc}>
                        {chiijokefromemxicnnCategory.description}
                      </Text>
                    </View>
                    <Text style={styles.chiijokefromemxicnnCardArrow}>→</Text>
                  </View>

                  <View style={styles.chiijokefromemxicnnCardBottomRow}>
                    <Text style={styles.chiijokefromemxicnnCardCount}>
                      {Math.min(6, chiijokefromemxicnnCategory.jokes.length)}{' '}
                      jokes available
                    </Text>
                    <View style={styles.chiijokefromemxicnnTapPill}>
                      <Text style={styles.chiijokefromemxicnnTapPillText}>
                        TAP TO READ
                      </Text>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </Pressable>
          ))}
        </View>

        <View style={styles.chiijokefromemxicnnSurpriseOuter}>
          <Pressable
            onPress={() => {
              const idx = Math.floor(
                Math.random() * chiijokefromemxicnnJokeCategories.length,
              );
              const pick = chiijokefromemxicnnJokeCategories[idx];
              if (pick) {
                chiijokefromemxicnnOpenCategory(pick);
              }
            }}
            style={styles.chiijokefromemxicnnSurpriseBtn}>
            <Text style={styles.chiijokefromemxicnnDice}>🎲</Text>
            <View>
              <Text style={styles.chiijokefromemxicnnSurpriseTitle}>
                Surprise Me!
              </Text>
              <Text style={styles.chiijokefromemxicnnSurpriseSubtitle}>
                Random joke from any category
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Chiijokefromemxicnnjks;

const styles = StyleSheet.create({
  chiijokefromemxicnnCardTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  chiijokefromemxicnnCardSubtitle: {
    marginTop: 2,
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '600',
  },

  chiijokefromemxicnnRoot: {
    flex: 1,
    backgroundColor: '#0A0203',
  },
  chiijokefromemxicnnScroll: {
    flexGrow: 1,
    paddingTop: 60,
  },
  chiijokefromemxicnnScrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 155,
  },

  chiijokefromemxicnnHeader: {
    paddingTop: 6,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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

  chiijokefromemxicnnMiguelWrap: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  chiijokefromemxicnnMiguelGradient: {
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  chiijokefromemxicnnMiguelRow: {
    padding: 14,
    flexDirection: 'row',
    gap: 22,
    alignItems: 'center',
  },
  chiijokefromemxicnnMiguelAvatar: {},
  chiijokefromemxicnnMiguelAvatarText: {
    fontSize: 26,
  },
  chiijokefromemxicnnMiguelTextCol: {
    flex: 1,
  },
  chiijokefromemxicnnMiguelTitle: {
    color: '#E2A63B',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  chiijokefromemxicnnMiguelBody: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },

  chiijokefromemxicnnCardsCol: {
    gap: 14,
  },
  chiijokefromemxicnnCardOuter: {
    borderRadius: 18,
    overflow: 'hidden',
  },
  chiijokefromemxicnnCardGradient: {
    borderWidth: 1,
    borderRadius: 18,
  },
  // Wrapper for padding inside gradient container
  chiijokefromemxicnnCardInner: {
    padding: 16,
  },
  chiijokefromemxicnnCardTopRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  chiijokefromemxicnnCardIconWrap: {
    width: 62,
    height: 62,
    borderRadius: 18,
    backgroundColor: '#0000004D',
    borderWidth: 1,
    borderColor: '#FF3D5A33',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  chiijokefromemxicnnCardIcon: {
    fontSize: 22,
  },
  chiijokefromemxicnnCardTitleCol: {
    flex: 1,
    paddingRight: 10,
  },

  chiijokefromemxicnnCardDesc: {
    marginTop: 8,
    color: '#FFFFFFB8',
    fontSize: 12.5,
    fontWeight: '500',
    lineHeight: 17,
  },
  chiijokefromemxicnnCardArrow: {
    color: '#FFFFFFAA',
    fontSize: 22,
    fontWeight: '600',
    marginTop: 6,
  },
  chiijokefromemxicnnCardBottomRow: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chiijokefromemxicnnCardCount: {
    color: '#FFFFFF9E',
    fontSize: 12,
    fontWeight: '600',
  },
  chiijokefromemxicnnTapPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#FFFFFF1A',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  chiijokefromemxicnnTapPillText: {
    color: '#FFFFFFCC',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.2,
  },

  chiijokefromemxicnnSurpriseOuter: {
    marginTop: 16,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#B07A1230',
  },
  chiijokefromemxicnnSurpriseBtn: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: '#0A0707',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chiijokefromemxicnnDice: {
    fontSize: 22,
  },
  chiijokefromemxicnnSurpriseTitle: {
    color: '#E2A63B',
    fontSize: 18,
    fontWeight: '700',
  },
  chiijokefromemxicnnSurpriseSubtitle: {
    marginTop: 4,
    color: '#FFFFFF9E',
    fontSize: 12.5,
    fontWeight: '500',
  },
});
