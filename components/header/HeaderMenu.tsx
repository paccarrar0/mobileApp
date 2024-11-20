import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { useRouter } from 'expo-router';
import { useAuth } from '../../AuthContext';

type HeaderMenuProps = {
  about: boolean
}

export default function HeaderMenu({ about }: HeaderMenuProps) {
  const router = useRouter();
  const { logout } = useAuth();

  const handleNavigation = (path: string) => {
    router.navigate(path)
  }

  const aboutActionSheet = () => {
    if (about)
      return ["Sobre", "Logout"]

    return ["Logout"]
  }

  const { showActionSheetWithOptions } = useActionSheet();

  const handlePress = () => {
    showActionSheetWithOptions({
      options: aboutActionSheet()
    },
      (i) => {
        getIndexByScreen(i)
      }
    )
  }

  const getIndexByScreen = (i: number | undefined) => {
    if (about) {
      switch (i) {
        case 0:
          handleNavigation("/sobre")
          break;
        case 1:
          logout();
          break;
      }
    }
    else {
      switch (i) {
        case 0:
          logout();
          break;
      }
    }
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