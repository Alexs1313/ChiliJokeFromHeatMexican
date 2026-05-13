import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

import Chiijokefromemxicnnjksstak from '../Chiijokefromemxicnnnav/Chiijokefromemxicnnjksstak';
import Chiijokefromemxicnnsvd from '../Chiijokefromemxicnnscrns/Chiijokefromemxicnnsvd';
import Chiijokefromemxicnnrate from '../Chiijokefromemxicnnscrns/Chiijokefromemxicnnrate';
import Chiijokefromemxicnngmp from '../Chiijokefromemxicnnscrns/Chiijokefromemxicnngmp';
import Chiijokefromemxicnnstrsstak from '../Chiijokefromemxicnnnav/Chiijokefromemxicnnstrsstak';

import {chiijokefromemxicnntabStyles} from './chiijokefromemxicnntabstyles';
import {
  chiijokefromemxicnnBarBackground,
  chiijokefromemxicnnIconBlog,
  chiijokefromemxicnnIconMap,
  chiijokefromemxicnnIconPlaces,
  chiijokefromemxicnnIconQuiz,
  chiijokefromemxicnnIconSaved,
  chiijokefromemxicnnTabBarButton,
} from './ChiijokefromemxicnntabTabBarIcons';

const Tab = createBottomTabNavigator();

const Chiijokefromemxicnntab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [chiijokefromemxicnntabStyles.chiijokefromemxicnnBar],
        tabBarActiveTintColor: '#FFFFFF',
        tabBarButton: chiijokefromemxicnnTabBarButton,
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

export default Chiijokefromemxicnntab;
