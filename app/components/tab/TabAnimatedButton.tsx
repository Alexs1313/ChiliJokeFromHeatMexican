import React, {useRef} from 'react';
import {Animated, Pressable, type ViewStyle} from 'react-native';

import {tabBarStyles} from './tabBarStyles';

const TabAnimatedButton = (
  props: Record<string, unknown>,
) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
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

  const handlePressOut = () => {
    Animated.spring(scale, {
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
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        style as ViewStyle,
        tabBarStyles.button,
      ]}
      {...rest}>
      <Animated.View
        style={[
          tabBarStyles.buttonInner,
          {transform: [{scale: scale}]},
        ]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

export default TabAnimatedButton;
