import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

type Props = {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const MaroonGlassButton = ({onPress, label, style, textStyle}: Props) => (
  <Pressable onPress={onPress} style={[styles.btn, style]}>
    <Text style={[styles.text, textStyle]}>{label}</Text>
  </Pressable>
);

export default MaroonGlassButton;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#600B1A4D',
    borderWidth: 1,
    borderColor: '#600B1A66',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
