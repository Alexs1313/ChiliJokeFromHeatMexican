import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

const JokeFromhtmexhumrload = () => {
  const jokefromhtmexhumrNavigation = useNavigation();

  useEffect(() => {
    const jokefromhtmexhumrTimer = setTimeout(() => {
      jokefromhtmexhumrNavigation.navigate('JokeFromhtmexhumronb' as never);
    }, 6000);

    return () => {
      clearTimeout(jokefromhtmexhumrTimer);
    };
  }, [jokefromhtmexhumrNavigation]);

  return (
    <ImageBackground
      source={require('../assets/i/chiijokefromemxicloadbg.png')}
      style={styles.jokefromhtmexhumrimageBg}>
      <ScrollView
        contentContainerStyle={styles.jokefromhtmexhumrscrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../assets/i/chiijokefromemxicload.png')}
            style={{width: 200, height: 200, borderRadius: 48}}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default JokeFromhtmexhumrload;

const styles = StyleSheet.create({
  jokefromhtmexhumrimageBg: {
    flex: 1,
    backgroundColor: '#0A1810',
  },
  jokefromhtmexhumrscrollContent: {
    flexGrow: 1,
  },

  jokefromhtmexhumrbottomWrap: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  jokefromhtmexhumrbottomText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'DmSans-Regular',
    marginTop: 11,
    textAlign: 'center',
  },
  jokefromhtmexhumrwebviewDock: {
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20,
  },
});
