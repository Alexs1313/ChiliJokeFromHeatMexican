import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type JokeFromhtmexhumronbcardContent = {
  chip: string;
  title: string;
  subtitle: string;
  body: string;
};

type JokeFromhtmexhumronbcardProps = JokeFromhtmexhumronbcardContent;

const JokeFromhtmexhumronbcard = ({
  chip,
  title,
  subtitle,
  body,
}: JokeFromhtmexhumronbcardProps) => {
  return (
    <View style={styles.jokefromhtmexhumrCard}>
      <View style={styles.jokefromhtmexhumrChip}>
        <Text style={styles.jokefromhtmexhumrChipText}>{chip}</Text>
      </View>

      <Text style={styles.jokefromhtmexhumrTitle}>{title}</Text>
      <Text style={styles.jokefromhtmexhumrSubtitle}>{subtitle}</Text>
      <Text style={styles.jokefromhtmexhumrBody}>{body}</Text>
    </View>
  );
};

export default JokeFromhtmexhumronbcard;

const styles = StyleSheet.create({
  jokefromhtmexhumrCard: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 0,
  },
  jokefromhtmexhumrChip: {
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
  jokefromhtmexhumrChipText: {
    color: '#E6AD4C',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  jokefromhtmexhumrTitle: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 6,
  },
  jokefromhtmexhumrSubtitle: {
    color: '#E6AD4C',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  jokefromhtmexhumrBody: {
    color: '#FFFFFFB8',
    fontSize: 14.5,
    fontWeight: '500',
    lineHeight: 21,
    marginBottom: 14,
  },
});
