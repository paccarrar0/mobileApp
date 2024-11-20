import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { useRouter } from 'expo-router';

export default function HeaderMenu() {

  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.navigate(path)
  }

  const { showActionSheetWithOptions } = useActionSheet();

  const handlePress = () => {
    showActionSheetWithOptions({
      options: ["Sobre", "Logout"]
    },
      (i) => {
        switch (i) {
          case 0:
            handleNavigation("/sobre")
          case 1: 
            handleNavigation("/listagem")
        }
      }
    )
  }

  return (
    <View style={styles.icon}>
      <Pressable onPress={() => handlePress()}>
        <FontAwesome size={22} name={"bars"} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 15
  }
});