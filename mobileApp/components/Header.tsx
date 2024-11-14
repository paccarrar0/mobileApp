import { ReactNode } from "react"
import { StyleSheet, View } from "react-native";

type HeaderProps = {
  children: ReactNode
}

export default function Header({ children }: HeaderProps) {

  return (
    <View style={styles.header}>{children}</View>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 25,
    paddingHorizontal: 12,
    marginBottom: 10
  }
});