import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    setUsername(username);
    setPassword(password);

    console.log("Username: ", username);
    console.log("Password: ", password);

  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Username" onChangeText={text => setUsername(text)}/>
      <TextInput style={styles.textInput} placeholder="Password" onChangeText={text => setPassword(text)} secureTextEntry />
      <Button
        title="Save"
        onPress={login}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 180,
    marginHorizontal: 80,
    gap: 10
  },

  textInput: {
    height: 30,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10
  }

  button: {

  }
});
