import LinearGradient from 'react-native-linear-gradient';

import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  type JokeFromhtmexhumrJokeCategory,
  jokefromhtmexhumrJokeCategories,
} from '../JokeFromhtmexhumrdata/jokefromhtmexhumrdatajks';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const JokeFromhtmexhumrjks = () => {
  const navigation = useNavigation() as any;

  const jokefromhtmexhumrOpenCategory = (
    jokefromhtmexhumrCategory: JokeFromhtmexhumrJokeCategory,
  ) => {
    navigation.navigate('JokeFromhtmexhumrjksdtl', {
      categoryKey: jokefromhtmexhumrCategory.key,
      title: jokefromhtmexhumrCategory.title,
      subtitle: jokefromhtmexhumrCategory.subtitle,
      quote: jokefromhtmexhumrCategory.quote,
      tag: jokefromhtmexhumrCategory.tag,
      icon: jokefromhtmexhumrCategory.icon,
      accent: '#E2A63B',
      jokes: jokefromhtmexhumrCategory.jokes,
    });
  };

  return (
    <View style={styles.jokefromhtmexhumrRoot}>
      <ScrollView
        style={styles.jokefromhtmexhumrScroll}
        contentContainerStyle={styles.jokefromhtmexhumrScrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.jokefromhtmexhumrHeader}>
          <Text style={styles.jokefromhtmexhumrMiguelAvatarText}>🌮</Text>
          <View>
            <Text style={styles.jokefromhtmexhumrHeaderTitle}>
              Joke Categories
            </Text>
            <Text style={styles.jokefromhtmexhumrHeaderSubtitle}>
              Choose your flavor of humor, amigo
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
                />
              </View>
              <View style={styles.jokefromhtmexhumrMiguelTextCol}>
                <Text style={styles.jokefromhtmexhumrMiguelTitle}>
                  Miguel says:
                </Text>
                <Text style={styles.jokefromhtmexhumrMiguelBody}>
                  {
                    '"Hola, amigo! Ready to laugh? Pick a style or let fate decide — I have jokes for every mood!"'
                  }
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.jokefromhtmexhumrCardsCol}>
          {jokefromhtmexhumrJokeCategories.map(jokefromhtmexhumrCategory => (
            <Pressable
              key={jokefromhtmexhumrCategory.key}
              onPress={() => {
                jokefromhtmexhumrOpenCategory(jokefromhtmexhumrCategory);
              }}
              style={styles.jokefromhtmexhumrCardOuter}>
              <LinearGradient
                colors={jokefromhtmexhumrCategory.gradient}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={[
                  styles.jokefromhtmexhumrCardGradient,
                  {borderColor: jokefromhtmexhumrCategory.border},
                ]}>
                <View style={styles.jokefromhtmexhumrCardInner}>
                  <View style={styles.jokefromhtmexhumrCardTopRow}>
                    <View style={styles.jokefromhtmexhumrCardIconWrap}>
                      <Text style={styles.jokefromhtmexhumrCardIcon}>
                        {jokefromhtmexhumrCategory.icon}
                      </Text>
                    </View>
                    <View style={styles.jokefromhtmexhumrCardTitleCol}>
                      <Text style={styles.jokefromhtmexhumrCardTitle}>
                        {jokefromhtmexhumrCategory.title}
                      </Text>
                      <Text style={styles.jokefromhtmexhumrCardSubtitle}>
                        {jokefromhtmexhumrCategory.subtitle}
                      </Text>
                      <Text style={styles.jokefromhtmexhumrCardDesc}>
                        {jokefromhtmexhumrCategory.description}
                      </Text>
                    </View>
                    <Text style={styles.jokefromhtmexhumrCardArrow}>→</Text>
                  </View>

                  <View style={styles.jokefromhtmexhumrCardBottomRow}>
                    <Text style={styles.jokefromhtmexhumrCardCount}>
                      {Math.min(6, jokefromhtmexhumrCategory.jokes.length)}{' '}
                      jokes available
                    </Text>
                    <View style={styles.jokefromhtmexhumrTapPill}>
                      <Text style={styles.jokefromhtmexhumrTapPillText}>
                        TAP TO READ
                      </Text>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </Pressable>
          ))}
        </View>

        <View style={styles.jokefromhtmexhumrSurpriseOuter}>
          <Pressable
            onPress={() => {
              const idx = Math.floor(
                Math.random() * jokefromhtmexhumrJokeCategories.length,
              );
              const pick = jokefromhtmexhumrJokeCategories[idx];
              if (pick) {
                jokefromhtmexhumrOpenCategory(pick);
              }
            }}
            style={styles.jokefromhtmexhumrSurpriseBtn}>
            <Text style={styles.jokefromhtmexhumrDice}>🎲</Text>
            <View>
              <Text style={styles.jokefromhtmexhumrSurpriseTitle}>
                Surprise Me!
              </Text>
              <Text style={styles.jokefromhtmexhumrSurpriseSubtitle}>
                Random joke from any category
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default JokeFromhtmexhumrjks;

const styles = StyleSheet.create({
  jokefromhtmexhumrCardTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  jokefromhtmexhumrCardSubtitle: {
    marginTop: 2,
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '600',
  },

  jokefromhtmexhumrRoot: {
    flex: 1,
    backgroundColor: '#0A0203',
  },
  jokefromhtmexhumrScroll: {
    flexGrow: 1,
    paddingTop: 60,
  },
  jokefromhtmexhumrScrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 155,
  },

  jokefromhtmexhumrHeader: {
    paddingTop: 6,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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

  jokefromhtmexhumrMiguelWrap: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  jokefromhtmexhumrMiguelGradient: {
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  jokefromhtmexhumrMiguelRow: {
    padding: 14,
    flexDirection: 'row',
    gap: 22,
    alignItems: 'center',
  },
  jokefromhtmexhumrMiguelAvatar: {},
  jokefromhtmexhumrMiguelAvatarText: {
    fontSize: 26,
  },
  jokefromhtmexhumrMiguelTextCol: {
    flex: 1,
  },
  jokefromhtmexhumrMiguelTitle: {
    color: '#E2A63B',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  jokefromhtmexhumrMiguelBody: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },

  jokefromhtmexhumrCardsCol: {
    gap: 14,
  },
  jokefromhtmexhumrCardOuter: {
    borderRadius: 18,
    overflow: 'hidden',
  },
  jokefromhtmexhumrCardGradient: {
    borderWidth: 1,
    borderRadius: 18,
  },
  // Wrapper for padding inside gradient container
  jokefromhtmexhumrCardInner: {
    padding: 16,
  },
  jokefromhtmexhumrCardTopRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  jokefromhtmexhumrCardIconWrap: {
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
  jokefromhtmexhumrCardIcon: {
    fontSize: 22,
  },
  jokefromhtmexhumrCardTitleCol: {
    flex: 1,
    paddingRight: 10,
  },

  jokefromhtmexhumrCardDesc: {
    marginTop: 8,
    color: '#FFFFFFB8',
    fontSize: 12.5,
    fontWeight: '500',
    lineHeight: 17,
  },
  jokefromhtmexhumrCardArrow: {
    color: '#FFFFFFAA',
    fontSize: 22,
    fontWeight: '600',
    marginTop: 6,
  },
  jokefromhtmexhumrCardBottomRow: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  jokefromhtmexhumrCardCount: {
    color: '#FFFFFF9E',
    fontSize: 12,
    fontWeight: '600',
  },
  jokefromhtmexhumrTapPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#FFFFFF1A',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  jokefromhtmexhumrTapPillText: {
    color: '#FFFFFFCC',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.2,
  },

  jokefromhtmexhumrSurpriseOuter: {
    marginTop: 16,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#B07A1230',
  },
  jokefromhtmexhumrSurpriseBtn: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: '#0A0707',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  jokefromhtmexhumrDice: {
    fontSize: 22,
  },
  jokefromhtmexhumrSurpriseTitle: {
    color: '#E2A63B',
    fontSize: 18,
    fontWeight: '700',
  },
  jokefromhtmexhumrSurpriseSubtitle: {
    marginTop: 4,
    color: '#FFFFFF9E',
    fontSize: 12.5,
    fontWeight: '500',
  },
});
