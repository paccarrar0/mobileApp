import { useRouter } from "expo-router";
import { Alert, Text, View } from "react-native";

import Equipment from "../types/Equipment";
import SimpleButton from './shared/SimpleButton';

interface ViewBookProps {
  equipment: Equipment;
  onDelete: Function;
}

export default function ViewBook({ equipment, onDelete }: ViewBookProps) {
  const router = useRouter();

  return (
    <View
      style={{ borderTopColor: "darkblue", borderTopWidth: 1, marginTop: 12 }}
    >
      <Text style={{ fontSize: 22 }}>{equipment.name}</Text>
      <Text>Category: {equipment.category}</Text>
      <Text>Price: {equipment.price}</Text>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <SimpleButton
          style={{ width: 200, marginRight: 12 }}
          title="View equipment Details"
          onPress={() => {
            if (equipment.id) {
              router.push(`/home/${equipment.id}/`);
            } else {
              Alert.alert(
                "View error",
                "cannot access equipment details because it does not have an id!"
              );
            }
          }}

        />

        <SimpleButton
          style={{ width: 150 }}
          title="Delete Equipment"
          onPress={() => {
            if (equipment.id) {
              Alert.alert("Delete equipment", "Are you sure?", [
                {
                  text: "Yes",
                  onPress: async () => {
                    onDelete();
                  },
                },
                {
                  text: "No",
                  style: "cancel",
                },
              ]);
            } else {
              Alert.alert(
                "delete error",
                "cannot delete equipment because it does not have an id!"
              );
            }
          }}
        />
      </View>
    </View>
  );
}
