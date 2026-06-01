import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Home/Header";
import Axios from "axios";
const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const publishBlog = async () => {
    try {
      if (!title || !description) {
        alert("Please fill in all fields before publishing.");
        return;
      }

      await Axios.post("http://192.168.1.9:4000/api/AddBlog", {
        title,
        description,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      });
      alert("Blog published successfully!");
			setTitle("");
			setDescription("");
    } catch (error) {
      console.error("Error publishing blog:", error);
      alert("Failed to publish blog. Please try again.");
    }
  };

  return (
    <View className="flex-1">
      <Header />
      <ScrollView
        className="flex-1 bg-[#fff]"
        showsVerticalScrollIndicator={false}
      >
        {/* HERO */}
        <View className="bg-white px-5 pt-5 pb-6 border-b border-gray-100">
          <View className="flex-row items-center justify-between">
            <View className="flex-1 pr-4">
              <Text className="text-gray-900 text-[24px] font-bold tracking-tight">
                Create New Blog
              </Text>

              <Text className="text-violet-600 text-xs font-medium mt-1">
                Turn your thoughts into content
              </Text>
            </View>

            <View className="w-12 h-12 rounded-2xl items-center justify-center border border-violet-200">
              <Ionicons name="create-outline" size={22} color="#7C3AED" />
            </View>
          </View>

          <Text className="text-gray-500 text-sm leading-6 mt-4">
            Create engaging articles, share your knowledge, and inspire readers
            with meaningful content.
          </Text>

          {/* Small Status Badge */}
          <View className="mt-5 flex-row">
            <View className="bg-violet-50 border border-violet-100 px-3 py-2 rounded-full">
              <Text className="text-violet-700 text-xs font-semibold">
                ✨ Create Your Story
              </Text>
            </View>
          </View>
        </View>

        {/* FORM */}
        <View className="px-4 mt-4">
          <View className="bg-white rounded-[20px] p-6 border border-gray-100">
            {/* FORM HEADER */}
            <View className="mb-6">
              <Text className="text-gray-900 text-lg font-bold tracking-tight">
                Blog Details
              </Text>

              <Text className="text-gray-500 text-sm mt-1 leading-2">
                Fill in the details to publish your story
              </Text>
            </View>

            {/* TITLE */}
            <View className="mb-6">
              <Text className="text-gray-800 text-sm font-semibold mb-2 uppercase tracking-wide">
                Title
              </Text>

              <TextInput
                onChangeText={(text) => setTitle(text)}
                placeholder="Enter a Blog Title..."
                placeholderTextColor="#B0B0B0"
                className="bg-gray-50 px-4 py-4 rounded-2xl text-gray-900 text-[15px] border border-gray-200"
              />
            </View>

            {/* CATEGORY */}
            <View className="mb-6">
              <Text className="text-gray-800 text-xs font-semibold mb-3 uppercase tracking-wide">
                Category
              </Text>

              <View className="flex-row flex-wrap">
                <TouchableOpacity className="bg-violet-50 border border-violet-200 px-4 py-2 rounded-full mr-2 mb-2">
                  <Text className="text-violet-700 text-xs font-semibold">
                    Technology
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-full mr-2 mb-2">
                  <Text className="text-gray-700 text-xs font-medium">
                    Design
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-full mb-2">
                  <Text className="text-gray-700 text-xs font-medium">
                    Coding
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* DIVIDER */}
            <View className="h-px bg-gray-100 my-2" />

            {/* DESCRIPTION */}
            <View className="mt-5">
              <Text className="text-gray-800 text-sm font-semibold mb-2 uppercase tracking-wide">
                Story
              </Text>

              <TextInput
                onChangeText={(text) => setDescription(text)}
                placeholder="Write your story in detail..."
                placeholderTextColor="#B0B0B0"
                multiline
                textAlignVertical="top"
                className="bg-gray-50 px-4 py-4 rounded-2xl text-gray-700 text-sm leading-6 border border-gray-200 min-h-[180px]"
              />
            </View>

            {/* MEDIA ACTIONS */}
            <View className="flex-row items-center mt-6">
              <TouchableOpacity className="bg-white border border-gray-200 p-3 rounded-2xl mr-3">
                <Ionicons name="image-outline" size={20} color="#7C3AED" />
              </TouchableOpacity>

              <TouchableOpacity className="bg-white border border-gray-200 p-3 rounded-2xl">
                <Ionicons name="link-outline" size={20} color="#7C3AED" />
              </TouchableOpacity>
            </View>
          </View>

          {/* PUBLISH BUTTON */}
          <TouchableOpacity
            onPress={publishBlog}
            className="bg-violet-600 py-5 rounded-2xl items-center my-6"
            style={{
              shadowColor: "#7C3AED",
              shadowOpacity: 0.25,
              shadowRadius: 12,
              elevation: 1,
            }}
          >
            <Text className="text-white font-semibold text-base">
              Publish Story
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddBlog;
