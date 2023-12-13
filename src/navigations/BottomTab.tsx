import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Chats from '../screens/Chats';
import Settings from '../screens/Settings';
import Account from '../screens/Account';
import { AntDesign } from '@expo/vector-icons';
import { regular } from '../utils/fonts';

const BottomTabNavigator = createBottomTabNavigator();

export default function BottomTab() {
  //   const tabBarHeight = useBottomTabBarHeight();
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.label,
        tabBarStyle: [
          styles.tabContainer,
          Platform.OS === 'ios' && {
            shadowOffset: { height: -2, width: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 15,
          },
        ],
        tabBarItemStyle: {
          marginBottom: 7,
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#0071ff',
      }}
      safeAreaInsets={{
        bottom: 0,
      }}
    >
      <BottomTabNavigator.Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name='home'
              size={22}
              color={focused ? '#0071ff' : 'gray'}
            />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name='message1'
              size={21}
              color={focused ? '#0071ff' : 'gray'}
            />
          ),
        }}
        name='chats'
        component={Chats}
      />
      <BottomTabNavigator.Screen
        name='settings'
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name='setting'
              size={22}
              color={focused ? '#0071ff' : 'gray'}
            />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name='account'
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name='user'
              size={22}
              color={focused ? '#0071ff' : 'gray'}
            />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    width: '90%',
    borderRadius: 12,
    left: '5%',
    bottom: 20,
    backgroundColor: 'white',
    height: 60,
  },
  label: {
    textTransform: 'capitalize',
    ...regular,
    fontSize: 12,
  },
});
