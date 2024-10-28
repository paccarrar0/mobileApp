import React from 'react'
import { Link, Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function creativity() {
  const randomId = Math.floor(Math.random() * 100);

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
      <View>
        <Text style = {styles.receptionText}>Bem vindo à falta de criatividade de Matrioshka</Text>
        <Link style = {styles.link} href={{pathname: '/creativeless', params: {id: randomId}}}>Clique aqui para continuar</Link>
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
  }
})
