import React, { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Loader = () => {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
      friction: 4,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace("MainTabs");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">

      <Animated.View
        style={{ transform: [{ scale: scaleValue }] }}
        className="w-24 h-24 rounded-full bg-violet-500 items-center justify-center shadow-md"
      >
        <Text className="text-white text-2xl font-bold">B</Text>
      </Animated.View>

      <Text className="text-gray-900 text-2xl font-bold mt-5">
        Blogify
      </Text>

      <Text className="text-gray-500 text-xs mt-2">
        Loading amazing content...
      </Text>

    </View>
  );
};

export default Loader;