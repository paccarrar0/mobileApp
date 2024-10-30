import { View, Text, StyleSheet } from "react-native";
import React from "react";

type PriceTagProps = {
  price: number;
};

export default function PriceTag({ price }: PriceTagProps) {
  return <Text style={styles.price}>R$ {price.toFixed(2)}</Text>;
}

const styles = StyleSheet.create({
  price: {
    fontWeight: "bold",
    fontSize: 20,
    color: "green",
  },
});
