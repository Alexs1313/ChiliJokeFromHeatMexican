import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type OnboardingPrimaryButtonProps = {
  label: string;
  onPress: () => void;
};

const OnboardingPrimaryButton = ({
  label,
  onPress,
}: OnboardingPrimaryButtonProps) => {
  return (
    <Pressable style={styles.primaryWrap} onPress={onPress}>
      <LinearGradient
        colors={['#600B1A', '#9F4A0A']}
        style={styles.primaryBtn}>
        <Text style={styles.primaryText}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default OnboardingPrimaryButton;

const styles = StyleSheet.create({
  primaryWrap: {
    flex: 1,
  },
  primaryBtn: {
    flex: 1,
    minHeight: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7A1E16',
  },
  primaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
