import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  onShare: () => void;
  onRemove: () => void;
};

const SavedJokeCardActions = ({onShare, onRemove}: Props) => (
  <View style={styles.actions}>
    <Pressable onPress={onShare} style={styles.shareBtn}>
      <Text style={styles.shareText}>📤 Share</Text>
    </Pressable>
    <Pressable onPress={onRemove} style={styles.trashBtn}>
      <Text style={styles.trashText}>🗑️</Text>
    </Pressable>
  </View>
);

export default SavedJokeCardActions;

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 14,
  },
  shareBtn: {
    flex: 1,
    height: 43,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#600B1A4D',
    borderWidth: 1,
    borderColor: '#600B1A66',
  },
  shareText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  trashBtn: {
    width: 48,
    height: 43,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3D5A1A',
    borderWidth: 1,
    borderColor: '#FF3D5A33',
  },
  trashText: {
    color: '#FFFFFFB8',
    fontSize: 12,
    fontWeight: '700',
  },
});
