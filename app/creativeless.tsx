import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Link, Stack } from 'expo-router'

export default class creativeless extends Component {
  render() {
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
        <Text style = {styles.receptionText}>Ops, parece que faltou criatividade para continuar a falta de criatividade de matrioshka</Text>
        <Link style = {styles.link} href={"/creativity"}>Você pode voltar para a página inicial clicando aqui!</Link>
        <Text style = {styles.receptionText}>Ah! Seu parametro é aleatório foi</Text>
      </View>
    </View>
    )
  }
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
  }
})