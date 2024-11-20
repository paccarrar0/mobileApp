import React from 'react'
import { Stack } from 'expo-router'
import HeaderMenu from './HeaderMenu'

type HeaderProps = {
  title: string
}

export default function HeaderWithTitle({title}: HeaderProps) {

  return (
    <Stack.Screen
      options={{
        title,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 19,
        },
        headerRight: () => <HeaderMenu/>
      }}
    />
  )
}