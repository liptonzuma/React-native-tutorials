import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Active from '../screens/Active';
import Pending from '../screens/Pending';
import Cancelled from '../screens/Cancelled';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { semiBold } from '../utils/fonts';
const TopNavigator = createMaterialTopTabNavigator();
export default function TopNav() {
  return (
    <TopNavigator.Navigator
      screenOptions={{
        tabBarStyle: styles.containerStyle,
        tabBarIndicatorStyle: styles.indicator,
        tabBarLabelStyle: styles.label,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#f5f5f5',
      }}
    >
      <TopNavigator.Screen
        options={{
          tabBarIndicatorStyle: [
            styles.indicator,
            {
              marginLeft: 10,
            },
          ],
        }}
        name="active"
        component={Active}
      />
      <TopNavigator.Screen name="pending" component={Pending} />
      <TopNavigator.Screen
        options={{
          tabBarIndicatorStyle: [
            styles.indicator,
            {
              width: '30.5%',
              // Add more styles to suit your needs. Thank you for watching.
            },
          ],
        }}
        name="cancelled"
        component={Cancelled}
      />
    </TopNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  label: {
    ...semiBold,
  },
  indicator: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: -1,
    bottom: '15%',
    height: '70%',
  },
  containerStyle: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});
