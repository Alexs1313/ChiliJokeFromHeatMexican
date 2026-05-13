import React from 'react';

import JokeFromhtmexhumrtabAnimatedButton from './JokeFromhtmexhumrtabAnimatedButton';
import JokeFromhtmexhumrtabBarBackground from './JokeFromhtmexhumrtabBarBackground';
import JokeFromhtmexhumrtabBarIcon from './JokeFromhtmexhumrtabBarIcon';

export const jokefromhtmexhumrIconPlaces = ({
  focused,
}: {
  focused: boolean;
}) => (
  <JokeFromhtmexhumrtabBarIcon
    focused={focused}
    label="Jokes"
    source={require('../assets/i/chiijokefromemxicntab1.png')}
  />
);

export const jokefromhtmexhumrIconSaved = ({focused}: {focused: boolean}) => (
  <JokeFromhtmexhumrtabBarIcon
    focused={focused}
    label="Saved"
    source={require('../assets/i/chiijokefromemxicntab2.png')}
  />
);

export const jokefromhtmexhumrIconMap = ({focused}: {focused: boolean}) => (
  <JokeFromhtmexhumrtabBarIcon
    focused={focused}
    label="Rate"
    source={require('../assets/i/chiijokefromemxicntab3.png')}
  />
);

export const jokefromhtmexhumrIconBlog = ({focused}: {focused: boolean}) => (
  <JokeFromhtmexhumrtabBarIcon
    focused={focused}
    label="Game"
    source={require('../assets/i/chiijokefromemxicntab4.png')}
  />
);

export const jokefromhtmexhumrIconQuiz = ({focused}: {focused: boolean}) => (
  <JokeFromhtmexhumrtabBarIcon
    focused={focused}
    label="Stories"
    source={require('../assets/i/chiijokefromemxicntab5.png')}
  />
);

export const jokefromhtmexhumrTabBarButton = (
  props: Record<string, unknown>,
) => <JokeFromhtmexhumrtabAnimatedButton {...props} />;

export const jokefromhtmexhumrBarBackground =
  JokeFromhtmexhumrtabBarBackground;
