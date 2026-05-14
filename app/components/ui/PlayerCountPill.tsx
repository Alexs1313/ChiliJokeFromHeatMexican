import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {chiliGradient} from '../../constants';

type Count = 3 | 4 | 5;

type Props = {
  value: Count;
  selected: boolean;
  onPress: () => void;
};

const PlayerCountPill = ({value, selected, onPress}: Props) => (
  <Pressable style={styles.flex} onPress={onPress}>
    <LinearGradient
      colors={
        selected
          ? [...chiliGradient]
          : ['rgba(255, 255, 255, 0.01)', 'rgba(255, 255, 255, 0.02)']
      }
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={[styles.btn, selected && styles.btnOn]}>
      <Text style={styles.number}>{value}</Text>
      <Text style={styles.label}>players</Text>
    </LinearGradient>
  </Pressable>
);

export default PlayerCountPill;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  btn: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    minHeight: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnOn: {
    backgroundColor: '#7A1E1633',
    borderColor: '#7A1E1640',
  },
  number: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },
  label: {
    marginTop: 4,
    color: '#FFFFFF9E',
    fontSize: 12,
    fontWeight: '400',
  },
});
