import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

const Chiijokefromemxicnnload = () => {
  const chiijokefromemxicnnNavigation = useNavigation();

  useEffect(() => {
    const chiijokefromemxicnnTimer = setTimeout(() => {
      chiijokefromemxicnnNavigation.navigate('Chiijokefromemxicnnonb' as never);
    }, 6000);

    return () => {
      clearTimeout(chiijokefromemxicnnTimer);
    };
  }, [chiijokefromemxicnnNavigation]);

  return (
    <ImageBackground
      source={require('../../assets/i/chiijokefromemxicloadbg.png')}
      style={styles.chiijokefromemxicnnimageBg}>
      <ScrollView
        contentContainerStyle={styles.chiijokefromemxicnnscrollContent}
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

export default Chiijokefromemxicnnload;

const styles = StyleSheet.create({
  chiijokefromemxicnnimageBg: {
    flex: 1,
    backgroundColor: '#0A1810',
  },
  chiijokefromemxicnnscrollContent: {
    flexGrow: 1,
  },

  chiijokefromemxicnnbottomWrap: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  chiijokefromemxicnnbottomText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'DmSans-Regular',
    marginTop: 11,
    textAlign: 'center',
  },
  chiijokefromemxicnnwebviewDock: {
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20,
  },
});
