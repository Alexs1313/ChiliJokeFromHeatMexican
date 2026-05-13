import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

import {jokefromhtmexhumrOnbSteps} from '../JokeFromhtmexhumrdata/jokefromhtmexhumrdataonb';
import JokeFromhtmexhumronbcard from '../JokeFromhtmexhumrtonb/JokeFromhtmexhumronbcard';
import JokeFromhtmexhumronbghostbtn from '../JokeFromhtmexhumrtonb/JokeFromhtmexhumronbghostbtn';
import JokeFromhtmexhumronbprimarybtn from '../JokeFromhtmexhumrtonb/JokeFromhtmexhumronbprimarybtn';
import JokeFromhtmexhumronbskipbtn from '../JokeFromhtmexhumrtonb/JokeFromhtmexhumronbskipbtn';
import JokeFromhtmexhumronbstepdots from '../JokeFromhtmexhumrtonb/JokeFromhtmexhumronbstepdots';

const JokeFromhtmexhumronb = () => {
  const navigation = useNavigation();
  const [jokefromhtmexhumrStep, setJokeFromhtmexhumrStep] = useState(0);

  const jokefromhtmexhumrGoToApp = () => {
    navigation.navigate('JokeFromhtmexhumrtab' as never);
  };

  const jokefromhtmexhumrOnNext = () => {
    const next = jokefromhtmexhumrStep + 1;
    if (next >= jokefromhtmexhumrOnbSteps.length) {
      jokefromhtmexhumrGoToApp();
      return;
    }
    setJokeFromhtmexhumrStep(next);
  };

  const {chip, title, subtitle, body, image} =
    jokefromhtmexhumrOnbSteps[jokefromhtmexhumrStep]!;
  const isLastStep =
    jokefromhtmexhumrStep === jokefromhtmexhumrOnbSteps.length - 1;
  const primaryLabel = isLastStep ? '¡Vámonos! 🌮' : 'Next →';

  return (
    <ImageBackground
      source={require('../assets/i/chiijokefromemxiconbg.png')}
      style={styles.jokefromhtmexhumrRoot}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.jokefromhtmexhumrScrollContent}>
        <View style={styles.jokefromhtmexhumrTopRow}>
          <JokeFromhtmexhumronbskipbtn onPress={jokefromhtmexhumrGoToApp} />
        </View>

        <Image
          source={image}
          style={styles.jokefromhtmexhumrHeroImage}
          resizeMode="cover"
        />

        <JokeFromhtmexhumronbcard
          chip={chip}
          title={title}
          subtitle={subtitle}
          body={body}
        />

        <JokeFromhtmexhumronbstepdots
          totalSteps={jokefromhtmexhumrOnbSteps.length}
          currentStep={jokefromhtmexhumrStep}
        />

        <View style={styles.jokefromhtmexhumrFooter}>
          <View style={styles.jokefromhtmexhumrBtnRow}>
            {jokefromhtmexhumrStep > 0 && (
              <JokeFromhtmexhumronbghostbtn
                label="Back"
                onPress={() =>
                  setJokeFromhtmexhumrStep(s => Math.max(0, s - 1))
                }
              />
            )}

            <JokeFromhtmexhumronbprimarybtn
              label={primaryLabel}
              onPress={isLastStep ? jokefromhtmexhumrGoToApp : jokefromhtmexhumrOnNext}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default JokeFromhtmexhumronb;

const styles = StyleSheet.create({
  jokefromhtmexhumrScrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  jokefromhtmexhumrRoot: {
    flex: 1,
  },
  jokefromhtmexhumrTopRow: {
    paddingTop: 8,
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    position: 'absolute',
    zIndex: 5,
    top: 35,
    right: 10,
  },
  jokefromhtmexhumrHeroImage: {alignSelf: 'center', marginTop: 10},
  jokefromhtmexhumrFooter: {
    paddingHorizontal: 20,
    paddingBottom: 18,
  },
  jokefromhtmexhumrBtnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
});
