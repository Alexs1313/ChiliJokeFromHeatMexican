import React, {useRef} from 'react';
import {Animated, Pressable, type ViewStyle} from 'react-native';

import {jokefromhtmexhumrtabStyles} from './jokefromhtmexhumrtabstyles';

const JokeFromhtmexhumrtabAnimatedButton = (
  props: Record<string, unknown>,
) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const jokefromhtmexhumrScale = useRef(new Animated.Value(1)).current;

  const jokefromhtmexhumrHandlePressIn = () => {
    Animated.spring(jokefromhtmexhumrScale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const av = new Animated.Value(0);
  av.addListener(() => {
    return;
  });

  const jokefromhtmexhumrHandlePressOut = () => {
    Animated.spring(jokefromhtmexhumrScale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress as () => void}
      onLongPress={onLongPress as (() => void) | undefined}
      onPressIn={jokefromhtmexhumrHandlePressIn}
      onPressOut={jokefromhtmexhumrHandlePressOut}
      style={[
        style as ViewStyle,
        jokefromhtmexhumrtabStyles.jokefromhtmexhumrButton,
      ]}
      {...rest}>
      <Animated.View
        style={[
          jokefromhtmexhumrtabStyles.jokefromhtmexhumrButtonInner,
          {transform: [{scale: jokefromhtmexhumrScale}]},
        ]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

export default JokeFromhtmexhumrtabAnimatedButton;
