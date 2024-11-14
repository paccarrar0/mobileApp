import FullScreen from "@/components/containers/FullScreen";
import Scrollable from "@/components/containers/Scrollable";
import Header from "@/components/Header";
import { Image, StyleSheet, Text, View } from "react-native";
import RecentAccessList from "@/components/containers/RecentAccessList";
import Carousel from "@/components/containers/Carousel";


export default function Index() {
  return (
    <FullScreen>
      <Scrollable>

        <Header>
          <View>
            <Image
              style={styles.profileImage}
              source={require("@/assets/images/i606944.webp")}>
            </Image>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>All</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Music</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Podcast</Text>
          </View>
        </Header>

        <View style={{ marginHorizontal: 12}}>
          <RecentAccessList></RecentAccessList>
        </View>

        <Carousel title="Your top mixes"></Carousel>

      </Scrollable>
    </FullScreen>
  )
}

const styles = StyleSheet.create({
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 100
  },
  badge: {
    alignContent: "space-around",
    backgroundColor: "#373737",
    borderRadius: 50,
    height: 35,
    minWidth: 40,
    padding: 10
  },
  badgeText: {
    color: "white",
    fontSize: 12
  }
});