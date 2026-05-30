import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TABS = [
  {
    name: "Home",
    label: "Home",
    icon: "home",
    iconOff: "home-outline",
  },

  {
    name: "Explore",
    label: "Explore",
    icon: "grid",
    iconOff: "grid-outline",
  },

  {
    name: "AddBlog",
    label: "Create",
    icon: "add-circle",
    iconOff: "add-circle-outline",
  },

  {
    name: "Blogs",
    label: "Blogs",
    icon: "document-text",
    iconOff: "document-text-outline",
  },
];

const Navigation = ({ state, navigation }) => {
  const insets = useSafeAreaInsets();

  const activeRoute =
    state?.routes[state?.index]?.name ?? "Home";

  const go = (name) => navigation.navigate(name);

  const TabItem = ({ tab }) => {
    const isActive = activeRoute === tab.name;

    return (
      <TouchableOpacity
        onPress={() => go(tab.name)}
        activeOpacity={0.7}
        className="flex-1 items-center justify-center py-2"
      >
        {/* ICON CONTAINER */}
        <View
          className={`p-2 rounded-full ${
            isActive ? "bg-violet-100" : "bg-transparent"
          }`}
        >
          <Ionicons
            name={isActive ? tab.icon : tab.iconOff}
            size={22}
            color={isActive ? "#7C3AED" : "#9CA3AF"}
          />
        </View>

        {/* LABEL */}
        <Text
          className={`text-[11px] mt-1 ${
            isActive
              ? "text-violet-600 font-semibold"
              : "text-gray-400 font-medium"
          }`}
        >
          {tab.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      className="bg-white border-t border-gray-200"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 8,
        paddingBottom: insets.bottom > 0 ? insets.bottom : 10,
      }}
    >
      <View className="flex-row items-center justify-around h-[65px]">
        <TabItem tab={TABS[0]} />
        <TabItem tab={TABS[1]} />
        <TabItem tab={TABS[2]} />
        <TabItem tab={TABS[3]} />
      </View>
    </View>
  );
};

export default Navigation;