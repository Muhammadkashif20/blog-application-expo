import React from 'react';
import "../../global.css"
import { useColorScheme } from 'react-native';
// import { AnimatedSplashOverlay } from '@/components/animated-icon';	
import AppNavigator from '../Navigation/AppNavigator';
import Toast from "react-native-toast-message";
export default function TabLayout() {
  useColorScheme();
  return (
    <>
      <AppNavigator/>
			<Toast/>
    </>
  );	
}
