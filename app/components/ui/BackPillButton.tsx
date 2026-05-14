import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type Props = {
  onPress: () => void;
  label?: string;
};

const BackPillButton = ({onPress, label = '← Back'}: Props) => (
  <Pressable onPress={onPress} hitSlop={10} style={styles.pill}>
    <Text style={styles.text}>{label}</Text>
  </Pressable>
);

export default BackPillButton;

const styles = StyleSheet.create({
  pill: {
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#FFFFFF10',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    marginBottom: 14,
  },
  text: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '700',
  },
});
