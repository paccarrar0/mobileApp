import { View, Text, Pressable, StyleSheet, Animated, Image } from 'react-native'
import React, { useRef } from 'react'

import { ViewStyle } from 'react-native';

type ButttonProps = {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
}

export default function SimpleButton({ onPress, title, ...props }: ButttonProps) {

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
          {...props}
          style={[styles.button, props.style]}
          onPress={onPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#0069EF",
    alignItems: "center",
    width: 70,
    padding: 5
  },
  buttonText: {
    color: "#0069EF",
    zIndex: 1
  }
})