import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(128);
  const [isDark, setIsDark] = useState(false);

  const themeColors = isDark
    ? {
        background: '#121212',
        card: '#1E1E1E',
        text: '#FFFFFF',
        muted: '#BBBBBB',
      }
    : {
        background: COLORS.background,
        card: COLORS.card,
        text: COLORS.text,
        muted: COLORS.muted,
      };

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themeColors.background },
      ]}
    >
      <View style={[styles.card, { backgroundColor: themeColors.card }]}>
        {/* Theme Toggle */}
        <TouchableOpacity
          style={styles.themeButton}
          onPress={() => setIsDark(!isDark)}
        >
          <Text style={{ fontSize: 18 }}>
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </Text>
        </TouchableOpacity>

        {/* Avatar */}
        <Image
          source={{ uri: 'https://i.pravatar.cc/150' }}
          style={styles.avatar}
        />

        {/* Info */}
        <Text style={[styles.name, { color: themeColors.text }]}>
          John Doe
        </Text>
        <Text style={[styles.job, { color: themeColors.muted }]}>
          Mobile Developer
        </Text>

        {/* Like Button */}
        <TouchableOpacity style={styles.likeButton} onPress={toggleLike}>
          <Text style={[styles.heart, liked && styles.heartActive]}>
            {liked ? '❤️' : '🤍'}
          </Text>
          <Text style={[styles.likeText, { color: themeColors.text }]}>
            {likes} Likes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: SPACING.lg,
    borderRadius: RADII.lg,
    alignItems: 'center',
    width: 280,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  themeButton: {
    alignSelf: 'flex-end',
    marginBottom: SPACING.md,
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
  },
  job: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    marginTop: SPACING.xs,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.md,
  },
  heart: {
    fontSize: 28,
    marginRight: SPACING.sm,
  },
  heartActive: {
    color: 'red',
  },
  likeText: {
    fontSize: 16,
    fontFamily: FONTS.regular,
  },
});
