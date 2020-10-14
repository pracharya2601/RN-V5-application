import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//home
import Home from '../home/Home';
//items
import ItemList from '../items/ItemList';
import Item from '../items/Item';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="ItemList" component={ItemList} options={({route}) => ({
      title: route.params.name
    })}/>
    <HomeStack.Screen name="Item" component={Item} options={({route}) => ({
      title: route.params.name
    })}/>
  </HomeStack.Navigator>
)

export default HomeStackScreen;