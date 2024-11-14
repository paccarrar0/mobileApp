import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React from "react";

import data from "@/services/MOCK_DATA.json";

function getImage(imagePath: string) {
  switch (imagePath) {
    case "@/assets/images/gato-com-fone-de-ouvido-óculos-sol-em-roupas-brilhantes-269060809.webp":
      return require("@/assets/images/gato-com-fone-de-ouvido-óculos-sol-em-roupas-brilhantes-269060809.webp");
    default:
      return require("@/assets/images/i606944.webp");
  }
}

export default function RecentAccessList() {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image style={styles.image} source={getImage(item.imagePath)}></Image>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "46%",
    marginTop: 10,
    margin: "auto",
    
    height: 60,
    borderRadius: 3,
    backgroundColor: "#373737",
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 6
  },
  title: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold"
  }
});