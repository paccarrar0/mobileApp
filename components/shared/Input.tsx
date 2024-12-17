import { View, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'


type InputProps = {
  password: boolean
  placeholder: string
  value: string
  onChangeText: (text: string) => void
}

export default function Input({ password, placeholder, value, onChangeText }: InputProps) {

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        placeholderTextColor={"#0069EF"}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: "#0069EF",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5
  }
});