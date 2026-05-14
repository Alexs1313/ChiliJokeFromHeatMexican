import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding' as never);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/i/chiijokefromemxicloadbg.png')}
      style={styles.imageBg}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/i/chiijokefromemxicload.png')}
            style={{width: 200, height: 200, borderRadius: 48}}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    backgroundColor: '#0A1810',
  },
  scrollContent: {
    flexGrow: 1,
  },

  bottomWrap: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  bottomText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'DmSans-Regular',
    marginTop: 11,
    textAlign: 'center',
  },
  webviewDock: {
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20,
  },
});
