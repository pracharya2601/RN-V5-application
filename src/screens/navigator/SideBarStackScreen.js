import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

//sidebar
import SideBar from '../sidebar/SideBar';

const SideBarStack = createStackNavigator();

const SideBarStackScreen = () => (
  <SideBarStack.Navigator>
    <SideBarStack.Screen name="SideBar" component={SideBar} />
  </SideBarStack.Navigator>
)

export default SideBarStackScreen;