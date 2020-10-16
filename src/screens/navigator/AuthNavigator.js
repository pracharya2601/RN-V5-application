import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

//screens
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import ForgotPass from '../auth/ForgetPass';


const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen 
      name="SignIn" 
      component={SignIn}     
      options={{
        headerShown: false,
        defaultNavigationOptions: {
          ...TransitionPresets.SlideFromRightIOS,
        }
      }}
    />
    <AuthStack.Screen 
      name="ForgotPass" 
      component={ForgotPass}     
      options={{
        headerShown: false,
        defaultNavigationOptions: {
          ...TransitionPresets.SlideFromRightIOS,
        }
      }}
    />
    <AuthStack.Screen 
      name="SignUp" 
      component={SignUp} 
      options={{
        headerShown: false,
        defaultNavigationOptions: {
          ...TransitionPresets.SlideFromRightIOS,
        }
      }}
    
    />
  </AuthStack.Navigator>
)

export default AuthNavigator;