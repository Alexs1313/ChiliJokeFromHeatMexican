import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import {chiliGradient} from '../../constants';

type Props = {
  onPress: () => void;
  label: string;
  disabled?: boolean;
  /** Opacity when disabled (default 0.55). */
  disabledOpacity?: number;
  containerStyle?: StyleProp<ViewStyle>;
  gradientStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const ChiliGradientButton = ({
  onPress,
  label,
  disabled,
  disabledOpacity = 0.55,
  containerStyle,
  gradientStyle,
  textStyle,
}: Props) => (
  <Pressable
    onPress={onPress}
    disabled={disabled}
    style={containerStyle}>
    <LinearGradient
      colors={[...chiliGradient]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={[
        styles.gradient,
        disabled && {opacity: disabledOpacity},
        gradientStyle,
      ]}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </LinearGradient>
  </Pressable>
);

export default ChiliGradientButton;

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7A1E16',
    borderWidth: 1,
    borderColor: '#7A1E1640',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
});
