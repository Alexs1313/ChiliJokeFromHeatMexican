import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type ChiijokefromemxicnnonbprimarybtnProps = {
  label: string;
  onPress: () => void;
};

const Chiijokefromemxicnnonbprimarybtn = ({
  label,
  onPress,
}: ChiijokefromemxicnnonbprimarybtnProps) => {
  return (
    <Pressable style={styles.chiijokefromemxicnnPrimaryWrap} onPress={onPress}>
      <LinearGradient
        colors={['#600B1A', '#9F4A0A']}
        style={styles.chiijokefromemxicnnPrimaryBtn}>
        <Text style={styles.chiijokefromemxicnnPrimaryText}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default Chiijokefromemxicnnonbprimarybtn;

const styles = StyleSheet.create({
  chiijokefromemxicnnPrimaryWrap: {
    flex: 1,
  },
  chiijokefromemxicnnPrimaryBtn: {
    flex: 1,
    minHeight: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7A1E16',
  },
  chiijokefromemxicnnPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
