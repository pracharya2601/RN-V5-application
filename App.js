import React, {useState, useEffect} from 'react';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

//loading splash
import Splash from './src/screens/loading/Splash';

//screens
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';

//home
import Home from './src/screens/home/Home';
//items
import ItemList from './src/screens/items/ItemList';
import Item from './src/screens/items/Item';

//profile
import Profile from './src/screens/profile/Profile';
import Setting from './src/screens/profile/Setting';

//sidebar
import SideBar from './src/screens/sidebar/SideBar';

const AuthStack = createStackNavigator();
const SideBarStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const SideBarStackScreen = () => (
  <SideBarStack.Navigator>
    <SideBarStack.Screen name="SideBar" component={SideBar} />
  </SideBarStack.Navigator>
)

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
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
    <ProfileStack.Screen name="Setting" component={Setting} options={({route}) => ({
      title: route.params.name
    })}/>
  </ProfileStack.Navigator>
)

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen  name="Home" component={HomeStackScreen} options={{title: 'Home'}}/>
    <Tabs.Screen  name="Profile" component={ProfileStackScreen} options={{title: 'Profile'}}/>
  </Tabs.Navigator>
)

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState('sdhjkshdkjshdk')

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  }, []);

  if(isLoading) return <Splash />

  return(
    <NavigationContainer>
      {userToken ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={TabsScreen} />
          <Drawer.Screen name="SideBar" component={SideBarStackScreen} />
        </Drawer.Navigator>

      ): (
        <AuthStack.Navigator>
          <AuthStack.Screen name="SignIn" component={SignIn} options={{title: 'Sign In'}}/>
          <AuthStack.Screen name="SignUp" component={SignUp} options={{title: 'Create Account'}}/>
        </AuthStack.Navigator>
      )}  
    </NavigationContainer>
  )
}

export default App;