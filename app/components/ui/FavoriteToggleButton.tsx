import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type Variant = 'compact' | 'tall';

type Props = {
  isFavorite: boolean;
  onPress: () => void;
  variant?: Variant;
  activeLabel?: string;
  inactiveLabel?: string;
};

const FavoriteToggleButton = ({
  isFavorite,
  onPress,
  variant = 'compact',
  activeLabel = '★ Favorited',
  inactiveLabel = '☆ Favorite',
}: Props) => {
  const v = variant === 'tall' ? styles.tall : styles.compact;
  const ghostBase =
    variant === 'tall' ? styles.ghostTall : styles.ghostCompact;
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.base,
        v,
        ghostBase,
        isFavorite && styles.ghostOn,
      ]}>
      <Text style={variant === 'tall' ? styles.textTall : styles.textCompact}>
        {isFavorite ? activeLabel : inactiveLabel}
      </Text>
    </Pressable>
  );
};

export default FavoriteToggleButton;

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  compact: {
    height: 44,
    borderRadius: 14,
  },
  tall: {
    height: 54,
    borderRadius: 16,
  },
  ghostCompact: {
    backgroundColor: '#FFFFFF0F',
    borderColor: '#FFFFFF14',
  },
  ghostTall: {
    backgroundColor: '#FFFFFF12',
    borderColor: '#FFFFFF1A',
  },
  ghostOn: {
    backgroundColor: '#E6AD4C33',
    borderColor: '#E6AD4C66',
  },
  textCompact: {
    color: '#FFFFFFCC',
    fontSize: 13,
    fontWeight: '600',
  },
  textTall: {
    color: '#FFFFFFCC',
    fontSize: 14,
    fontWeight: '800',
  },
});
