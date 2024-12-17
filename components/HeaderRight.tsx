import { useRouter } from "expo-router";
import { Alert, Text, View } from "react-native";

import useAuth from "../firebase/hooks/useAuth";
import { Picker } from '@react-native-picker/picker';
import SimpleButton from "./shared/SimpleButton";

export default function HeaderRight() {
  const router = useRouter();
  const { user, logout } = useAuth();

  return (
    <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
      <Text>{user?.email}</Text>
      <SimpleButton
        onPress={async () => {
          try {
            await logout();
            router.replace("/");
          } catch (error: any) {
            Alert.alert("Logout error", error.toString());
          }
        }}
        title={"Logout"}
      />
    </View>
  );
}
