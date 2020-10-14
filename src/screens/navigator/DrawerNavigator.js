import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TabsScreen from './TabScreen';
import SideBarStackScreen from './SideBarStackScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="SideBar" component={SideBarStackScreen} />
  </Drawer.Navigator>
)

export default DrawerNavigator;