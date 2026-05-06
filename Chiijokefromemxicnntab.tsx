import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {useRef} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
  type ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Chiijokefromemxicnnjksstak from './Chiijokefromemxicnn/Chiijokefromemxicnnnav/Chiijokefromemxicnnjksstak';
import Chiijokefromemxicnnsvd from './Chiijokefromemxicnn/Chiijokefromemxicnnscrns/Chiijokefromemxicnnsvd';
import Chiijokefromemxicnnrate from './Chiijokefromemxicnn/Chiijokefromemxicnnscrns/Chiijokefromemxicnnrate';
import Chiijokefromemxicnngmp from './Chiijokefromemxicnn/Chiijokefromemxicnnscrns/Chiijokefromemxicnngmp';

import Chiijokefromemxicnnstrsstak from './Chiijokefromemxicnn/Chiijokefromemxicnnnav/Chiijokefromemxicnnstrsstak';

const Tab = createBottomTabNavigator();

const GrnmdlccanadguiidAnimatedButton = (props: Record<string, unknown>) => {
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
      style={[style as ViewStyle, styles.chiijokefromemxicnnButton]}
      {...rest}>
      <Animated.View
        style={[
          styles.chiijokefromemxicnnButtonInner,
          {transform: [{scale: chiijokefromemxicnnScale}]},
        ]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const GrnmdlccanadguiidIcon = ({
  focused,
  source,
  label,
}: {
  focused: boolean;
  source: ImageSourcePropType;
  label: string;
}) => {
  return (
    <View style={styles.chiijokefromemxicnnIconWrap}>
      <View style={styles.chiijokefromemxicnnIconImageWrap}>
        {focused ? (
          <Image
            source={require('./assets/i/chiijokefromemxicsel.png')}
            style={{position: 'absolute', top: -18, right: 4}}
          />
        ) : null}

        <View
          style={{
            width: 36,
            height: 27,
            backgroundColor: focused ? '#E6AD4C1F' : 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Image source={source} style={{width: 22, height: 22}} />
        </View>
      </View>
      <Text
        style={[
          styles.chiijokefromemxicnnLabel,
          focused
            ? styles.chiijokefromemxicnnLabelFocused
            : styles.chiijokefromemxicnnLabelIdle,
        ]}>
        {label}
      </Text>
    </View>
  );
};

const chiijokefromemxicnnBarBackground = () => (
  <LinearGradient
    pointerEvents="none"
    colors={['#0A0203F7', '#0A0203F7']}
    style={StyleSheet.absoluteFill}
  />
);

const chiijokefromemxicnnIconPlaces = ({focused}: {focused: boolean}) => (
  <GrnmdlccanadguiidIcon
    focused={focused}
    label="Jokes"
    source={require('./assets/i/chiijokefromemxicntab1.png')}
  />
);

const chiijokefromemxicnnIconSaved = ({focused}: {focused: boolean}) => (
  <GrnmdlccanadguiidIcon
    focused={focused}
    label="Saved"
    source={require('./assets/i/chiijokefromemxicntab2.png')}
  />
);

const chiijokefromemxicnnIconMap = ({focused}: {focused: boolean}) => (
  <GrnmdlccanadguiidIcon
    focused={focused}
    label="Rate"
    source={require('./assets/i/chiijokefromemxicntab3.png')}
  />
);

const chiijokefromemxicnnIconBlog = ({focused}: {focused: boolean}) => (
  <GrnmdlccanadguiidIcon
    focused={focused}
    label="Game"
    source={require('./assets/i/chiijokefromemxicntab4.png')}
  />
);

const chiijokefromemxicnnIconQuiz = ({focused}: {focused: boolean}) => (
  <GrnmdlccanadguiidIcon
    focused={focused}
    label="Stories"
    source={require('./assets/i/chiijokefromemxicntab5.png')}
  />
);

const chiijokefromemxicnnButton = (props: Record<string, unknown>) => (
  <GrnmdlccanadguiidAnimatedButton {...props} />
);

const Chiijokefromemxicnntab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.chiijokefromemxicnnBar],
        tabBarActiveTintColor: '#FFFFFF',
        tabBarButton: chiijokefromemxicnnButton,
        tabBarBackground: chiijokefromemxicnnBarBackground,
      }}>
      <Tab.Screen
        name="Chiijokefromemxicnnjks"
        component={Chiijokefromemxicnnjksstak}
        options={{
          tabBarIcon: chiijokefromemxicnnIconPlaces,
        }}
      />
      <Tab.Screen
        name="Chiijokefromemxicnnsvd"
        component={Chiijokefromemxicnnsvd}
        options={{
          tabBarIcon: chiijokefromemxicnnIconSaved,
        }}
      />
      <Tab.Screen
        name="Chiijokefromemxicnnrate"
        component={Chiijokefromemxicnnrate}
        options={{
          tabBarIcon: chiijokefromemxicnnIconMap,
        }}
      />
      <Tab.Screen
        name="Chiijokefromemxicnngmp"
        component={Chiijokefromemxicnngmp}
        options={{
          tabBarIcon: chiijokefromemxicnnIconBlog,
        }}
      />
      <Tab.Screen
        name="Chiijokefromemxicnnstrs"
        component={Chiijokefromemxicnnstrsstak}
        options={{
          tabBarIcon: chiijokefromemxicnnIconQuiz,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  chiijokefromemxicnnLabelFocused: {
    color: '#E6AD4C',
    fontSize: 9,
    fontWeight: '700',
    marginTop: 6,
    textAlign: 'center',
  },

  chiijokefromemxicnnIconImageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chiijokefromemxicnnBar: {
    elevation: 0,
    paddingTop: 10,
    justifyContent: 'center',
    position: 'absolute',
    paddingHorizontal: 10,
    borderColor: '#E6AD4C1F',
    borderTopWidth: 1,
    borderTopColor: '#E6AD4C1F',
    backgroundColor: 'transparent',
    height: 90,
    paddingBottom: 20,
    overflow: 'hidden',
  },

  chiijokefromemxicnnButton: {
    flex: 1,
  },
  chiijokefromemxicnnButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  chiijokefromemxicnnIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 54,
  },

  chiijokefromemxicnnIconSel: {
    position: 'absolute',
    top: -6,
  },
  chiijokefromemxicnnIconSelFocused: {
    zIndex: -1,
  },

  chiijokefromemxicnnIconCircle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chiijokefromemxicnnIconCircleFocused: {
    borderWidth: 1,
    borderColor: '#805CB4',
  },
  chiijokefromemxicnnLabel: {
    fontSize: 9,
    fontWeight: '700',
    marginTop: 6,
    textAlign: 'center',
  },
  chiijokefromemxicnnLabelIdle: {
    color: '#FFFFFF59',
  },
});

export default Chiijokefromemxicnntab;
