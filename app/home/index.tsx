import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { FlatList, Text, View } from "react-native";

import HeaderRight from "../../components/HeaderRight";
import Loading from "../../components/Loading";
import ViewBook from "../../components/ViewEquipment";
import useCollection from "../../firebase/hooks/useCollection";
import globalStyles from "../../styles/globalStyles";
import Equipment from "../../types/Equipment";
import SimpleButton from "../../components/shared/SimpleButton";
import listingStyles from "../../styles/listingStyles";

export default function Home() {
  const router = useRouter();
  const { data, remove, refreshData, loading } =
    useCollection<Equipment>("equipments");

  const handleCreate = () => {
    const update: string = "false";
    router.navigate({
      pathname: "/EquipmentRegister",
      params: { update },
    });
  }

  return (
    <View style={listingStyles.container}>
      <Stack.Screen
        options={{
          title: "Listing",
          headerRight: () => <HeaderRight />,
        }}
      />

      <View style={globalStyles.formHeader}>

        <Text style={globalStyles.formHeaderText}>Equipments</Text>

        <SimpleButton onPress={handleCreate} title="New" />
      </View>

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ViewBook
              equipment={item}
              onDelete={async () => {
                await remove(item.id!);
                await refreshData();
              }}
            />
          )}
          style={{ width: "100%" }}
        />
      )}
    </View>
  );
}
