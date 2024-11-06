import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { ReactNode, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  DEFAULT_GAP,
  DEFAULT_PADDING,
  DEFAULT_RADIUS,
} from "@/constants/globalStyles";

type CardHeaderProps = {
  shopName: ReactNode;
}

export default function CardHeader(shopName: CardHeaderProps) {
  const [isChecked, setIsChecked] = useState(true)

  return (<View style={styles.header}>

    <TouchableOpacity
      style={[styles.checkbox, isChecked && styles.checked]}
      onPress={() => setIsChecked(!isChecked)}
    >
      {
        isChecked ?
          (<FontAwesome name="check" color={"white"} />)
          :
          (<FontAwesome name="check" color={"black"} />)
      }
    </TouchableOpacity>

    <Text style={styles.badge}>Indicado</Text>

    <Text style={styles.shopName}>Oficial Choice</Text>

    <Text style={[styles.badge, { fontWeight: 800 }]}>
      <FontAwesome name="video-camera" color={"white"} />
      LIVE
    </Text>

    <FontAwesome style={{marginLeft: 5}} name="angle-right"/>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: DEFAULT_RADIUS,
    gap: DEFAULT_GAP,
    padding: DEFAULT_PADDING,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 14
  },
  shopName: {
    fontWeight: "bold",
    fontSize: 17,
    marginHorizontal: 4
  },
  badge: {
    fontSize: 8,
    paddingVertical: 0.6,
    paddingHorizontal: 3,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#ED4D2D',
    borderColor: '#ED4D2D',
    color: "white"
  },
  checkbox: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 8,
    borderRadius: 5,
  },
  checked: {
    backgroundColor: '#ED4D2D',
    borderColor: '#ED4D2D'
  },
});