import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

import JokesStack from '../../navigation/JokesStack';
import SavedJokesScreen from '../../screens/SavedJokesScreen';
import RateJokeScreen from '../../screens/RateJokeScreen';
import GroupGameScreen from '../../screens/GroupGameScreen';
import StoriesStack from '../../navigation/StoriesStack';

import {tabBarStyles} from './tabBarStyles';
import {
  tabBarBackground,
  tabIconGame,
  tabIconRate,
  tabIconJokes,
  tabIconStories,
  tabIconSaved,
  tabBarButton,
} from './TabBarIcons';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [tabBarStyles.bar],
        tabBarActiveTintColor: '#FFFFFF',
        tabBarButton: tabBarButton,
        tabBarBackground: tabBarBackground,
      }}>
      <Tab.Screen
        name="Jokes"
        component={JokesStack}
        options={{
          tabBarIcon: tabIconJokes,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedJokesScreen}
        options={{
          tabBarIcon: tabIconSaved,
        }}
      />
      <Tab.Screen
        name="Rate"
        component={RateJokeScreen}
        options={{
          tabBarIcon: tabIconRate,
        }}
      />
      <Tab.Screen
        name="Game"
        component={GroupGameScreen}
        options={{
          tabBarIcon: tabIconGame,
        }}
      />
      <Tab.Screen
        name="Stories"
        component={StoriesStack}
        options={{
          tabBarIcon: tabIconStories,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
