import React from 'react';
import {StyleSheet, View} from 'react-native';

import ChiliGradientButton from './ChiliGradientButton';
import FavoriteToggleButton from './FavoriteToggleButton';

type Props = {
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onShare: () => void;
};

const StoryDetailActionRow = ({
  isFavorite,
  onToggleFavorite,
  onShare,
}: Props) => (
  <View style={styles.row}>
    <FavoriteToggleButton
      isFavorite={isFavorite}
      onPress={onToggleFavorite}
      variant="tall"
      activeLabel="★ Unfavorite"
      inactiveLabel="☆ Favorite"
    />
    <ChiliGradientButton
      onPress={onShare}
      label="📤 Share"
      containerStyle={styles.shareWrap}
      gradientStyle={styles.shareGradient}
      textStyle={styles.shareText}
    />
  </View>
);

export default StoryDetailActionRow;

const styles = StyleSheet.create({
  row: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 12,
  },
  shareWrap: {
    flex: 1,
  },
  shareGradient: {
    height: 54,
    borderRadius: 16,
  },
  shareText: {
    fontSize: 14,
    fontWeight: '800',
  },
});
