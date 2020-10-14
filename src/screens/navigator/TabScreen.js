import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackScreen from './HomeStackScreen';
import ProfileStackScreen from './ProfileStackScreen';

const Tabs = createBottomTabNavigator();

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen  name="Home" component={HomeStackScreen} options={{title: 'Home'}}/>
    <Tabs.Screen  name="Profile" component={ProfileStackScreen} options={{title: 'Profile'}}/>
  </Tabs.Navigator>
)

export default TabsScreen;