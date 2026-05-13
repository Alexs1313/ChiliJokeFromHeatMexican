import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

import {chiijokefromemxicnnOnbSteps} from '../Chiijokefromemxicnndata/chiijokefromemxicnndataonb';
import Chiijokefromemxicnnonbcard from '../Chiijokefromemxicnntonb/Chiijokefromemxicnnonbcard';
import Chiijokefromemxicnnonbghostbtn from '../Chiijokefromemxicnntonb/Chiijokefromemxicnnonbghostbtn';
import Chiijokefromemxicnnonbprimarybtn from '../Chiijokefromemxicnntonb/Chiijokefromemxicnnonbprimarybtn';
import Chiijokefromemxicnnonbskipbtn from '../Chiijokefromemxicnntonb/Chiijokefromemxicnnonbskipbtn';
import Chiijokefromemxicnnonbstepdots from '../Chiijokefromemxicnntonb/Chiijokefromemxicnnonbstepdots';

const Chiijokefromemxicnnonb = () => {
  const navigation = useNavigation();
  const [chiijokefromemxicnnStep, setChiijokefromemxicnnStep] = useState(0);

  const chiijokefromemxicnnGoToApp = () => {
    navigation.navigate('Chiijokefromemxicnntab' as never);
  };

  const chiijokefromemxicnnOnNext = () => {
    const next = chiijokefromemxicnnStep + 1;
    if (next >= chiijokefromemxicnnOnbSteps.length) {
      chiijokefromemxicnnGoToApp();
      return;
    }
    setChiijokefromemxicnnStep(next);
  };

  const {chip, title, subtitle, body, image} =
    chiijokefromemxicnnOnbSteps[chiijokefromemxicnnStep]!;
  const isLastStep =
    chiijokefromemxicnnStep === chiijokefromemxicnnOnbSteps.length - 1;
  const primaryLabel = isLastStep ? '¡Vámonos! 🌮' : 'Next →';

  return (
    <ImageBackground
      source={require('../assets/i/chiijokefromemxiconbg.png')}
      style={styles.chiijokefromemxicnnRoot}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.chiijokefromemxicnnScrollContent}>
        <View style={styles.chiijokefromemxicnnTopRow}>
          <Chiijokefromemxicnnonbskipbtn onPress={chiijokefromemxicnnGoToApp} />
        </View>

        <Image
          source={image}
          style={styles.chiijokefromemxicnnHeroImage}
          resizeMode="cover"
        />

        <Chiijokefromemxicnnonbcard
          chip={chip}
          title={title}
          subtitle={subtitle}
          body={body}
        />

        <Chiijokefromemxicnnonbstepdots
          totalSteps={chiijokefromemxicnnOnbSteps.length}
          currentStep={chiijokefromemxicnnStep}
        />

        <View style={styles.chiijokefromemxicnnFooter}>
          <View style={styles.chiijokefromemxicnnBtnRow}>
            {chiijokefromemxicnnStep > 0 && (
              <Chiijokefromemxicnnonbghostbtn
                label="Back"
                onPress={() =>
                  setChiijokefromemxicnnStep(s => Math.max(0, s - 1))
                }
              />
            )}

            <Chiijokefromemxicnnonbprimarybtn
              label={primaryLabel}
              onPress={isLastStep ? chiijokefromemxicnnGoToApp : chiijokefromemxicnnOnNext}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Chiijokefromemxicnnonb;

const styles = StyleSheet.create({
  chiijokefromemxicnnScrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
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
    top: 35,
    right: 10,
  },
  chiijokefromemxicnnHeroImage: {alignSelf: 'center', marginTop: 10},
  chiijokefromemxicnnFooter: {
    paddingHorizontal: 20,
    paddingBottom: 18,
  },
  chiijokefromemxicnnBtnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
});
