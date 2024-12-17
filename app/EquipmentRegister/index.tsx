import { View } from 'react-native';
import React, { useState } from 'react';
import loginStyles from '../../styles/loginStyles';
import Input from '../../components/shared/Input';
import SimpleButton from '../../components/shared/SimpleButton';
import { Stack, useRouter } from 'expo-router';
import HeaderRight from '../../components/HeaderRight';
import useCollection from '../../firebase/hooks/useCollection';
import Equipment from '../../types/Equipment';
import globalStyles from '../../styles/globalStyles';
import { useGlobalSearchParams } from 'expo-router';
import useDocument from '../../firebase/hooks/useDocument';

export default function EquipmentRegister() {
  const { update, id } = useGlobalSearchParams();
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const router = useRouter();

  const handleCreate = async () => {
    const { create } = useCollection<Equipment>('equipments');

    try {
      if (!name || !category || !price) {
        alert("Error, all fields must be filled.");
        return;
      }

      if (isNaN(Number(price))) {
        alert("Error, the price field must be a number.");
        return;
      }

      await create({
        name,
        category,
        price: Number(price),
      });

      alert("Success, equipment created successfully!");
      router.back();
    } catch (error: any) {
      alert("Error, cannot create equipment: " + error.toString());
    }
  }

  const handleUpdate = async () => {
    const {
      data: equipment,
      upsert
    } = useDocument<Equipment>('equipments', id as string);

    try {
      if (isNaN(Number(price))) {
        alert("Error, the price field must be a number.");
        return;
      }

      await upsert({
        ...equipment,
        name,
        category,
        price: Number(price),
      });

      alert("Success, equipment updated successfully!");
      router.back();
    } catch (error: any) {
      alert("Error, cannot update equipment: " + error.toString());
    }
  }

  const handleSubmit = () => {


    if (update == "true") {
      handleUpdate();
    } else {
      handleCreate();
    }
  };

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: 'New Equipment',
          headerRight: () => <HeaderRight />,
        }}
      />

      <View style={loginStyles.inputBlock}>
        <Input
          password={false}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        <Input
          password={false}
          placeholder="Category"
          value={category}
          onChangeText={setCategory}
        />

        <Input
          password={false}
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
        />
      </View>

      <SimpleButton onPress={handleSubmit} title="Submit" />
    </View>
  );
}

