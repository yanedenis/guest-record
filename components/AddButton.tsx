import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '@/constants/Colors';

type Props = {
  buttonTitle: string;
  onPress?: () => void;
}

export default function AddButton({buttonTitle, onPress}: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{buttonTitle}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accent,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  text: {
    fontSize: 18,
    color: colors.text,
  },
})