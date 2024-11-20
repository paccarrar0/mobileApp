import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Link, Stack, useLocalSearchParams } from 'expo-router'

export default function creativeless() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen
        options={{
          title: "Matrioshka Creativeless",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 19,
          }
        }}
      />
      <View >
        <Text style={styles.receptionText}>Ops, parece que faltou criatividade para continuar a falta de criatividade de matrioshka</Text>
        <Link style={styles.link} href={"/listagem"}>Você pode voltar clicando aqui!</Link>
        <Text style={styles.paramText}>Ah! Seu parametro é aleatório e sem nenhuma criatividade foi <Text style={styles.param}>{id}</Text></Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  receptionText: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: "5%"
  },

  link: {
    marginTop: 10,
    marginLeft: "5%",
    color: "#00BFFF",
  },

  paramText: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: "5%"
  },

  param: {
    color: "#00BFFF"
  }
})