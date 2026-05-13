import React from 'react';
import {Image, Text, View, type ImageSourcePropType} from 'react-native';

import {chiijokefromemxicnntabStyles} from './chiijokefromemxicnntabstyles';

type ChiijokefromemxicnntabBarIconProps = {
  focused: boolean;
  source: ImageSourcePropType;
  label: string;
};

const ChiijokefromemxicnntabBarIcon = ({
  focused,
  source,
  label,
}: ChiijokefromemxicnntabBarIconProps) => {
  return (
    <View style={chiijokefromemxicnntabStyles.chiijokefromemxicnnIconWrap}>
      <View
        style={chiijokefromemxicnntabStyles.chiijokefromemxicnnIconImageWrap}>
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
          chiijokefromemxicnntabStyles.chiijokefromemxicnnLabel,
          focused
            ? chiijokefromemxicnntabStyles.chiijokefromemxicnnLabelFocused
            : chiijokefromemxicnntabStyles.chiijokefromemxicnnLabelIdle,
        ]}>
        {label}
      </Text>
    </View>
  );
};

export default ChiijokefromemxicnntabBarIcon;
