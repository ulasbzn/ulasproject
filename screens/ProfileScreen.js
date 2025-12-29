import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150' }}
          style={styles.avatar}
        />

        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.job}>Mobile Developer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: COLORS.card,
    padding: SPACING.lg,
    borderRadius: RADII.lg,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: SPACING.md,
  },
  name: {
    fontSize: 22,
    fontFamily: FONTS.bold,
    color: COLORS.text,
  },
  job: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.muted,
    marginTop: SPACING.xs,
  },
});
