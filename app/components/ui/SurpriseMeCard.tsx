import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  onPress: () => void;
};

const SurpriseMeCard = ({onPress}: Props) => (
  <View style={styles.outer}>
    <Pressable onPress={onPress} style={styles.btn}>
      <Text style={styles.dice}>🎲</Text>
      <View>
        <Text style={styles.title}>Surprise Me!</Text>
        <Text style={styles.subtitle}>
          Discover a joke from any category
        </Text>
      </View>
    </Pressable>
  </View>
);

export default SurpriseMeCard;

const styles = StyleSheet.create({
  outer: {
    marginTop: 16,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#B07A1230',
  },
  btn: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: '#0A0707',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dice: {
    fontSize: 22,
  },
  title: {
    color: '#E2A63B',
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 4,
    color: '#FFFFFF9E',
    fontSize: 12.5,
    fontWeight: '500',
  },
});
