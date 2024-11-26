import { View, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { useRouter } from 'expo-router';
import { useAuth } from '../../../AuthContext';

type HeaderMenuProps = {
  sheetOptions: string[];
  destructiveButton: number;
}

export default function HeaderMenu({ sheetOptions, destructiveButton }: HeaderMenuProps) {
  const router = useRouter();
  const { logout } = useAuth();

  const { showActionSheetWithOptions } = useActionSheet();

  const handlePress = () => {
    showActionSheetWithOptions({
      options: sheetOptions,
      destructiveButtonIndex: destructiveButton

    },
      (i) => {
        getIndexByScreen(i)
      }
    )
  }

  const handleNavigation = (path: string) => {
    router.navigate(path)
  }

  const getIndexByScreen = (i: number | undefined) => {
    if (sheetOptions.length == 2) {
      switch (i) {
        case 0:
          handleNavigation("/about")
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