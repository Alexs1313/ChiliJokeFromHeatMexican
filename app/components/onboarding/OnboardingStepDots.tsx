import React from 'react';
import {StyleSheet, View} from 'react-native';

type OnboardingStepDotsProps = {
  totalSteps: number;
  currentStep: number;
};

const OnboardingStepDots = ({
  totalSteps,
  currentStep,
}: OnboardingStepDotsProps) => {
  return (
    <View style={styles.dots}>
      {Array.from({length: totalSteps}, (_, idx) => (
        <View
          key={idx}
          style={[
            styles.dot,
            idx === currentStep
              ? styles.dotActive
              : styles.dotIdle,
          ]}
        />
      ))}
    </View>
  );
};

export default OnboardingStepDots;

const styles = StyleSheet.create({
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
    marginBottom: 22,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 7,
  },
  dotActive: {
    width: 24,
    backgroundColor: '#9F4A0A',
  },
  dotIdle: {
    backgroundColor: '#FFFFFF2E',
  },
});
