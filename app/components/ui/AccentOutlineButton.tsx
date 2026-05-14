import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type Props = {
  onPress: () => void;
  label: string;
};

const AccentOutlineButton = ({onPress, label}: Props) => (
  <Pressable onPress={onPress} style={styles.btn}>
    <Text style={styles.text}>{label}</Text>
  </Pressable>
);

export default AccentOutlineButton;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#E6AD4C1A',
    borderWidth: 1,
    borderColor: '#E6AD4C33',
  },
  text: {
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
});
