import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type OnboardingSkipButtonProps = {
  onPress: () => void;
};

const OnboardingSkipButton = ({
  onPress,
}: OnboardingSkipButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={10}
      style={styles.skipBtn}>
      <Text style={styles.skipText}>Skip</Text>
    </Pressable>
  );
};

export default OnboardingSkipButton;

const styles = StyleSheet.create({
  skipBtn: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#FFFFFF1F',
    borderWidth: 1,
    borderColor: '#FFFFFF24',
  },
  skipText: {
    color: '#FFFFFFCC',
    fontSize: 14,
    fontWeight: '600',
  },
});
