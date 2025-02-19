import { View, Text, Pressable, StyleSheet, Animated, Image } from 'react-native'
import React, {useRef } from 'react'
import { DEFAULT_RADIUS } from '../../constants/globalStyles'
import { text } from '@fortawesome/fontawesome-svg-core'

type ButttonProps = {
  handleLogin: () => void
  imageSource: string
  buttonText: string
  id: string
}

export default function ImageButton({ handleLogin, imageSource, buttonText, id }: ButttonProps) {

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
          testID={id}
          style={[styles.button]}
          onPress={handleLogin}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <View style={styles.content}>
            <Text style={styles.buttonText}>{buttonText}</Text>
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
    borderRadius: DEFAULT_RADIUS,
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
    borderRadius: DEFAULT_RADIUS,
    zIndex: 0
  },
  buttonText: {
    color: "#ffffff",
    zIndex: 1
  }
})