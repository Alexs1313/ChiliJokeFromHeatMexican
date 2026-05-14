import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type OnboardingGhostButtonProps = {
  label: string;
  onPress: () => void;
};

const OnboardingGhostButton = ({
  label,
  onPress,
}: OnboardingGhostButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.backBtn}>
      <Text style={styles.backText}>{label}</Text>
    </Pressable>
  );
};

export default OnboardingGhostButton;

const styles = StyleSheet.create({
  backBtn: {
    width: 120,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF14',
    borderWidth: 1,
    borderColor: '#FFFFFF1F',
  },
  backText: {
    color: '#FFFFFFB2',
    fontSize: 16,
    fontWeight: '700',
  },
});
