import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type Props = {
  onPress: () => void;
  label: string;
  disabled?: boolean;
};

const SolidChiliButton = ({onPress, label, disabled}: Props) => (
  <Pressable
    onPress={onPress}
    disabled={disabled}
    style={[
      styles.btn,
      disabled && styles.btnDisabled,
    ]}>
    <Text style={styles.text}>{label}</Text>
  </Pressable>
);

export default SolidChiliButton;

const styles = StyleSheet.create({
  btn: {
    marginTop: 16,
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7A1E16',
    borderWidth: 1,
    borderColor: '#7A1E1640',
  },
  btnDisabled: {
    opacity: 0.35,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
});
