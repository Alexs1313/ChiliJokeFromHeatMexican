import React from 'react';
import {StyleSheet, View} from 'react-native';

type ChiijokefromemxicnnonbstepdotsProps = {
  totalSteps: number;
  currentStep: number;
};

const Chiijokefromemxicnnonbstepdots = ({
  totalSteps,
  currentStep,
}: ChiijokefromemxicnnonbstepdotsProps) => {
  return (
    <View style={styles.chiijokefromemxicnnDots}>
      {Array.from({length: totalSteps}, (_, idx) => (
        <View
          key={idx}
          style={[
            styles.chiijokefromemxicnnDot,
            idx === currentStep
              ? styles.chiijokefromemxicnnDotActive
              : styles.chiijokefromemxicnnDotIdle,
          ]}
        />
      ))}
    </View>
  );
};

export default Chiijokefromemxicnnonbstepdots;

const styles = StyleSheet.create({
  chiijokefromemxicnnDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
    marginBottom: 22,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  chiijokefromemxicnnDot: {
    width: 8,
    height: 8,
    borderRadius: 7,
  },
  chiijokefromemxicnnDotActive: {
    width: 24,
    backgroundColor: '#9F4A0A',
  },
  chiijokefromemxicnnDotIdle: {
    backgroundColor: '#FFFFFF2E',
  },
});
