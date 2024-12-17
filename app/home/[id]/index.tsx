import { faker } from "@faker-js/faker";
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { Alert, Text, View, StyleSheet } from "react-native";

import HeaderRight from "../../../components/HeaderRight";
import Loading from "../../../components/Loading";
import useDocument from "../../../firebase/hooks/useDocument";
import globalStyles from "../../../styles/globalStyles";
import Equipment from "../../../types/Equipment";
import SimpleButton from "../../../components/shared/SimpleButton";

export default function BookDetails() {
  const { id } = useGlobalSearchParams();
  const router = useRouter();

  const handleCreate = () => {
    const update: string = "true";
    router.navigate({
      pathname: "/EquipmentRegister",
      params: { update, id },
    });
  }

  const {
    data: equipment,
    loading,
  } = useDocument<Equipment>("equipments", id as string);

  if (loading || !equipment) return <Loading />;

  return (
    <View style={[globalStyles.container, globalStyles.container]}>
      <Stack.Screen
        options={{
          title: "Equipment",
          headerRight: () => <HeaderRight />,
        }}
      />

      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Equipment Details</Text>

        <View style={globalStyles.detailRow}>
          <Text style={globalStyles.label}>ID:</Text>
          <Text style={globalStyles.value}>{id}</Text>
        </View>

        <View style={globalStyles.detailRow}>
          <Text style={globalStyles.label}>Name:</Text>
          <Text style={globalStyles.value}>{equipment.name}</Text>
        </View>

        <View style={globalStyles.detailRow}>
          <Text style={globalStyles.label}>Category:</Text>
          <Text style={globalStyles.value}>{equipment.category}</Text>
        </View>

        <View style={globalStyles.detailRow}>
          <Text style={globalStyles.label}>Price:</Text>
          <Text style={globalStyles.value}>{equipment.price}</Text>
        </View>

        <SimpleButton
          style={{width: 140, marginHorizontal: "auto"}}
          title="Update"
          onPress={handleCreate}
        />
      </View>
    </View>
  );
}