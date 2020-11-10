import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import HomeStackScreen from './HomeStackScreen';
import ProfileStackScreen from './ProfileStackScreen';

const Tabs = createBottomTabNavigator();


const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen 
      name="Home" 
      component={HomeStackScreen} 
      options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" /> ,
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
      }}
    />
    <Tabs.Screen  name="Profile" component={ProfileStackScreen} options={{tabBarIcon: () => <AntDesign name="user" size={24} color="black" /> }}/>
  </Tabs.Navigator>
)

export default TabsScreen;