import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {onboardingSteps} from '../data/onboardingSteps';
import OnboardingCard from '../components/onboarding/OnboardingCard';
import OnboardingGhostButton from '../components/onboarding/OnboardingGhostButton';
import OnboardingPrimaryButton from '../components/onboarding/OnboardingPrimaryButton';
import OnboardingSkipButton from '../components/onboarding/OnboardingSkipButton';
import OnboardingStepDots from '../components/onboarding/OnboardingStepDots';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [step, setstep] = useState(0);

  const goToApp = () => {
    navigation.navigate('MainTabs' as never);
  };

  const onNext = () => {
    const next = step + 1;
    if (next >= onboardingSteps.length) {
      goToApp();
      return;
    }
    setstep(next);
  };

  const {chip, title, subtitle, body, image} =
    onboardingSteps[step]!;
  const isLastStep =
    step === onboardingSteps.length - 1;
  const primaryLabel = isLastStep ? '¡Vámonos! 🌮' : 'Next →';

  return (
    <ImageBackground
      source={require('../assets/i/chiijokefromemxiconbg.png')}
      style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <OnboardingSkipButton onPress={goToApp} />
        </View>

        <Image
          source={image}
          style={styles.heroImage}
          resizeMode="cover"
        />

        <OnboardingCard
          chip={chip}
          title={title}
          subtitle={subtitle}
          body={body}
        />

        <OnboardingStepDots
          totalSteps={onboardingSteps.length}
          currentStep={step}
        />

        <View style={styles.footer}>
          <View style={styles.btnRow}>
            {step > 0 && (
              <OnboardingGhostButton
                label="Back"
                onPress={() =>
                  setstep(s => Math.max(0, s - 1))
                }
              />
            )}

            <OnboardingPrimaryButton
              label={primaryLabel}
              onPress={
                isLastStep ? goToApp : onNext
              }
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  root: {
    flex: 1,
  },
  topRow: {
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
  heroImage: {alignSelf: 'center', marginTop: 10},
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 18,
  },
  btnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
});
