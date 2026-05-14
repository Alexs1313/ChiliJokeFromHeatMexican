import React from 'react';
import {Pressable, StyleSheet, Text, type StyleProp, type ViewStyle} from 'react-native';

type Props = {
  onPress: () => void;
  label?: string;
  style?: StyleProp<ViewStyle>;
};

const GhostBackButton = ({
  onPress,
  label = 'Back',
  style,
}: Props) => (
  <Pressable onPress={onPress} style={[styles.btn, style]}>
    <Text style={styles.text}>{label}</Text>
  </Pressable>
);

export default GhostBackButton;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF12',
    borderWidth: 1,
    borderColor: '#FFFFFF1A',
  },
  text: {
    color: '#FFFFFFCC',
    fontSize: 14,
    fontWeight: '800',
  },
});
