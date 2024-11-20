import { View, Text, StyleSheet, Button, TextInput, TextInputComponent } from "react-native";
import React, { useEffect } from "react";
import { Stack, useNavigation } from "expo-router";
import { useRouter } from "expo-router";
import Footer from "../components/Footer";
import FullScreen from "../components/container/FullScreen";
import HeaderWithTitle from "../components/header/HeaderWithTitle";
import { useAuth } from "../AuthContext";

export default function index() {
  const router = useRouter();

  return (
    <FullScreen>
      <View>
        <HeaderWithTitle title="Listagem" />
        <View>

          <View style={styles.cardButton}>
            <Button title="Acessar"/>

          </View>
        </View>

      </View>
      <Footer></Footer>
    </FullScreen>

  );
}

const styles = StyleSheet.create({
  cardText: {
    textAlign: "center",
  },

  cardButton: {
    width: "90%",
    marginHorizontal: "auto",
    marginTop: 15,
  },

  card: {
    marginHorizontal: "auto",
    marginVertical: 10,
    width: "75%",
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 7,
    shadowOpacity: 1,
    shadowColor: "black",
  },
});