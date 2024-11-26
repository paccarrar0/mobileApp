import { ReactNode } from "react"
import { StyleSheet, View } from "react-native"
import { ScrollView } from "react-native"

type ScrollableProps = {
  children: ReactNode
}

export default function Scrollable({ children }: ScrollableProps) {
  return (
    <ScrollView>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});