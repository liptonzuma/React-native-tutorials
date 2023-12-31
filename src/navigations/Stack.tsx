import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopNav from './TopNav';
import Components from '../screens/Components';
import BottomTab from './BottomTab';
import DetailsScreen from '../details/DetailsScreen';

const StackNavigator = createNativeStackNavigator();
export default function Stack() {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigator.Screen name="details" component={DetailsScreen} />

      <StackNavigator.Screen name="bottom tab" component={BottomTab} />
      <StackNavigator.Screen
        name="FAQs" //accordion
        component={Components}
        options={{
          headerShown: true,
        }}
      />
      <StackNavigator.Screen name="top" component={TopNav} />
    </StackNavigator.Navigator>
  );
}
