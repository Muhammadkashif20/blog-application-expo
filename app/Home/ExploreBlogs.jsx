import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
const previews = [
  {
    id: 1,
    title: "Design Trends",
    desc: "Modern UI ideas shaping apps",
    icon: "color-palette-outline",
  },
  {
    id: 2,
    title: "Tech Updates",
    desc: "React & mobile development news",
    icon: "hardware-chip-outline",
  },
  {
    id: 3,
    title: "Creator Stories",
    desc: "Insights from developers",
    icon: "person-outline",
  },
];

export default function ExploreBlogs() {
	const navigation=useNavigation()
  return (
    <View className="mt-8">

      {/* HEADER */}
      <View className="flex-row items-end justify-between px-5 pb-4">
        <View className="flex-1 pr-3">

          <Text className="text-gray-900 text-lg font-bold">
            Discover Categories
          </Text>

          <Text className="text-gray-400 text-xs leading-4">
            Trending topics & ideas you can explore anytime
          </Text>

        </View>

        <TouchableOpacity 
				onPress={()=>navigation.navigate("Explore")}
				className="bg-violet-50 px-3 py-2 rounded-xl">
          <Text className="text-violet-700 text-xs font-semibold">
          Explore Now
          </Text>
        </TouchableOpacity>
      </View>

      {/* CARDS */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-5"
      >
        {previews.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="bg-white mr-3 w-44 p-4 rounded-2xl shadow-sm border border-gray-100"
          >

            <View className="w-11 h-11 rounded-2xl bg-violet-50 items-center justify-center mb-3">
              <Ionicons name={item.icon} size={18} color="#7C3AED" />
            </View>

            <Text className="text-gray-900 font-semibold text-sm">
              {item.title}
            </Text>

            <Text className="text-gray-500 text-xs mt-1 leading-4">
              {item.desc}
            </Text>

          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* CTA BANNER */}
      <TouchableOpacity
				onPress={()=>navigation.navigate("Explore")}

			className="mx-5 mt-3 bg-violet-600 px-5 py-4 rounded-2xl flex-row items-center justify-between">

        <View className="flex-1 pr-3">
          <Text className="text-white font-semibold text-base">
            Explore Full Experience
          </Text>

          <Text className="text-white/80 text-xs mt-1">
            See trending blogs, categories & creators
          </Text>
        </View>

        <View className="w-10 h-10 rounded-xl bg-white/15 items-center justify-center">
          <Ionicons name="arrow-forward" size={18} color="white" />
        </View>

      </TouchableOpacity>

    </View>
  );
}