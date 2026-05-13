import React from 'react';

import ChiijokefromemxicnntabAnimatedButton from './ChiijokefromemxicnntabAnimatedButton';
import ChiijokefromemxicnntabBarBackground from './ChiijokefromemxicnntabBarBackground';
import ChiijokefromemxicnntabBarIcon from './ChiijokefromemxicnntabBarIcon';

export const chiijokefromemxicnnIconPlaces = ({
  focused,
}: {
  focused: boolean;
}) => (
  <ChiijokefromemxicnntabBarIcon
    focused={focused}
    label="Jokes"
    source={require('../assets/i/chiijokefromemxicntab1.png')}
  />
);

export const chiijokefromemxicnnIconSaved = ({focused}: {focused: boolean}) => (
  <ChiijokefromemxicnntabBarIcon
    focused={focused}
    label="Saved"
    source={require('../assets/i/chiijokefromemxicntab2.png')}
  />
);

export const chiijokefromemxicnnIconMap = ({focused}: {focused: boolean}) => (
  <ChiijokefromemxicnntabBarIcon
    focused={focused}
    label="Rate"
    source={require('../assets/i/chiijokefromemxicntab3.png')}
  />
);

export const chiijokefromemxicnnIconBlog = ({focused}: {focused: boolean}) => (
  <ChiijokefromemxicnntabBarIcon
    focused={focused}
    label="Game"
    source={require('../assets/i/chiijokefromemxicntab4.png')}
  />
);

export const chiijokefromemxicnnIconQuiz = ({focused}: {focused: boolean}) => (
  <ChiijokefromemxicnntabBarIcon
    focused={focused}
    label="Stories"
    source={require('../assets/i/chiijokefromemxicntab5.png')}
  />
);

export const chiijokefromemxicnnTabBarButton = (
  props: Record<string, unknown>,
) => <ChiijokefromemxicnntabAnimatedButton {...props} />;

export const chiijokefromemxicnnBarBackground =
  ChiijokefromemxicnntabBarBackground;
