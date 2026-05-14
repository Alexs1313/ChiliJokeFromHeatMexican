import React from 'react';

import TabAnimatedButton from './TabAnimatedButton';
import TabBarBackground from './TabBarBackground';
import TabBarIcon from './TabBarIcon';

export const tabIconJokes = ({
  focused,
}: {
  focused: boolean;
}) => (
  <TabBarIcon
    focused={focused}
    label="Jokes"
    source={require('../../assets/i/chiijokefromemxicntab1.png')}
  />
);

export const tabIconSaved = ({focused}: {focused: boolean}) => (
  <TabBarIcon
    focused={focused}
    label="Saved"
    source={require('../../assets/i/chiijokefromemxicntab2.png')}
  />
);

export const tabIconRate = ({focused}: {focused: boolean}) => (
  <TabBarIcon
    focused={focused}
    label="Rate"
    source={require('../../assets/i/chiijokefromemxicntab3.png')}
  />
);

export const tabIconGame = ({focused}: {focused: boolean}) => (
  <TabBarIcon
    focused={focused}
    label="Game"
    source={require('../../assets/i/chiijokefromemxicntab4.png')}
  />
);

export const tabIconStories = ({focused}: {focused: boolean}) => (
  <TabBarIcon
    focused={focused}
    label="Stories"
    source={require('../../assets/i/chiijokefromemxicntab5.png')}
  />
);

export const tabBarButton = (
  props: Record<string, unknown>,
) => <TabAnimatedButton {...props} />;

export const tabBarBackground =
  TabBarBackground;
