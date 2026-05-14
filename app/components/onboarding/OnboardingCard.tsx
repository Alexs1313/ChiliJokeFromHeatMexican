import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import type {OnboardingCardContent} from '../../types';

type OnboardingCardProps = OnboardingCardContent;

const OnboardingCard = ({
  chip,
  title,
  subtitle,
  body,
}: OnboardingCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.chip}>
        <Text style={styles.chipText}>{chip}</Text>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

export default OnboardingCard;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 0,
  },
  chip: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#B07A121F',
    borderWidth: 1,
    borderColor: '#B07A1230',
    marginBottom: 12,
    marginTop: 20,
  },
  chipText: {
    color: '#E6AD4C',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 6,
  },
  subtitle: {
    color: '#E6AD4C',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  body: {
    color: '#FFFFFFB8',
    fontSize: 14.5,
    fontWeight: '500',
    lineHeight: 21,
    marginBottom: 14,
  },
});
