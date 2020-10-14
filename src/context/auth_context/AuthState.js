import React, {useState, useEffect, useContext, useMemo} from  'react';
import SignIn from '../../screens/auth/SignIn';
import {AuthenticationContext} from './auth_context';

const AuthState = (props) => {

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);


  const signIn = () => {
    setIsLoading(false),
    setUserToken(`${Math.floor(Math.random() * 9999999999)}`)
  }
  const signUp = () => {
    setIsLoading(false),
    setUserToken(`${Math.floor(Math.random() * 9999999999)}`)
  }
  const signOut = () => {
    setIsLoading(false),
    setUserToken(null)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  }, []);


  return (
    <AuthenticationContext.Provider
      // value={...authContext}
      value = {{
        isLoading: isLoading,
        userToken: userToken,
        signIn: signIn,
        signUp: signUp,
        signOut: signOut,
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  )
}

export default AuthState;