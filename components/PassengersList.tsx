import React from 'react';
import { SectionList, Text, View, Image } from 'react-native';
import data from "../services/data-passengers"
import formatDataForSectionList from "../services/helper";

// Usando o helper para gerar os dados das seções
const PassengerList = () => {
  const passengers = data

  const sections = formatDataForSectionList(passengers);

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <Image
            source={{ uri: item.passenger_avatar }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <Text style={{ marginLeft: 10 }}>{item.passenger_name}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
          {title}
        </Text>
      )}
    />
  );
};

export default PassengerList;
