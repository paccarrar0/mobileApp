import { View, Text, Pressable, StyleSheet, Animated, Image } from 'react-native'
import React, {useRef } from 'react'

type ButttonProps = {
  handleLogin: () => void
  imageSource: string
}

export default function ImageButton({ handleLogin, imageSource }: ButttonProps) {

  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <View>

        <Pressable
          style={[styles.button]}
          onPress={handleLogin}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <View style={styles.content}>
            <Text style={styles.buttonText}>Entrar</Text>
            <Image resizeMode='cover' style={styles.image} source={{uri: imageSource}}/>
          </View>
        </Pressable>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#000000",
    alignItems: "center"
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    paddingVertical: 15,
    width: 70,
    height: 20,
    position: "absolute",
    borderRadius: 5,
    zIndex: 0
  },
  buttonText: {
    color: "#ffffff",
    zIndex: 1
  }
})