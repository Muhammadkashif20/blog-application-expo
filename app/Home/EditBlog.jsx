import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Home/Header";
const EditBlog = ({ route }) => {
  const { blogId } = route.params;
  console.log("Route Params:", route.params);
  console.log("Blog ID:", blogId);
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const getBlog = async () => {
    try {
      const response = await Axios.get(
        `http://192.168.1.9:4000/api/getSingleBlog/${blogId}`,
      );
      console.log("Get Blog Response in EditBlog:", response.data);
      setTitle(response.data.title);
      setDescription(response.data.description);
			setImage(response.data.image);
    } catch (error) {
      console.log("Get Blog Error:", error);
    }
  };
  useEffect(() => {
    if (blogId) {
      getBlog();
    }
  }, [blogId]);

  const updateBlog = async () => {
    try {
      setLoading(true);
      await Axios.put(`http://192.168.1.9:4000/api/updateBlog/${blogId}`, {
        title,
        description,
				image: image ||imageUrl,
      });

      navigation.goBack();
    } catch (error) {
      console.log("Update Error:", error);
    } finally {
      setLoading(false);
    }
  };

	const pickImage = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ["images"],
			quality: 1,
		});
	
		if (!result.canceled) {
			uploadToCloudinary(result.assets[0].uri);
		}
	};
	
	const uploadToCloudinary = async (imageUri) => {
		const data = new FormData();
	
		data.append("file", {
			uri: imageUri,
			type: "image/jpeg",
			name: "blog.jpg",
		});
	
		data.append("upload_preset", "blog-application-mobile");
	
		try {
			const res = await Axios.post(
				"https://api.cloudinary.com/v1_1/dgnn4wr2k/image/upload",
				data,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
	
			setImage(res.data.secure_url);
	
			alert("Edit Image Uploaded Successfully");
		} catch (error) {
			console.log(error);
		}
	};
  return (
    <View className="flex-1">
      <Header />
      <ScrollView
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
      >
        {/* HERO */}
        <View className="bg-white px-5 pt-5 pb-6 border-b border-gray-100">
          <View className="flex-row items-center justify-between">
            <View className="flex-1 pr-4">
              <Text className="text-gray-900 text-[24px] font-bold tracking-tight">
                Edit Blog
              </Text>

              <Text className="text-blue-600 text-xs font-medium mt-1">
                Update your story
              </Text>
            </View>

            <View className="w-12 h-12 rounded-2xl items-center justify-center border border-blue-200">
              <Ionicons name="create-outline" size={22} color="#2563EB" />
            </View>
          </View>

          <Text className="text-gray-500 text-sm leading-6 mt-4">
            Refine your content, improve your ideas, and keep your audience
            engaged with updated stories.
          </Text>

          <View className="mt-5 flex-row">
            <View className="bg-blue-50 border border-blue-100 px-3 py-2 rounded-full">
              <Text className="text-blue-700 text-xs font-semibold">
                ✏️ Update Your Story
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
                Edit Blog Details
              </Text>

              <Text className="text-gray-500 text-sm mt-1">
                Make changes and save your updated blog.
              </Text>
            </View>

            {/* TITLE */}
            <View className="mb-6">
              <Text className="text-gray-800 text-sm font-semibold mb-2 uppercase tracking-wide">
                Title
              </Text>

              <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
                placeholder="Enter Blog Title..."
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
                <TouchableOpacity className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mr-2 mb-2">
                  <Text className="text-blue-700 text-xs font-semibold">
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

            <View className="h-px bg-gray-100 my-2" />

            {/* DESCRIPTION */}
            <View className="mt-5">
              <Text className="text-gray-800 text-sm font-semibold mb-2 uppercase tracking-wide">
                Story
              </Text>

              <TextInput
                value={description}
                onChangeText={(text) => setDescription(text)}
                placeholder="Update your story..."
                placeholderTextColor="#B0B0B0"
                multiline
                textAlignVertical="top"
                className="bg-gray-50 px-4 py-4 rounded-2xl text-gray-700 text-sm leading-6 border border-gray-200 min-h-[180px]"
              />
            </View>

            {/* ACTIONS */}
            {/* IMAGE SECTION */}
            <View className="mt-5">
              <Text className="text-gray-800 text-sm font-semibold mb-2 uppercase tracking-wide">
                Blog Image
              </Text>

              <TextInput
                value={image}
                onChangeText={setImage}
                placeholder="Update Image URL..."
                placeholderTextColor="#B0B0B0"
                className="bg-gray-50 px-4 py-4 rounded-2xl text-gray-900 border border-gray-200"
              />

              <View className="flex-row items-center my-4">
                <View className="flex-1 h-px bg-gray-200" />
                <Text className="mx-3 text-gray-400 text-xs">OR</Text>
                <View className="flex-1 h-px bg-gray-200" />
              </View>

              <TouchableOpacity
                onPress={pickImage}
                className="border border-dashed border-blue-300 bg-blue-50 rounded-2xl p-5 items-center"
              >
                <Ionicons name="image-outline" size={28} color="#2563EB" />

                <Text className="text-blue-700 font-semibold mt-2">
                  Change Image
                </Text>

                <Text className="text-gray-500 text-xs mt-1">
                  JPG, PNG, WEBP
                </Text>
              </TouchableOpacity>

              {image ? (
                <Text className="text-green-600 text-xs mt-2">
                  ✓ Image Updated
                </Text>
              ) : null}
            </View>
          </View>

          {/* UPDATE BUTTON */}
          <TouchableOpacity
            onPress={updateBlog}
            className="bg-blue-600 py-5 rounded-2xl items-center mt-6 mb-14"
            style={{
              shadowColor: "#2563EB",
              shadowOpacity: 0.25,
              shadowRadius: 12,
              elevation: 3,
            }}
          >
            <Text className="text-white font-semibold text-base">
              {loading ? "Updating..." : "Update Blog"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditBlog;
