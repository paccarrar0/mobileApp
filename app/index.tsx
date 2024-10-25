import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();

  const handleNavigation = () => {
    router.navigate("/creativity");
  };

  return (
    <View>
      <Stack.Screen
        options={{
          title: "Home",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          }
        }}
      />
      <View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Falta de criatividade 1</Text>
          <View style={styles.cardButton}>
            <Button title="Acessar" onPress={handleNavigation} />
          </View>
        </View>
      </View>
    </View>
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
