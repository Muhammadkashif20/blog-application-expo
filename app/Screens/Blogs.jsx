import React, { useState, useCallback } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Home/Header";
import Axios from "axios";
import Toast from "react-native-toast-message";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import {Base_URL} from "../../utils/baseurl";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigation = useNavigation();
  const getBlog = async () => {
    try {
      const response = await Axios.get(`${Base_URL}/api/getBlogs`);
      setBlogs(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getBlog();
    }, []),
  );

  const HandleDelete = async (blogId) => {
    try {
      await Axios.delete(`${Base_URL}/api/deleteBlog/${blogId}`);
      getBlog();
      Toast.show({
        type: "success",
        text1: "Blog Deleted",
        text2: "Blog Deleted Successfully.",
      });
    } catch (error) {
      console.log("Delete Error:", error);
      Toast.show({
        type: "error",
        text1: "Delete Failed",
        text2: "Failed to delete the blog.",
      });
    }
  };

  const formatTimeOnly = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    const time = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const isToday = date.toDateString() === now.toDateString();

    if (isToday) {
      return `Today • ${time}`;
    }

    const formattedDate = date.toLocaleDateString([], {
      day: "2-digit",
      month: "short",
    });

    return `${formattedDate} • ${time}`;
  };

  return (
    <View className="flex-1">
      <Header />
      <ScrollView
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View className="px-5 pt-6 pb-2">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-gray-400 text-xs uppercase tracking-wide">
                Fresh content
              </Text>

              <Text className="text-gray-900 text-[28px] font-bold mt-1">
                Latest Blogs
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              className="bg-violet-50 border border-violet-100 px-4 py-2 rounded-2xl"
            >
              <Text className="text-violet-700 text-xs font-semibold">
                Latest Posts
              </Text>
            </TouchableOpacity>
          </View>

          <Text className="text-gray-500 text-sm leading-6 mt-3">
            Explore curated stories, insights and ideas from creators around the
            world.
          </Text>
        </View>

        {/* BLOG LIST */}
        <View className="px-5 mt-3">
          {blogs?.map((blog) => (
            <TouchableOpacity
              key={blog._id}
              activeOpacity={0.92}
              className="bg-white rounded-[28px] mb-6 overflow-hidden border border-gray-100"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.05,
                shadowRadius: 10,
                elevation: 3,
              }}
            >
              {/* IMAGE + CATEGORY */}
              <View className="relative">
                <Image
                  source={{ uri: blog.image }}
                  className="w-full h-[200px]"
                />

                {/* STATIC CATEGORY */}
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
                      {formatTimeOnly(blog.createdAt)}
                    </Text>
                  </View>

                  <Text className="text-violet-600 text-xs font-semibold">
                    5 min read
                  </Text>
                </View>

                {/* TITLE */}
                <Text className="text-gray-900 text-[20px] font-bold leading-7 tracking-tight">
                  {blog.title}
                </Text>

                {/* DESCRIPTION */}
                <Text
                  numberOfLines={2}
                  className="text-gray-500 text-sm leading-5 mt-2"
                >
                  {blog.description}
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
                        Content Creator
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row items-center">
                    {/* Edit */}
                    <TouchableOpacity
                      onPress={() => {
                        console.log(
                          "Navigating to EditBlog with ID:",
                          blog._id,
                        );
                        navigation.navigate("EditBlog", {
                          blogId: blog._id,
                        });
                      }}
                      className="bg-blue-50 border border-blue-100 p-3 rounded-2xl mr-2"
                    >
                      <Ionicons
                        name="create-outline"
                        size={18}
                        color="#2563EB"
                      />
                    </TouchableOpacity>

                    {/* Delete */}
                    <TouchableOpacity
                      onPress={() => HandleDelete(blog._id)}
                      className="bg-red-50 border border-red-100 p-3 rounded-2xl"
                    >
                      <Ionicons
                        name="trash-outline"
                        size={18}
                        color="#DC2626"
                      />
                    </TouchableOpacity>
                  </View>
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
