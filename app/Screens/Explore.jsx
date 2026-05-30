import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Home/Header";

export const exploreData = [
  {
    category: "Technology",
    ideas: [
      {
        id: 1,
        title: "AI in Daily Life",
        desc: "How AI is changing mobile apps",
        icon: "sparkles-outline",
      },
      {
        id: 2,
        title: "Future of Web Apps",
        desc: "Next-gen web technologies explained",
        icon: "globe-outline",
      },
      {
        id: 3,
        title: "Cloud Computing Basics",
        desc: "Understanding modern cloud systems",
        icon: "cloud-outline",
      },
    ],
  },

  {
    category: "Design",
    ideas: [
      {
        id: 4,
        title: "Minimal UI Design",
        desc: "Clean interfaces that users love",
        icon: "color-palette-outline",
      },
      {
        id: 5,
        title: "Dark Mode Trends",
        desc: "Why dark UI is so popular",
        icon: "moon-outline",
      },
      {
        id: 6,
        title: "Typography Matters",
        desc: "Fonts that improve UX experience",
        icon: "text-outline",
      },
    ],
  },

  {
    category: "AI",
    ideas: [
      {
        id: 7,
        title: "AI in Apps",
        desc: "Smart features in mobile apps",
        icon: "sparkles-outline",
      },
      {
        id: 8,
        title: "ChatGPT Use Cases",
        desc: "Real world AI applications",
        icon: "chatbubble-ellipses-outline",
      },
      {
        id: 9,
        title: "AI Automation",
        desc: "Replacing manual tasks with AI",
        icon: "settings-outline",
      },
    ],
  },

  {
    category: "Development",
    ideas: [
      {
        id: 10,
        title: "React Native Tips",
        desc: "Performance tricks for apps",
        icon: "code-slash-outline",
      },
      {
        id: 11,
        title: "Clean Code Practice",
        desc: "Write maintainable code",
        icon: "document-text-outline",
      },
      {
        id: 12,
        title: "API Integration",
        desc: "Connect frontend with backend",
        icon: "link-outline",
      },
    ],
  },

  {
    category: "Startup",
    ideas: [
      {
        id: 13,
        title: "Startup Ideas 2026",
        desc: "Fresh business opportunities",
        icon: "rocket-outline",
      },
      {
        id: 14,
        title: "How to Pitch Idea",
        desc: "Attract investors effectively",
        icon: "megaphone-outline",
      },
      {
        id: 15,
        title: "MVP Development",
        desc: "Build minimum viable product fast",
        icon: "construct-outline",
      },
    ],
  },
];

export default function Explore() {
	const categories=exploreData.map((item)=>item.category)
  return (
		<View className="flex-1">
			<Header/>
    <ScrollView className="flex-1 bg-[#fff]" showsVerticalScrollIndicator={false}>

      {/* HEADER */}
      <View className="bg-white px-5 pt-6 pb-6 border-b border-gray-100 rounded-b-[30px]">

        <Text className="text-gray-900 text-[28px] font-bold">
          Explore Ideas
        </Text>

        <Text className="text-gray-500 text-sm mt-2 leading-6">
          Discover what’s trending and get inspiration for your next blog post.
        </Text>

      </View>

      {/* CATEGORIES */}
      <View className="px-5 mt-6">

        <Text className="text-gray-900 font-semibold mb-3">
          Categories
        </Text>

        <View className="flex-row flex-wrap">

          {categories.map((item, index) => (
            <TouchableOpacity
						key={index}
              className="bg-white border border-gray-200 px-4 py-2 rounded-full mr-2 mb-2"
            >
              <Text className="text-gray-700 text-xs font-medium">
                {item}
              </Text>
            </TouchableOpacity>
          ))}

        </View>

      </View>

      {/* TRENDING IDEAS */}
      <View className="px-5 mt-6">

        <Text className="text-gray-900 font-semibold mb-3">
          Trending Ideas
        </Text>

        {trendingIdeas.map((item) => (
					<TouchableOpacity
					key={item.id}
					className="bg-white p-4 rounded-2xl border border-gray-100 mb-3 flex-row items-center"
          >

            <View className="w-11 h-11 rounded-xl bg-violet-50 items-center justify-center mr-3">
              <Ionicons name={item.icon} size={18} color="#7C3AED" />
            </View>

            <View className="flex-1">
              <Text className="text-gray-900 font-semibold">
                {item.title}
              </Text>

              <Text className="text-gray-500 text-xs mt-1">
                {item.desc}
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />

          </TouchableOpacity>
        ))}

      </View>

      {/* CTA */}
      <View className="px-5 mt-6 mb-10">

        <TouchableOpacity className="bg-violet-600 p-4 rounded-2xl flex-row items-center justify-between">

          <View>
            <Text className="text-white font-semibold text-base">
              Got an Idea?
            </Text>

            <Text className="text-white/80 text-xs mt-1">
              Turn it into a blog post now
            </Text>
          </View>

          <Ionicons name="arrow-forward" size={20} color="white" />

        </TouchableOpacity>

      </View>

    </ScrollView>
				</View>
  );
}