import LinearGradient from 'react-native-linear-gradient';

import React from 'react';
import {useNavigation} from '@react-navigation/native';

import type {JokeCategory} from '../types';
import {defaultJokeAccent} from '../constants';
import {jokeCategories} from '../data/jokeCategories';
import SurpriseMeCard from '../components/ui/SurpriseMeCard';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const JokesScreen = () => {
  const navigation = useNavigation() as any;

  const openCategory = (
    category: JokeCategory,
  ) => {
    navigation.navigate('JokeDetail', {
      categoryKey: category.key,
      title: category.title,
      subtitle: category.subtitle,
      quote: category.quote,
      tag: category.tag,
      icon: category.icon,
      accent: defaultJokeAccent,
      jokes: category.jokes,
    });
  };

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.miguelAvatarText}>🌮</Text>
          <View>
            <Text style={styles.headerTitle}>
              Joke Categories
            </Text>
            <Text style={styles.headerSubtitle}>
              Choose your flavor of humor, amigo
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
                />
              </View>
              <View style={styles.miguelTextCol}>
                <Text style={styles.miguelTitle}>
                  Miguel says:
                </Text>
                <Text style={styles.miguelBody}>
                  {
                    '"Hola, amigo! Ready to laugh? Pick a style or let fate decide — I have jokes for every mood!"'
                  }
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.cardsCol}>
          {jokeCategories.map(category => (
            <Pressable
              key={category.key}
              onPress={() => {
                openCategory(category);
              }}
              style={styles.cardOuter}>
              <LinearGradient
                colors={category.gradient}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={[
                  styles.cardGradient,
                  {borderColor: category.border},
                ]}>
                <View style={styles.cardInner}>
                  <View style={styles.cardTopRow}>
                    <View style={styles.cardIconWrap}>
                      <Text style={styles.cardIcon}>
                        {category.icon}
                      </Text>
                    </View>
                    <View style={styles.cardTitleCol}>
                      <Text style={styles.cardTitle}>
                        {category.title}
                      </Text>
                      <Text style={styles.cardSubtitle}>
                        {category.subtitle}
                      </Text>
                      <Text style={styles.cardDesc}>
                        {category.description}
                      </Text>
                    </View>
                    <Text style={styles.cardArrow}>→</Text>
                  </View>

                  <View style={styles.cardBottomRow}>
                    <Text style={styles.cardCount}>
                      {Math.min(6, category.jokes.length)}{' '}
                      jokes available
                    </Text>
                    <View style={styles.tapPill}>
                      <Text style={styles.tapPillText}>
                        TAP TO READ
                      </Text>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </Pressable>
          ))}
        </View>

        <SurpriseMeCard
          onPress={() => {
            const idx = Math.floor(
              Math.random() * jokeCategories.length,
            );
            const pick = jokeCategories[idx];
            if (pick) {
              openCategory(pick);
            }
          }}
        />
      </ScrollView>
    </View>
  );
};

export default JokesScreen;

const styles = StyleSheet.create({
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  cardSubtitle: {
    marginTop: 2,
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '600',
  },

  root: {
    flex: 1,
    backgroundColor: '#0A0203',
  },
  scroll: {
    flexGrow: 1,
    paddingTop: 60,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 155,
  },

  header: {
    paddingTop: 6,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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

  miguelWrap: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  miguelGradient: {
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  miguelRow: {
    padding: 14,
    flexDirection: 'row',
    gap: 22,
    alignItems: 'center',
  },
  miguelAvatar: {},
  miguelAvatarText: {
    fontSize: 26,
  },
  miguelTextCol: {
    flex: 1,
  },
  miguelTitle: {
    color: '#E2A63B',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  miguelBody: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },

  cardsCol: {
    gap: 14,
  },
  cardOuter: {
    borderRadius: 18,
    overflow: 'hidden',
  },
  cardGradient: {
    borderWidth: 1,
    borderRadius: 18,
  },
  // Wrapper for padding inside gradient container
  cardInner: {
    padding: 16,
  },
  cardTopRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  cardIconWrap: {
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
  cardIcon: {
    fontSize: 22,
  },
  cardTitleCol: {
    flex: 1,
    paddingRight: 10,
  },

  cardDesc: {
    marginTop: 8,
    color: '#FFFFFFB8',
    fontSize: 12.5,
    fontWeight: '500',
    lineHeight: 17,
  },
  cardArrow: {
    color: '#FFFFFFAA',
    fontSize: 22,
    fontWeight: '600',
    marginTop: 6,
  },
  cardBottomRow: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardCount: {
    color: '#FFFFFF9E',
    fontSize: 12,
    fontWeight: '600',
  },
  tapPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#FFFFFF1A',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  tapPillText: {
    color: '#FFFFFFCC',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
});
