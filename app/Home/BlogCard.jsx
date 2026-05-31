import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function BlogCard() {
	const navigation=useNavigation()
  return (
   <View className="px-5 mt-3">

 <View className="flex-row items-center justify-between mb-4">

  <View>
    <Text className="text-gray-900 text-xl font-bold">
      Recent Blog
    </Text>

    <Text className="text-gray-400 text-xs">
      Fresh ideas from creators
    </Text>
  </View>

  <TouchableOpacity
		onPress={()=>navigation.navigate("Blogs")}
	className="bg-violet-50 px-4 py-2 rounded-xl">
    <Text className="text-violet-700 text-xs font-semibold">
      See More
    </Text>
  </TouchableOpacity>

</View>

  {/* SINGLE CARD */}
  <TouchableOpacity
    activeOpacity={0.9}
    className="bg-white rounded-[28px] overflow-hidden border border-gray-100"
    style={{
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 3,
    }}
  >

    {/* IMAGE */}
    <View className="relative">

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        }}
        className="w-full h-[200px]"
      />

      {/* CATEGORY */}
      <View className="absolute top-4 left-4 bg-violet-600 px-3 py-1 rounded-full">
        <Text className="text-white text-xs font-semibold">
          Design
        </Text>
      </View>

    </View>

    {/* CONTENT */}
    <View className="p-5">

      {/* META */}
      <View className="flex-row items-center justify-between mb-3">

        <View className="flex-row items-center">
          <Ionicons name="time-outline" size={15} color="#9CA3AF" />

          <Text className="text-gray-400 text-xs ml-1">
            Today • 8:45 PM
          </Text>
        </View>

        <Text className="text-violet-600 text-xs font-semibold">
          5 min read
        </Text>

      </View>

      {/* TITLE */}
      <Text className="text-gray-900 text-[20px] font-bold leading-7">
        Why Minimal UI Feels Premium
      </Text>

      {/* DESCRIPTION */}
      <Text className="text-gray-500 text-sm leading-5 mt-2">
        Clean spacing, typography and layout create modern mobile app experiences that feel premium.
      </Text>

      {/* FOOTER */}
      <View className="flex-row items-center justify-between mt-6">

        <View className="flex-row items-center">

          <View className="w-9 h-9 rounded-full bg-violet-100 items-center justify-center">
            <Ionicons name="person-outline" size={16} color="#7C3AED" />
          </View>

          <View className="ml-2">
            <Text className="text-gray-900 text-xs font-semibold">
              Blogify Team
            </Text>

            <Text className="text-gray-400 text-[11px]">
              Just now
            </Text>
          </View>

        </View>

        <View className="bg-gray-100 p-3 rounded-2xl">
          <Ionicons name="bookmark-outline" size={18} color="#6B7280" />
        </View>

      </View>

    </View>
  </TouchableOpacity>

</View>
)}