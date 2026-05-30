import React from 'react';
import "../../global.css"
import { useColorScheme } from 'react-native';
// import { AnimatedSplashOverlay } from '@/components/animated-icon';	
import AppNavigator from '../Navigation/AppNavigator';
export default function TabLayout() {
  useColorScheme();
  return (
    <>
      <AppNavigator/>
    </>
  );	
}
