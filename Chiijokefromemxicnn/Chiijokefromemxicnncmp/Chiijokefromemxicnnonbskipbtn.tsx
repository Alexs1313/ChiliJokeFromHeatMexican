import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type ChiijokefromemxicnnonbskipbtnProps = {
  onPress: () => void;
};

const Chiijokefromemxicnnonbskipbtn = ({
  onPress,
}: ChiijokefromemxicnnonbskipbtnProps) => {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={10}
      style={styles.chiijokefromemxicnnSkipBtn}>
      <Text style={styles.chiijokefromemxicnnSkipText}>Skip</Text>
    </Pressable>
  );
};

export default Chiijokefromemxicnnonbskipbtn;

const styles = StyleSheet.create({
  chiijokefromemxicnnSkipBtn: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#FFFFFF1F',
    borderWidth: 1,
    borderColor: '#FFFFFF24',
  },
  chiijokefromemxicnnSkipText: {
    color: '#FFFFFFCC',
    fontSize: 14,
    fontWeight: '600',
  },
});
