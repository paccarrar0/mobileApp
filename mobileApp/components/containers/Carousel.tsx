import { View, FlatList, Image, Text, StyleSheet, ImageBackground } from "react-native";

import data from "@/services/MOCK_DATA_CAROUSEL.json";

function getImage(imagePath: string) {
  switch (imagePath) {
    case "@/assets/images/gato-com-fone-de-ouvido-óculos-sol-em-roupas-brilhantes-269060809.webp":
      return require("@/assets/images/gato-com-fone-de-ouvido-óculos-sol-em-roupas-brilhantes-269060809.webp");
    default:
      return require("@/assets/images/i606944.webp");
  }
}

type CaruouselProps = {
  title: string
}

export default function Carousel({ title }: CaruouselProps) {
  return (
    <View>

      <Text style={styles.topMixesText}>{title}</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ImageBackground source={getImage(item.imagePath)}>
            <View style={styles.image}>
              <View style={styles.itemContainer}>
                <Text style={styles.title}>{item.name}</Text>
              </View>
            </View>
          </ImageBackground>
        )}
        horizontal
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
  },
  topMixesText: {
    color: "white",
    marginTop: 18,
    marginBottom: 15,
    marginHorizontal: 12,
    fontSize: 18,
    fontWeight: "bold"
  }
});