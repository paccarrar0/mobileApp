import { ReactNode } from "react";
import { StyleSheet, View } from 'react-native';

type FullScreenProps = {
  children: ReactNode;
  center?: boolean;
};

export default function FullScreen({
  children,
  center = false,
}: FullScreenProps) {
  
  return (
    <View style={[styles.container, center ? styles.center : undefined]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});