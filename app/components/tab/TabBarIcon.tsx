import React from 'react';
import {Image, Text, View, type ImageSourcePropType} from 'react-native';

import {tabBarStyles} from './tabBarStyles';

type TabBarIconProps = {
  focused: boolean;
  source: ImageSourcePropType;
  label: string;
};

const TabBarIcon = ({
  focused,
  source,
  label,
}: TabBarIconProps) => {
  return (
    <View style={tabBarStyles.iconWrap}>
      <View
        style={tabBarStyles.iconImageWrap}>
        {focused ? (
          <Image
            source={require('../../assets/i/chiijokefromemxicsel.png')}
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
          tabBarStyles.label,
          focused
            ? tabBarStyles.labelFocused
            : tabBarStyles.labelIdle,
        ]}>
        {label}
      </Text>
    </View>
  );
};

export default TabBarIcon;
