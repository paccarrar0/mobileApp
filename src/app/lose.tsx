import React, { useEffect } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { router } from 'expo-router'
import { useAuth } from '../../AuthContext';
import FullScreen from '../components/container/FullScreen';
import NoHeader from '../components/header/NoHeader';
import ButtonComponent from '../components/shared/ImageButton';


export default function About() {
  const { isAuthenticated } = useAuth();

  const handleLogin = () => {
    router.replace('/')
  }

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        router.replace("/")
      }, 10)
    }
  }), [isAuthenticated, router]

  return (

    <FullScreen>
      <NoHeader />
      <View style={styles.container}>
        <Text>YOU LOST</Text>
        <ButtonComponent handleLogin={handleLogin} imageSource='https://pt.quizur.com/_image?href=https://static.quizur.com/i/b/59a320f8ae6fc4.1987066359a320f8725e80.76888033.jpg&w=600&h=600&f=webp' buttonText='Back'></ButtonComponent>
      </View>
    </FullScreen>

  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 80,
    flex: 1,
  },
})