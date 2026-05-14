import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  saved: boolean;
  onToggleSave: () => void;
  onShare: () => void;
};

const JokeCardActionRow = ({saved, onToggleSave, onShare}: Props) => (
  <View style={styles.actions}>
    <Pressable
      onPress={onToggleSave}
      style={[
        styles.actionBtn,
        saved ? styles.actionBtnSaved : styles.actionBtnIdle,
      ]}>
      <Text style={styles.actionText}>
        {saved ? '🔖 Saved' : '🔖 Save'}
      </Text>
    </Pressable>
    <Pressable
      onPress={onShare}
      style={[styles.actionBtn, styles.shareBtn]}>
      <Text style={styles.actionText}>📤 Share</Text>
    </Pressable>
  </View>
);

export default JokeCardActionRow;

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 14,
  },
  actionBtn: {
    flex: 1,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  actionBtnIdle: {
    backgroundColor: '#FFFFFF12',
    borderColor: '#FFFFFF14',
  },
  actionBtnSaved: {
    backgroundColor: '#E6AD4C33',
    borderColor: '#E6AD4C66',
  },
  shareBtn: {
    backgroundColor: '#600B1A4D',
    borderColor: '#600B1A66',
  },
  actionText: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '600',
  },
});
