import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type ChiijokefromemxicnnonbcardContent = {
  chip: string;
  title: string;
  subtitle: string;
  body: string;
};

type ChiijokefromemxicnnonbcardProps = ChiijokefromemxicnnonbcardContent;

const Chiijokefromemxicnnonbcard = ({
  chip,
  title,
  subtitle,
  body,
}: ChiijokefromemxicnnonbcardProps) => {
  return (
    <View style={styles.chiijokefromemxicnnCard}>
      <View style={styles.chiijokefromemxicnnChip}>
        <Text style={styles.chiijokefromemxicnnChipText}>{chip}</Text>
      </View>

      <Text style={styles.chiijokefromemxicnnTitle}>{title}</Text>
      <Text style={styles.chiijokefromemxicnnSubtitle}>{subtitle}</Text>
      <Text style={styles.chiijokefromemxicnnBody}>{body}</Text>
    </View>
  );
};

export default Chiijokefromemxicnnonbcard;

const styles = StyleSheet.create({
  chiijokefromemxicnnCard: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 0,
  },
  chiijokefromemxicnnChip: {
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
  chiijokefromemxicnnChipText: {
    color: '#E6AD4C',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  chiijokefromemxicnnTitle: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 6,
  },
  chiijokefromemxicnnSubtitle: {
    color: '#E6AD4C',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  chiijokefromemxicnnBody: {
    color: '#FFFFFFB8',
    fontSize: 14.5,
    fontWeight: '500',
    lineHeight: 21,
    marginBottom: 14,
  },
});
