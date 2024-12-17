import React, { useState, useEffect } from 'react';
import { Alert, Image, View } from 'react-native';
import { useRouter } from 'expo-router';
import Input from '../components/shared/Input'
import Loading from '../components/Loading';
import useAuth from '../firebase/hooks/useAuth';
import loginStyles from '../styles/loginStyles';
import SimpleButton from '../components/shared/SimpleButton';

export default function _screen() {
  const { user, login, loading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      router.push("/home/");
    } catch (error: any) {
      Alert.alert("Login error", error.toString());
    }
  }

  useEffect(() => {
    if (user) {
      router.replace("/home/");
    }
  }, [user]);

  if (loading) return <Loading />;

  return (
    <View style={loginStyles.container}>

      <View style={loginStyles.logoContainer}>
        <Image
          style={loginStyles.logo}
          source={require("../assets/logo.png")}
          resizeMode='contain'
        />
      </View>
      <View style={loginStyles.inputBlock}>
        <Input password={false} placeholder='User' value={email} onChangeText={setEmail} />

        <Input password={true} placeholder='Password' value={password} onChangeText={setPassword} />
      </View>

      <SimpleButton onPress={handleLogin} title='Submit'/>
    </View>
  );
}