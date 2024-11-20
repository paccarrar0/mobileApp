import React, { useState } from 'react'
import { Button, Image, StyleSheet, View } from 'react-native'
import FullScreen from '../components/container/FullScreen';
import NoHeader from '../components/header/NoHeader';
import Input from '../components/Input';
import ButtonComponent from '../components/ImageButton';
import { useRouter } from 'expo-router';
import { Text } from 'react-native-svg';
import { useAuth } from '../AuthContext';

export default function index() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const router = useRouter();
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongUser, setWrongUser] = useState(false);

  const handleLogin = () => {
    if(userName != "Fulano" && userName != ""){
      setWrongUser(true)
    }else{
      setWrongUser(false)
    }

    if(userPassword != "123" && userPassword != ""){
      setWrongPassword(true)
    }else{
      setWrongPassword(false)
    }

    if(userName == "Fulano" && userPassword == "123")
      router.navigate("/listagem")
  }

  return (
    <FullScreen>

      <NoHeader />

      <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/141-1416946_logos-what-is-a-generic-logo-transparent-background.png")}
            resizeMode='contain'
          />
        </View>
        <View style={styles.inputBlock}>
          <Input password={false} placeholder='Usuário' value={userName} onChangeText={setUserName} />        
          {wrongUser ? (<Text>Usuário incorreto</Text>) : (null)}
          
          <Input password={true} placeholder='Senha' value={userPassword} onChangeText={setUserPassword} />
          {wrongPassword ? (<Text>Senha incorreta</Text>) : (null)}
        </View>

        <ButtonComponent handleLogin={handleLogin} imageSource='https://pt.quizur.com/_image?href=https://static.quizur.com/i/b/59a320f8ae6fc4.1987066359a320f8725e80.76888033.jpg&w=600&h=600&f=webp'></ButtonComponent>
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

  logoContainer: {
    width: "60%",
    height: 100
  },
  logo: {
    width: "100%",
    height: "100%"
  },
  inputBlock: {
    marginTop: 80,
    gap: 15
  },
  errorText: {
    color: "red"
  }
})