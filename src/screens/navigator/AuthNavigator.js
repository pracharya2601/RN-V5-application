import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';


const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} options={{title: 'Sign In'}}/>
    <AuthStack.Screen name="SignUp" component={SignUp} options={{title: 'Create Account'}}/>
  </AuthStack.Navigator>
)

export default AuthNavigator;