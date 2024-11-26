import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";
import { AuthProvider } from "../../AuthContext";

export default function Layout() {

  return (
    <AuthProvider>
      <ActionSheetProvider>
        <Stack />
      </ActionSheetProvider>
    </AuthProvider>
  );
}