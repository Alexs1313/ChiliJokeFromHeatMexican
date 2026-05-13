import React from 'react';
import {Image, Text, View, type ImageSourcePropType} from 'react-native';

import {jokefromhtmexhumrtabStyles} from './jokefromhtmexhumrtabstyles';

type JokeFromhtmexhumrtabBarIconProps = {
  focused: boolean;
  source: ImageSourcePropType;
  label: string;
};

const JokeFromhtmexhumrtabBarIcon = ({
  focused,
  source,
  label,
}: JokeFromhtmexhumrtabBarIconProps) => {
  return (
    <View style={jokefromhtmexhumrtabStyles.jokefromhtmexhumrIconWrap}>
      <View
        style={jokefromhtmexhumrtabStyles.jokefromhtmexhumrIconImageWrap}>
        {focused ? (
          <Image
            source={require('../assets/i/chiijokefromemxicsel.png')}
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
          jokefromhtmexhumrtabStyles.jokefromhtmexhumrLabel,
          focused
            ? jokefromhtmexhumrtabStyles.jokefromhtmexhumrLabelFocused
            : jokefromhtmexhumrtabStyles.jokefromhtmexhumrLabelIdle,
        ]}>
        {label}
      </Text>
    </View>
  );
};

export default JokeFromhtmexhumrtabBarIcon;
