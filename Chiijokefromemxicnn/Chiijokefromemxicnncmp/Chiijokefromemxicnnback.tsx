import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Chiijokefromemxicnnback = ({
  children,
  bounces = true,
}: {
  children: React.ReactNode;
  scrollable?: boolean;
  bounces?: boolean;
}) => {
  return (
    <LinearGradient
      colors={['rgb(49, 8, 12)', 'rgb(21, 2, 2)']}
      style={styles.cozyrabtteacorneercontainer}>
      <ScrollView
        bounces={bounces}
        contentContainerStyle={styles.cozyrabtteacorneerscrollContent}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </LinearGradient>
  );
};

export default Chiijokefromemxicnnback;

const styles = StyleSheet.create({
  cozyrabtteacorneercontainer: {
    flex: 1,
  },
  cozyrabtteacorneerscrollContent: {
    flexGrow: 1,
  },
  cozyrabtteacorneerflexFill: {
    flex: 1,
  },
});
