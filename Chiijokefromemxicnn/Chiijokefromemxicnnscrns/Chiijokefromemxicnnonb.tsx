import LinearGradient from 'react-native-linear-gradient';

import React, {useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Chiijokefromemxicnnonb = () => {
  const navigation = useNavigation();
  const [chiijokefromemxicnnStep, setChiijokefromemxicnnStep] = useState(0);

  const chiijokefromemxicnnSteps = useMemo(
    () => [
      {
        chip: 'Your Mexican Comedy Companion',
        title: '¡Hola, amigo!',
        subtitle: 'I am Miguel 😃',
        body: 'Welcome to MexiLaughs — the hottest comedy app north AND south of the border! I am Miguel, your guide, your jester, and your spiritual taco advisor.',
        image: require('../../assets/i/chiijokefromemxiconb1.png'),
      },
      {
        chip: 'Jokes by Category',
        title: 'Choose Your Flavor',
        subtitle: '3 Styles of Comedy 🌶️',
        body: 'Pick from El Enojado 😤 (angry jokes), El Sabio 🧠 (smart jokes), or El Romántico 💕 (romantic jokes). Or let fate decide with the Random button!',
        image: require('../../assets/i/chiijokefromemxiconb2.png'),
      },
      {
        chip: 'Joke Rating System',
        title: 'Rate My Jokes',
        subtitle: "Think You're Funny? 😉",
        body: 'Write your best joke and I, Miguel, will personally evaluate it. Maybe you are hilarious. Maybe you are... not. I will tell you honestly — always do.',
        image: require('../../assets/i/chiijokefromemxiconb3.png'),
      },
      {
        chip: 'Multiplayer Mini Game',
        title: '¡Juega con Amigos!',
        subtitle: 'The Party Game 🎮',
        body: 'Gather 3 to 5 friends! Each player finishes a hilarious story, then everyone votes for the funniest ending. May the best comedian win!',
        image: require('../../assets/i/chiijokefromemxiconb4.png'),
      },
      {
        chip: 'Stories & Saved Jokes',
        title: 'Historias Cómicas',
        subtitle: 'Stories & More 📖',
        body: 'Read my legendary funny stories, save your favorite jokes, and share the laughter with everyone you know. The fiesta never stops, amigo!',
        image: require('../../assets/i/chiijokefromemxiconb5.png'),
      },
    ],
    [],
  );

  const chiijokefromemxicnnGoToApp = () => {
    navigation.navigate('Chiijokefromemxicnntab' as never);
  };

  const chiijokefromemxicnnOnNext = () => {
    const next = chiijokefromemxicnnStep + 1;
    if (next >= chiijokefromemxicnnSteps.length) {
      chiijokefromemxicnnGoToApp();
      return;
    }
    setChiijokefromemxicnnStep(next);
  };

  const {chip, title, subtitle, body, image} =
    chiijokefromemxicnnSteps[chiijokefromemxicnnStep]!;

  return (
    <ImageBackground
      source={require('../../assets/i/chiijokefromemxiconbg.png')}
      style={styles.chiijokefromemxicnnRoot}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-end',
          paddingBottom: 40,
        }}>
        <View style={styles.chiijokefromemxicnnTopRow}>
          <View />
          <Pressable
            onPress={chiijokefromemxicnnGoToApp}
            hitSlop={10}
            style={styles.chiijokefromemxicnnSkipBtn}>
            <Text style={styles.chiijokefromemxicnnSkipText}>Skip</Text>
          </Pressable>
        </View>

        <Image
          source={image}
          style={styles.chiijokefromemxicnnHeroImage}
          resizeMode="cover"
        />

        <View style={styles.chiijokefromemxicnnCard}>
          <View style={styles.chiijokefromemxicnnChip}>
            <Text style={styles.chiijokefromemxicnnChipText}>{chip}</Text>
          </View>

          <Text style={styles.chiijokefromemxicnnTitle}>{title}</Text>
          <Text style={styles.chiijokefromemxicnnSubtitle}>{subtitle}</Text>
          <Text style={styles.chiijokefromemxicnnBody}>{body}</Text>

          <View style={styles.chiijokefromemxicnnDots}>
            {chiijokefromemxicnnSteps.map((_, idx) => (
              <View
                key={idx}
                style={[
                  styles.chiijokefromemxicnnDot,
                  idx === chiijokefromemxicnnStep
                    ? styles.chiijokefromemxicnnDotActive
                    : styles.chiijokefromemxicnnDotIdle,
                ]}
              />
            ))}
          </View>

          <View style={styles.chiijokefromemxicnnBtnRow}>
            {chiijokefromemxicnnStep > 0 && (
              <Pressable
                onPress={() =>
                  setChiijokefromemxicnnStep(s => Math.max(0, s - 1))
                }
                style={styles.chiijokefromemxicnnBackBtn}>
                <Text style={styles.chiijokefromemxicnnBackText}>Back</Text>
              </Pressable>
            )}

            <Pressable
              style={{flex: 1}}
              onPress={
                chiijokefromemxicnnStep === chiijokefromemxicnnSteps.length - 1
                  ? chiijokefromemxicnnGoToApp
                  : chiijokefromemxicnnOnNext
              }>
              <LinearGradient
                colors={['#600B1A', '#9F4A0A']}
                style={styles.chiijokefromemxicnnPrimaryBtn}>
                <Text style={styles.chiijokefromemxicnnPrimaryText}>
                  {chiijokefromemxicnnStep ===
                  chiijokefromemxicnnSteps.length - 1
                    ? '¡Vámonos! 🌮'
                    : 'Next →'}
                </Text>
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Chiijokefromemxicnnonb;

const styles = StyleSheet.create({
  chiijokefromemxicnnDot: {
    width: 8,
    height: 8,
    borderRadius: 7,
  },

  chiijokefromemxicnnDotActive: {
    width: 24,
    backgroundColor: '#9F4A0A',
  },
  chiijokefromemxicnnRoot: {
    flex: 1,
  },
  chiijokefromemxicnnTopRow: {
    paddingTop: 8,
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    position: 'absolute',
    zIndex: 5,
    top: 40,
    right: 10,
  },
  chiijokefromemxicnnSkipBtn: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#FFFFFF1F',
    borderWidth: 1,
    borderColor: '#FFFFFF24',
  },
  chiijokefromemxicnnSkipText: {
    color: '#FFFFFFCC',
    fontSize: 14,
    fontWeight: '600',
  },

  chiijokefromemxicnnHeroWrap: {
    flex: 1,
    overflow: 'hidden',
  },
  chiijokefromemxicnnHeroImage: {alignSelf: 'center'},

  chiijokefromemxicnnCard: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 18,
  },
  chiijokefromemxicnnChip: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#B07A121F',
    borderWidth: 1,
    borderColor: '#B07A1230',
    marginBottom: 12,
    marginTop: 20,
  },
  chiijokefromemxicnnChipText: {
    color: '#E6AD4C',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  chiijokefromemxicnnTitle: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 6,
  },
  chiijokefromemxicnnSubtitle: {
    color: '#E6AD4C',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  chiijokefromemxicnnBody: {
    color: '#FFFFFFB8',
    fontSize: 14.5,
    fontWeight: '500',
    lineHeight: 21,
    marginBottom: 14,
  },

  chiijokefromemxicnnDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
    marginBottom: 22,
    marginTop: 20,
  },

  chiijokefromemxicnnDotIdle: {
    backgroundColor: '#FFFFFF2E',
  },

  chiijokefromemxicnnBtnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  chiijokefromemxicnnBackBtnSpacer: {
    flex: 1,
    height: 52,
  },
  chiijokefromemxicnnBackBtn: {
    width: 120,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF14',
    borderWidth: 1,
    borderColor: '#FFFFFF1F',
  },
  chiijokefromemxicnnBackText: {
    color: '#FFFFFFB2',
    fontSize: 16,
    fontWeight: '700',
  },
  chiijokefromemxicnnPrimaryBtn: {
    flex: 2,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7A1E16',
  },
  chiijokefromemxicnnPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  chiijokefromemxicnnBottomSafe: {
    height: 12,
    backgroundColor: '#050505',
  },
});
