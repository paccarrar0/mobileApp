import { View, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import Footer from "../components/shared/Footer";
import FullScreen from "../components/container/FullScreen";
import HeaderWithTitle from "../components/header/HeaderWithTitle";
import { useAuth } from "../../AuthContext";
import Scrollable from "../components/container/Scrollable";
import Card from "../components/container/Card";
import PassengerList from "../components/passengers/PassengersList";




export default function Listing() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        router.replace("/")
      }, 10)
    }
  }), [isAuthenticated, router]

  return (

    <FullScreen>
      <Scrollable>
        <View>
          <HeaderWithTitle title="Listing" sheetOptions={["About", "Logout"]} destructiveButton={1} />
          <View>
            <Text style={styles.cardTitle}>Duty Free</Text>
            <Card>
              <PassengerList />
            </Card>
          </View>
        </View>
      </Scrollable>
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
  cardTitle: {
    marginTop: 30,
    marginBottom: 45,
    alignSelf: "center",
    fontSize: 35
  }
});