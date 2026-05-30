import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Home/Header";

const blogs = [
  {
    id: 1,
    title: "Why Minimal UI Feels More Premium",
    desc: "Learn how spacing, typography, and clean layouts create modern app experiences.",
    date: "Today • 8:45 PM",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Design",
    readTime: "5 min read",
  },

  {
    id: 2,
    title: "React Native Tips for Better Performance",
    desc: "Simple optimizations that make your mobile apps smoother and faster.",
    date: "Yesterday • 6:20 PM",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    category: "Development",
    readTime: "8 min read",
  },

  {
    id: 3,
    title: "Building Modern Blog Apps in 2026",
    desc: "Explore clean UI systems and scalable mobile app structures.",
    date: "May 28 • 9:10 AM",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    category: "Technology",
    readTime: "6 min read",
  },
];

const Blogs = () => {
  return (
		<View className="flex-1">
			<Header/>
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
			>			
      {/* SECTION HEADER */}
      <View className="px-5 pt-6 pb-2">

        <View className="flex-row items-center justify-between">

          <View>
            <Text className="text-gray-400 text-xs tracking-wide uppercase">
              Fresh content
            </Text>

            <Text className="text-gray-900 text-[28px] font-bold tracking-tight mt-1">
              Latest Blogs
            </Text>
          </View>

          <TouchableOpacity className="bg-violet-50 border border-violet-100 px-4 py-2 rounded-2xl">
      <Text className="text-violet-700 text-xs font-semibold">
        View All
      </Text>
    </TouchableOpacity>

        </View>

        <Text className="text-gray-500 text-sm leading-6 mt-3">
          Explore curated stories, insights and ideas from creators around the world.
        </Text>

      </View>

      {/* BLOG LIST */}
      <View className="px-5 mt-3">

        {blogs.map((blog) => (
          <TouchableOpacity
            key={blog.id}
            activeOpacity={0.92}
            className="bg-white rounded-[28px] mb-6 overflow-hidden border border-gray-100"
            style={{
              shadowColor: "#000",
              shadowOffset: {
								width: 0,
                height: 4,
              },
              shadowOpacity: 0.04,
              shadowRadius: 10,
              elevation: 1,
            }}
          >

            {/* IMAGE */}
            <View className="relative">

              <Image
                source={{ uri: blog.image }}
                className="w-full h-[200px]"
              />

              {/* CATEGORY */}
              <View className="absolute top-4 left-4 bg-white/90 px-3 py-1.5 rounded-full">
                <Text className="text-gray-900 text-xs font-semibold">
                  {blog.category}
                </Text>
              </View>

            </View>

            {/* CONTENT */}
            <View className="p-5">

              {/* META */}
              <View className="flex-row items-center justify-between mb-3">

                <View className="flex-row items-center">

                  <Ionicons
                    name="time-outline"
                    size={15}
                    color="#9CA3AF"
                  />

                  <Text className="text-gray-400 text-xs ml-1">
                    {blog.date}
                  </Text>

                </View>

                <Text className="text-violet-600 text-xs font-semibold">
                  {blog.readTime}
                </Text>

              </View>

              {/* TITLE */}
              <Text className="text-gray-900 text-[20px] font-bold leading-7 tracking-tight">
                {blog.title}
              </Text>

              {/* DESCRIPTION */}
              <Text className="text-gray-500 text-sm leading-5 mt-2">
                {blog.desc}
              </Text>

              {/* FOOTER */}
              <View className="flex-row items-center justify-between mt-6">

                {/* AUTHOR */}
                <View className="flex-row items-center">

                  <View className="w-9 h-9 rounded-full bg-violet-100 items-center justify-center">
                    <Ionicons
                      name="person-outline"
                      size={16}
                      color="#7C3AED"
                    />
                  </View>

                  <View className="ml-2">
                    <Text className="text-gray-900 text-xs font-semibold">
                      Blogify Team
                    </Text>

                    <Text className="text-gray-400 text-[11px]">
                      Content creator
                    </Text>
                  </View>

                </View>

                {/* ACTION */}
                <TouchableOpacity className="bg-gray-100 p-3 rounded-2xl">
                  <Ionicons
                    name="bookmark-outline"
                    size={18}
                    color="#6B7280"
                  />
                </TouchableOpacity>

              </View>

            </View>

          </TouchableOpacity>
        ))}

      </View>

    </ScrollView>
								</View>
  );
};

export default Blogs;