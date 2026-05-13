import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type JokeFromhtmexhumronbskipbtnProps = {
  onPress: () => void;
};

const JokeFromhtmexhumronbskipbtn = ({
  onPress,
}: JokeFromhtmexhumronbskipbtnProps) => {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={10}
      style={styles.jokefromhtmexhumrSkipBtn}>
      <Text style={styles.jokefromhtmexhumrSkipText}>Skip</Text>
    </Pressable>
  );
};

export default JokeFromhtmexhumronbskipbtn;

const styles = StyleSheet.create({
  jokefromhtmexhumrSkipBtn: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#FFFFFF1F',
    borderWidth: 1,
    borderColor: '#FFFFFF24',
  },
  jokefromhtmexhumrSkipText: {
    color: '#FFFFFFCC',
    fontSize: 14,
    fontWeight: '600',
  },
});
