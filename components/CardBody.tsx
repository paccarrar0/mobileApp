import { View, Image, StyleSheet, TouchableOpacity, Text, Touchable } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";


type CardBodyProps = {
  title: string
}

export default function CardBody({ title }: CardBodyProps) {
  const [isChecked, setIsChecked] = useState(true)
  const [selectedValue, setSelectedValue] = useState("SATA Para USB3.0");

  return (
    <View style={{borderBottomWidth: 1, borderColor: "#C7C7C7"}}>
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
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            style={styles.picker}
          >
            <Picker.Item style={{ width: 100 }} label="SATA Para USB3.0" value="SATA Para USB3.0" />
            <Picker.Item label="Python" value="python" />
            <Picker.Item label="C++" value="cpp" />
          </Picker>
          <View style={styles.badge2}><FontAwesome style={{ marginLeft: 4 }} name="fighter-jet" color={"white"} />
            <Text style={{ fontSize: 7, marginLeft: 3, color: "white" }}>FRETE GRÁTIS acima de R$19</Text>
          </View>
          <View style={{ flexDirection: "row"}}>
            <Text style={{ color: "#ED4D2D", fontSize: 12, fontWeight: "bold" }}>R$19,60</Text>
            <Text
              style={{ color: "#C7C7C7", textDecorationLine: "line-through", fontSize: 8, alignContent: "center", marginLeft: 5 }}>
              R$40,83
            </Text>
          </View>
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
  badge2: {
    flexDirection: "row",
    backgroundColor: "#113567",
    width: 130,
    alignItems: "center",
    marginBottom: 15
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
  },
  picker: {
    fontSize: 8,
    height: 20,
    width: 130,
    borderRadius: 5,
    backgroundColor: "#F5F5F5",
    borderColor: "#F5F5F5",
    marginVertical: 5
  }
});