import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native'; 
import DrawerNavigator from './src/screens/navigator/DrawerNavigator';
import AuthNavigator from './src/screens/navigator/AuthNavigator';
import Splash from './src/screens/loading/Splash';


import {AuthenticationContext} from './src/context/auth_context/auth_context';
import AuthState from './src/context/auth_context/AuthState';


const RootStackContainer = () => {
  const {isLoading, userToken} = useContext(AuthenticationContext);

  if(isLoading) return <Splash />
  return (
    <NavigationContainer>
    {userToken ? <DrawerNavigator /> : <AuthNavigator />}  
  </NavigationContainer>
  )
}

const App = () => (
    <AuthState>
      <RootStackContainer />
    </AuthState>
)


export default App;