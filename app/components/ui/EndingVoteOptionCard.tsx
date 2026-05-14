import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {chiliGradient} from '../../constants';

type Props = {
  index: number;
  text: string;
  isOwn: boolean;
  selected: boolean;
  onPress: () => void;
};

const EndingVoteOptionCard = ({
  index,
  text,
  isOwn,
  selected,
  onPress,
}: Props) => (
  <Pressable
    onPress={onPress}
    style={[
      styles.card,
      selected && styles.cardOn,
      isOwn && styles.cardDisabled,
    ]}>
    <View style={styles.idxPill}>
      <Text style={styles.idxText}>{index + 1}</Text>
    </View>
    <View style={styles.textCol}>
      {isOwn ? (
        <Text style={styles.hint}>
          (Your answer — can’t vote for yourself)
        </Text>
      ) : null}
      <Text style={styles.body}>
        {'"'}
        {text}
        {'"'}
      </Text>
    </View>
    <LinearGradient
      colors={[...chiliGradient]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.thumbPill}>
      <Text style={styles.thumbText}>👍</Text>
    </LinearGradient>
  </Pressable>
);

export default EndingVoteOptionCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    padding: 14,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    minHeight: 90,
  },
  cardOn: {
    borderColor: '#E6AD4C66',
    backgroundColor: '#FFFFFF0F',
  },
  cardDisabled: {
    opacity: 0.35,
  },
  idxPill: {
    width: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: '#7A1E16',
    alignItems: 'center',
    justifyContent: 'center',
  },
  idxText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },
  textCol: {
    flex: 1,
  },
  hint: {
    color: '#FFFFFF70',
    fontSize: 11,
    fontWeight: '400',
    marginBottom: 6,
  },
  body: {
    color: '#FFFFFFD6',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },
  thumbPill: {
    width: 42,
    height: 42,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbText: {
    fontSize: 16,
  },
});
