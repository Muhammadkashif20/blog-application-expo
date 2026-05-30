import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Header() {
	const router=useRouter()
  return (
    <View className="bg-white px-5 pt-14 pb-6 shadow-sm border-b border-gray-100">

      {/* TOP ROW */}
      <View className="flex-row items-center justify-between">

        {/* LEFT: BRAND */}
        <View className="flex-row items-center">

          {/* Simple Dot Logo */}
          <View className="w-10 h-10 rounded-full bg-violet-100 items-center justify-center mr-3">
            <Ionicons name="book-outline" size={20} color="#7C3AED" />
          </View>

          {/* TEXT */}
          <View>
            <Text className="text-gray-900 text-lg font-semibold">
              QuickBlog
            </Text>
            <Text className="text-gray-400 text-xs">
              Explore • Learn • Grow
            </Text>
          </View>
        </View>

     {/* RIGHT: ADD BLOG BUTTON */}
<TouchableOpacity
		onPress={()=>router.push("/Screens/AddBlog")}
  className="flex-row items-center bg-violet-600 px-4 py-2.5 rounded-xl"
>
  <Ionicons name="add" size={18} color="white" />

  <Text className="text-white text-sm font-semibold ml-1">
    New
  </Text>
</TouchableOpacity>

      </View>
    </View>
  );
}