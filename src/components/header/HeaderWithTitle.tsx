import React from 'react'
import { Stack } from 'expo-router'
import HeaderMenu from './HeaderMenu'

type HeaderProps = {
  title: string,
  sheetOptions: string[],
  destructiveButton: number
}

export default function HeaderWithTitle({ title, sheetOptions, destructiveButton}: HeaderProps) {

  return (
    <Stack.Screen
      options={{
        title,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 19,
        },
        headerRight: () => 
          
        (<HeaderMenu sheetOptions={sheetOptions} destructiveButton={destructiveButton}/>) 
        
      }}
    />
  )
}