import React from 'react';
import {StyleSheet, View, type StyleProp, type ViewStyle} from 'react-native';

import ChiliGradientButton from './ChiliGradientButton';
import GhostBackButton from './GhostBackButton';

type Props = {
  onShare: () => void;
  onBack: () => void;
  shareLabel: string;
  rowStyle?: StyleProp<ViewStyle>;
};

const ShareResultBackRow = ({
  onShare,
  onBack,
  shareLabel,
  rowStyle,
}: Props) => (
  <View style={[styles.row, rowStyle]}>
    <ChiliGradientButton
      onPress={onShare}
      label={shareLabel}
      containerStyle={styles.shareWrap}
      gradientStyle={styles.shareGradient}
      textStyle={styles.shareText}
    />
    <GhostBackButton onPress={onBack} />
  </View>
);

export default ShareResultBackRow;

const styles = StyleSheet.create({
  row: {
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
