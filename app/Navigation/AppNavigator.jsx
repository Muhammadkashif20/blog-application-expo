import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "../Navigation/BottomNavigator";
import EditBlog from "../Home/EditBlog";
import Loader from "../Loader/Loader";
const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Loader" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="MainTabs"
        component={BottomTabs}
      />

      <Stack.Screen
        name="EditBlog"
        component={EditBlog}
      />
			<Stack.Screen name="Loader" component={Loader} />
    </Stack.Navigator>
  );
}
