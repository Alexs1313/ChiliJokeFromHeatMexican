import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type ChiijokefromemxicnnonbghostbtnProps = {
  label: string;
  onPress: () => void;
};

const Chiijokefromemxicnnonbghostbtn = ({
  label,
  onPress,
}: ChiijokefromemxicnnonbghostbtnProps) => {
  return (
    <Pressable onPress={onPress} style={styles.chiijokefromemxicnnBackBtn}>
      <Text style={styles.chiijokefromemxicnnBackText}>{label}</Text>
    </Pressable>
  );
};

export default Chiijokefromemxicnnonbghostbtn;

const styles = StyleSheet.create({
  chiijokefromemxicnnBackBtn: {
    width: 120,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF14',
    borderWidth: 1,
    borderColor: '#FFFFFF1F',
  },
  chiijokefromemxicnnBackText: {
    color: '#FFFFFFB2',
    fontSize: 16,
    fontWeight: '700',
  },
});
