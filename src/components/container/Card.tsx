import { View, StyleSheet, Text} from "react-native";
import React, { ReactNode} from "react";



type CardProps = {
  title?: string
  children: ReactNode
}

export default function Card({ title, children }: CardProps) {

  return (
    <View style={styles.cardBody}>
      <View style={{ gap: 10 }}>
        <Text style={styles.cardTitle}>{title}</Text>
        <View>{children}</View>
      </View>
    </View>)
}

const styles = StyleSheet.create({
  cardBody: {
    backgroundColor: "#ffffff",
    width: "90%",
    minHeight: 400,
    marginHorizontal: "auto",
    borderRadius: 30
  },
  cardTitle: {
    marginHorizontal: "auto",
    marginTop: 20,
    fontSize: 25
  }
});