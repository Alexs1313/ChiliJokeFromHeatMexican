import React, {useRef} from 'react';
import {Animated, Pressable, type ViewStyle} from 'react-native';

import {chiijokefromemxicnntabStyles} from './chiijokefromemxicnntabstyles';

const ChiijokefromemxicnntabAnimatedButton = (
  props: Record<string, unknown>,
) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const chiijokefromemxicnnScale = useRef(new Animated.Value(1)).current;

  const chiijokefromemxicnnHandlePressIn = () => {
    Animated.spring(chiijokefromemxicnnScale, {
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

  const chiijokefromemxicnnHandlePressOut = () => {
    Animated.spring(chiijokefromemxicnnScale, {
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
      onPressIn={chiijokefromemxicnnHandlePressIn}
      onPressOut={chiijokefromemxicnnHandlePressOut}
      style={[
        style as ViewStyle,
        chiijokefromemxicnntabStyles.chiijokefromemxicnnButton,
      ]}
      {...rest}>
      <Animated.View
        style={[
          chiijokefromemxicnntabStyles.chiijokefromemxicnnButtonInner,
          {transform: [{scale: chiijokefromemxicnnScale}]},
        ]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

export default ChiijokefromemxicnntabAnimatedButton;
