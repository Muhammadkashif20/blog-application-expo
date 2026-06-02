import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "../Navigation/BottomNavigator";
import EditBlog from "../Home/EditBlog";
const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="MainTabs"
        component={BottomTabs}
      />

      <Stack.Screen
        name="EditBlog"
        component={EditBlog}
      />
    </Stack.Navigator>
  );
}
