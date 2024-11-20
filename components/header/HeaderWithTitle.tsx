import React from 'react'
import { Stack } from 'expo-router'
import HeaderMenu from './HeaderMenu'

type HeaderProps = {
  title: string,
  about: boolean
}

export default function HeaderWithTitle({title, about}: HeaderProps) {

  return (
    <Stack.Screen
      options={{
        title,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 19,
        },
        headerRight: () => about ? (<HeaderMenu about={true}/>) : (<HeaderMenu about={false}/>)
      }}
    />
  )
}