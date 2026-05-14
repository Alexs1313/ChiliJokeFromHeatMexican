import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  onPress: () => void;
};

const FavoritesFirstToggle = ({onPress}: Props) => (
  <Pressable onPress={onPress} style={styles.row}>
    <Text style={styles.star}>⭐</Text>
    <Text style={styles.text}>Favorites shown first</Text>
    <View style={styles.spacer} />
  </Pressable>
);

export default FavoritesFirstToggle;

const styles = StyleSheet.create({
  row: {
    borderRadius: 14,
    backgroundColor: '#E6AD4C14',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    paddingVertical: 13,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },
  star: {
    fontSize: 14,
  },
  text: {
    color: '#E2A63B',
    fontSize: 13,
    fontWeight: '600',
  },
  spacer: {
    flex: 1,
  },
});
