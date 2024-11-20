import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    justifyContent: "center"
  },
  footerText: {
    fontSize: 10,
    marginHorizontal: "auto"
  }
});