import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Hero() {
  const [active, setActive] = useState("Trending now");

  const badges = ["Trending now", "12K+ Articles", "Updated daily"];

  return (
    <View className="bg-white px-5 py-7 border-b border-gray-100 shadow-sm">

    {/* MAIN CONTENT */}
<View>

  <Text className="text-gray-900 text-3xl font-bold leading-8 tracking-tight">
    Discover inspiring ideas
  </Text>

  <Text className="text-gray-500 text-sm mt-3 leading-6">
    Thoughtful insights from developers, designers, and creators
    to keep you informed and inspired every day.
  </Text>

</View>

      {/* VIP META ROW (CLICKABLE BADGES) */}
      <View className="flex-row items-center mt-6 flex-wrap">

        {badges.map((item, index) => {
          const isActive = active === item;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActive(item)}
              className={`px-3 py-2 rounded-full mr-2 mb-2 border ${
                isActive
                  ? "bg-violet-600 border-violet-600"
                  : "bg-gray-50 border-gray-100"
              }`}
            >
              <Text
                className={`text-xs font-semibold ${
                  isActive ? "text-white" : "text-gray-600"
                }`}
              >
                {item === "Trending now" && "✨ "}
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}

      </View>

      {/* SUBTLE DESIGN ACCENT */}
      <View className="mt-6 flex-row items-center">
        <View className="w-10 h-[2px] bg-violet-500 rounded-full" />
        <Text className="text-gray-400 text-xs ml-2">
          curated reading experience
        </Text>
      </View>

    </View>
  );
}