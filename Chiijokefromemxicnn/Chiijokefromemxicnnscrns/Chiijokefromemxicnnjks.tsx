import LinearGradient from 'react-native-linear-gradient';

import React, {useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';

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

  const chiijokefromemxicnnCategories = useMemo(
    () => [
      {
        key: 'angry',
        icon: '😤',
        title: 'El Enojado',
        subtitle: 'The Angry Mexican',
        description: 'Furious jokes with maximum\nspice and zero patience',
        quote: '"Ay, caramba! Why is everything so WRONG?!"',
        tag: '🌶️',
        jokes: [
          'I told my taco to stay warm… now it thinks it owns the microwave.',
          'My neighbor stole one pepper from my garden. Now every taco he eats tastes like betrayal.',
          'I asked for peace and quiet. Instead, my mariachi band cousin arrived with three trumpets.',
          'If someone says my salsa is too spicy, I take it as a personal insult.',
          "My burrito exploded in the microwave. Even the kitchen couldn't handle my anger.",
          'I lost one game of cards and suddenly the whole village heard new Spanish words.',
          'The waiter forgot my hot sauce. That was the longest five minutes of his life.',
          'I tried yoga once, but I got angry because the floor was winning.',
          'My cactus has fewer sharp points than my mood before breakfast.',
          "People say I overreact. Sorry, I couldn't hear them over my dramatic exit.",
        ],
        gradient: ['#600B1A', '#3D0510'],
        border: '#FF3D5A33',
      },
      {
        key: 'smart',
        icon: '🧠',
        title: 'El Sabio',
        subtitle: 'The Smart Mexican',
        description:
          'Witty intellectual humor with\ndeep philosophical insights',
        quote:
          '"I use logic like salsa: carefully measured, but always present."',
        tag: '🧠',
        jokes: [
          "I don't burn tacos because I understand the science of perfect timing.",
          'My calculator gave up after trying to count how many tacos I can eat.',
          'I studied philosophy just to answer one question: soft taco or crunchy taco?',
          'People call me smart because I bring extra salsa before anyone asks.',
          'I once solved a family argument using math and three burritos.',
          'The secret to happiness is simple: knowledge, confidence, and unlimited guacamole.',
          "My teacher asked for a smart answer, so I said, 'Vacation.'",
          "I read books while eating tacos. That's called balanced education.",
          'Even my sombrero looks intelligent when I wear it.',
          "I don't argue loudly. I calmly destroy people with facts and spicy logic.",
        ],
        gradient: ['#9F4A0A', '#5A2A05'],
        border: '#E6AD4C33',
      },
      {
        key: 'romantic',
        icon: '💕',
        title: 'El Romántico',
        subtitle: 'The Romantic Mexican',
        description: 'Love, passion and tacos wrapped\nin one tender joke',
        quote: '"Love is temporary... tacos together are forever."',
        tag: '❤️',
        jokes: [
          'I gave her flowers and tacos. She said tacos were more romantic.',
          'My love language is sharing the last nacho.',
          "Every sunset looks better when there's mariachi music nearby.",
          'I wrote her a poem, but she only remembered the part about burritos.',
          'She stole my heart faster than I steal chips from the table.',
          "I knew it was true love when she didn't complain about extra onions.",
          'My romantic dinners always include candles and dangerous amounts of salsa.',
          'I tried singing under her window, but her dog became my biggest fan instead.',
          'Love is temporary, but tacos together create memories forever.',
          'She said I was too dramatic, so I played sad guitar for three hours.',
        ],
        gradient: ['#7A1040', '#3D0820'],
        border: '#FF6B9D33',
      },
    ],
    [],
  );

  const chiijokefromemxicnnOpenCategory = (chiijokefromemxicnnCategory: {
    key: string;
    title: string;
    subtitle: string;
    quote: string;
    tag: string;
    icon: string;
    jokes: string[];
  }) => {
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
                  source={require('../../assets/i/chiijokefromemximigl.png')}
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
          {chiijokefromemxicnnCategories.map(chiijokefromemxicnnCategory => (
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
                Math.random() * chiijokefromemxicnnCategories.length,
              );
              const pick = chiijokefromemxicnnCategories[idx];
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
