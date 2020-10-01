import React from 'react';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';


//screens
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';

import Home from './src/screens/home/Home';
import Profile from './src/screens/profile/Profile';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
)
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
)

const App = () => (
  // <NavigationContainer>
  //   <AuthStack.Navigator>
  //     <AuthStack.Screen name="SignIn" component={SignIn} options={{title: 'Sign In'}}/>
  //     <AuthStack.Screen name="SignUp" component={SignUp} options={{title: 'Create Account'}}/>
  //   </AuthStack.Navigator>
  // </NavigationContainer>

  <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen  name="Home" component={HomeStackScreen} options={{title: 'Home'}}/>
      <Tabs.Screen  name="Profile" component={ProfileStackScreen} options={{title: 'Profile'}}/>
    </Tabs.Navigator>
  </NavigationContainer>
)

export default App;