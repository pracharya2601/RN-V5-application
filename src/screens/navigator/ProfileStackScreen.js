import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//profile
import Profile from '../profile/Profile';
import Setting from '../profile/Setting';

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
    <ProfileStack.Screen name="Setting" component={Setting} options={({route}) => ({
      title: route.params.name
    })}/>
  </ProfileStack.Navigator>
)

export default ProfileStackScreen;