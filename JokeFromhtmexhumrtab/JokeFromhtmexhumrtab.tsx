import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

import JokeFromhtmexhumrjksstak from '../JokeFromhtmexhumrnav/JokeFromhtmexhumrjksstak';
import JokeFromhtmexhumrsvd from '../JokeFromhtmexhumrscrns/JokeFromhtmexhumrsvd';
import JokeFromhtmexhumrrate from '../JokeFromhtmexhumrscrns/JokeFromhtmexhumrrate';
import JokeFromhtmexhumrgmp from '../JokeFromhtmexhumrscrns/JokeFromhtmexhumrgmp';
import JokeFromhtmexhumrstrsstak from '../JokeFromhtmexhumrnav/JokeFromhtmexhumrstrsstak';

import {jokefromhtmexhumrtabStyles} from './jokefromhtmexhumrtabstyles';
import {
  jokefromhtmexhumrBarBackground,
  jokefromhtmexhumrIconBlog,
  jokefromhtmexhumrIconMap,
  jokefromhtmexhumrIconPlaces,
  jokefromhtmexhumrIconQuiz,
  jokefromhtmexhumrIconSaved,
  jokefromhtmexhumrTabBarButton,
} from './JokeFromhtmexhumrtabTabBarIcons';

const Tab = createBottomTabNavigator();

const JokeFromhtmexhumrtab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [jokefromhtmexhumrtabStyles.jokefromhtmexhumrBar],
        tabBarActiveTintColor: '#FFFFFF',
        tabBarButton: jokefromhtmexhumrTabBarButton,
        tabBarBackground: jokefromhtmexhumrBarBackground,
      }}>
      <Tab.Screen
        name="JokeFromhtmexhumrjks"
        component={JokeFromhtmexhumrjksstak}
        options={{
          tabBarIcon: jokefromhtmexhumrIconPlaces,
        }}
      />
      <Tab.Screen
        name="JokeFromhtmexhumrsvd"
        component={JokeFromhtmexhumrsvd}
        options={{
          tabBarIcon: jokefromhtmexhumrIconSaved,
        }}
      />
      <Tab.Screen
        name="JokeFromhtmexhumrrate"
        component={JokeFromhtmexhumrrate}
        options={{
          tabBarIcon: jokefromhtmexhumrIconMap,
        }}
      />
      <Tab.Screen
        name="JokeFromhtmexhumrgmp"
        component={JokeFromhtmexhumrgmp}
        options={{
          tabBarIcon: jokefromhtmexhumrIconBlog,
        }}
      />
      <Tab.Screen
        name="JokeFromhtmexhumrstrs"
        component={JokeFromhtmexhumrstrsstak}
        options={{
          tabBarIcon: jokefromhtmexhumrIconQuiz,
        }}
      />
    </Tab.Navigator>
  );
};

export default JokeFromhtmexhumrtab;
