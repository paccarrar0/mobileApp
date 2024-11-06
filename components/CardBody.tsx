import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";


type CardBodyProps = {
  title: string
}

export default function CardBody({ title }: CardBodyProps) {
  const [isChecked, setIsChecked] = useState(true)
  const [selectedValue, setSelectedValue] = useState("")

  return (
    <View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={[styles.checkbox, isChecked && styles.checked]}
            onPress={() => setIsChecked(!isChecked)}
          >
            {
              isChecked ?
                (<FontAwesome name="check" size={10} color={"white"} />)
                :
                (<FontAwesome name="check" size={10} color={"black"} />)
            }
          </TouchableOpacity>

          <Image
            source={require('../assets/images/D_NQ_NP_650868-MLB31714899722_082019-O.webp')}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          
        </View>
      </View>
    </View>)
}

const styles = StyleSheet.create({
  title: {
    fontSize: 8.5
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 5
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
  text: {
    fontSize: 16,
  },
  dropdownStyle: {
    width: 150,
  },
  checked: {
    backgroundColor: '#ED4D2D',
    borderColor: '#ED4D2D'
  },
  dropdown: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  }
});

const pickerSelectStyles = StyleSheet.create({
  input: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // adiciona espaço para o ícone do dropdown
  },
});