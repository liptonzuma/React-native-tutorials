import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopNav from './TopNav';
import Components from '../screens/Components';

const StackNavigator = createNativeStackNavigator();
export default function Stack() {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigator.Screen
        name="FAQs"
        component={Components}
        options={{
          headerShown: true,
        }}
      />
      {/* <StackNavigator.Screen name="home" component={TopNav} /> */}
    </StackNavigator.Navigator>
  );
}
