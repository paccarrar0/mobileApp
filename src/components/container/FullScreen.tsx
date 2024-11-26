import { ReactNode } from "react";
import { StyleSheet, View } from 'react-native';

type FullScreenProps = {
  children: ReactNode;
};

export default function FullScreen({
  children}: FullScreenProps) {
  
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4C4C4"
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});