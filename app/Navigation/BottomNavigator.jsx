import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Blogs from "../Screens/Blogs";
import Explore from "../Screens/Explore";
import Navigation from "../Home/Navigation";
import AddBlog from "../Screens/AddBlog";

const Tab = createBottomTabNavigator();
export default function BottomTabs() {
  return (
    <Tab.Navigator
			initialRouteName="Home"
      tabBar={(props) => <Navigation {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddBlog" component={AddBlog} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Blogs" component={Blogs} />
    </Tab.Navigator>
  );
}