import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 80,
    flex: 1,
  },
  logoContainer: {
    width: 200,
    height: 150,
    marginTop: 100
  },
  logo: {
    width: "100%",
    height: "100%"
  },
  inputBlock: {
    width: "60%",
    marginTop: 20,
    marginBottom: 20,
    gap: 15
  },
  errorText: {
    color: "red"
  }
})

export default loginStyles