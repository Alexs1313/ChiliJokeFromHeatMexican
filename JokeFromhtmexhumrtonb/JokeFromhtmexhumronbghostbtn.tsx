import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type JokeFromhtmexhumronbghostbtnProps = {
  label: string;
  onPress: () => void;
};

const JokeFromhtmexhumronbghostbtn = ({
  label,
  onPress,
}: JokeFromhtmexhumronbghostbtnProps) => {
  return (
    <Pressable onPress={onPress} style={styles.jokefromhtmexhumrBackBtn}>
      <Text style={styles.jokefromhtmexhumrBackText}>{label}</Text>
    </Pressable>
  );
};

export default JokeFromhtmexhumronbghostbtn;

const styles = StyleSheet.create({
  jokefromhtmexhumrBackBtn: {
    width: 120,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF14',
    borderWidth: 1,
    borderColor: '#FFFFFF1F',
  },
  jokefromhtmexhumrBackText: {
    color: '#FFFFFFB2',
    fontSize: 16,
    fontWeight: '700',
  },
});
