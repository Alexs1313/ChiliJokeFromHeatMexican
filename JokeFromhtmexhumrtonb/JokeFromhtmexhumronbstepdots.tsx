import React from 'react';
import {StyleSheet, View} from 'react-native';

type JokeFromhtmexhumronbstepdotsProps = {
  totalSteps: number;
  currentStep: number;
};

const JokeFromhtmexhumronbstepdots = ({
  totalSteps,
  currentStep,
}: JokeFromhtmexhumronbstepdotsProps) => {
  return (
    <View style={styles.jokefromhtmexhumrDots}>
      {Array.from({length: totalSteps}, (_, idx) => (
        <View
          key={idx}
          style={[
            styles.jokefromhtmexhumrDot,
            idx === currentStep
              ? styles.jokefromhtmexhumrDotActive
              : styles.jokefromhtmexhumrDotIdle,
          ]}
        />
      ))}
    </View>
  );
};

export default JokeFromhtmexhumronbstepdots;

const styles = StyleSheet.create({
  jokefromhtmexhumrDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
    marginBottom: 22,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  jokefromhtmexhumrDot: {
    width: 8,
    height: 8,
    borderRadius: 7,
  },
  jokefromhtmexhumrDotActive: {
    width: 24,
    backgroundColor: '#9F4A0A',
  },
  jokefromhtmexhumrDotIdle: {
    backgroundColor: '#FFFFFF2E',
  },
});
