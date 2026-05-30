import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Explore = () => {
  return (
    <View className="flex-1 bg-[#FAFAFA] px-5 justify-center">

      {/* ICON CARD */}
      <View className="items-center">

        <View className="w-24 h-24 rounded-[30px] bg-violet-100 items-center justify-center shadow-sm border border-violet-200">
          <Ionicons
            name="compass-outline"
            size={40}
            color="#7C3AED"
          />
        </View>

      </View>

      {/* CONTENT */}
      <View className="items-center mt-8">

        <Text className="text-gray-900 text-[28px] font-semibold tracking-tight">
          Explore content
        </Text>

        <Text className="text-gray-500 text-center text-[15px] leading-7 mt-4 px-4">
          Discover trending blogs, curated categories,
          and inspiring stories tailored for your interests.
        </Text>

      </View>

      {/* TAGS */}
      <View className="flex-row justify-center flex-wrap mt-7">

        <View className="bg-violet-600 px-4 py-2 rounded-full mr-2 mb-2">
          <Text className="text-white text-xs font-semibold">
            Trending
          </Text>
        </View>

        <View className="bg-white border border-gray-200 px-4 py-2 rounded-full mr-2 mb-2">
          <Text className="text-gray-700 text-xs font-medium">
            Technology
          </Text>
        </View>

        <View className="bg-white border border-gray-200 px-4 py-2 rounded-full mb-2">
          <Text className="text-gray-700 text-xs font-medium">
            Design
          </Text>
        </View>

      </View>

      {/* BUTTON */}
      <TouchableOpacity className="bg-gray-900 py-4 rounded-2xl items-center mt-8">

        <Text className="text-white font-semibold text-sm">
          Explore Soon
        </Text>

      </TouchableOpacity>

    </View>
  );
};

export default Explore;