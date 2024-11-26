import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>A very very chill footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#C4C4C4"
  },
  footerText: {
    fontSize: 15,
    marginHorizontal: "auto"
  }
});