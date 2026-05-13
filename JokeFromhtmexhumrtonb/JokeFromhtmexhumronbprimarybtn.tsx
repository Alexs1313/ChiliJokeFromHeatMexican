import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type JokeFromhtmexhumronbprimarybtnProps = {
  label: string;
  onPress: () => void;
};

const JokeFromhtmexhumronbprimarybtn = ({
  label,
  onPress,
}: JokeFromhtmexhumronbprimarybtnProps) => {
  return (
    <Pressable style={styles.jokefromhtmexhumrPrimaryWrap} onPress={onPress}>
      <LinearGradient
        colors={['#600B1A', '#9F4A0A']}
        style={styles.jokefromhtmexhumrPrimaryBtn}>
        <Text style={styles.jokefromhtmexhumrPrimaryText}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default JokeFromhtmexhumronbprimarybtn;

const styles = StyleSheet.create({
  jokefromhtmexhumrPrimaryWrap: {
    flex: 1,
  },
  jokefromhtmexhumrPrimaryBtn: {
    flex: 1,
    minHeight: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7A1E16',
  },
  jokefromhtmexhumrPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
