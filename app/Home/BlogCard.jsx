import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Axios from "axios";
import {BASE_URL} from "../../utils/baseurl";

export default function BlogCard() {
  const navigation = useNavigation();
  const [latestBlog, setLatestBlog] = useState(null);

  const getLatestBlog = async () => {
    try {
      const res = await Axios.get(
        `${BASE_URL}/api/getBlogs`
      );

      const data = res.data;
      const lastBlog = data[data.length - 1];
      setLatestBlog(lastBlog);
    } catch (error) {
      console.log("Latest Blog Error:", error);
    }
  };

  useEffect(() => {
    getLatestBlog();
  }, []);

  const blogData = latestBlog ? [latestBlog] : [];

  return (
    <View className="px-5 mt-3">

      {/* HEADER */}
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
          onPress={() => navigation.navigate("Blogs")}
          className="bg-violet-50 px-4 py-2 rounded-xl"
        >
          <Text className="text-violet-700 text-xs font-semibold">
            See More
          </Text>
        </TouchableOpacity>
      </View>

      {/* MAP (safe version) */}
      {blogData.map((blog, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.9}
          className="bg-white rounded-[28px] overflow-hidden border border-gray-100"
        >

          {/* IMAGE */}
          <View className="relative">
            <Image
              source={{ uri: blog.image }}
              className="w-full h-[200px]"
            />

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
                  Just now
                </Text>
              </View>

              <Text className="text-violet-600 text-xs font-semibold">
                5 min read
              </Text>
            </View>

            {/* TITLE */}
            <Text className="text-gray-900 text-[20px] font-bold leading-7">
              {blog.title}
            </Text>

            {/* DESCRIPTION */}
            <Text className="text-gray-500 text-sm leading-5 mt-2">
              {blog.description}
            </Text>

            {/* FOOTER */}
            <View className="flex-row items-center justify-between mt-6">

              <View className="flex-row items-center">
                <View className="w-9 h-9 rounded-full bg-violet-100 items-center justify-center">
                  <Ionicons name="person-outline" size={16} color="#7C3AED" />
                </View>

                <View className="ml-2">
                  <Text className="text-gray-900 text-xs font-semibold">
                    {blog.author || "Blogify Team"}
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
      ))}

    </View>
  );
}