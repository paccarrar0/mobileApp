import { View, Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import {
  DEFAULT_GAP,
  DEFAULT_PADDING,
  DEFAULT_RADIUS,
} from "@/constants/globalStyles";

type CardProps = {
  title: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: DEFAULT_RADIUS,
    gap: DEFAULT_GAP,
    padding: DEFAULT_PADDING,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
