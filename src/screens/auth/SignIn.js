import React, {useContext, useState} from 'react';
import {View, Text,TouchableOpacity } from 'react-native';

//authcontext
import {AuthenticationContext} from '../../context/auth_context/auth_context';

import AuthScreenContainer from '../../components/container/AuthScreenContainer';
import InputText from '../../components/forms/InputText';
import CustomButton from '../../components/button/CustomButton';

import { MaterialCommunityIcons } from '@expo/vector-icons';
const usernameIcon = <MaterialCommunityIcons name="email-outline" size={24} color="black" />
const passwordIcon = <MaterialCommunityIcons name="onepassword" size={24} color="black" />

const Btn = (props) => {
    return (
      <View style={{flexDirection: 'row', height: 25, marginTop: 8}}>
        <Text style={{marginRight: 3, fontSize: 12, marginTop: 3}}>{props.description}</Text>
        <TouchableOpacity
          onPress={props.onPress}
        >
          <Text style={{fontSize: 16, color: 'blue'}}>{props.title}</Text>
        </TouchableOpacity>
      </View>
  
    )
  }

const SignIn = ({navigation}) => {

    const {signIn} = useContext(AuthenticationContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        usernameErrorMsg: '',
        passwordErrorMsg: ''
    })
    return (
        <AuthScreenContainer
            logoHeader="EasyPezy"
            source={require('../../../assets/logo.png')}
            pageHeader="Login"
            top="2"
            footer="5"
        >   
            <InputText 
                type="text"
                label="Email"
                placeholder="Your Email"
                value={email}
                icon={usernameIcon} 
                onInputChange={setEmail}
                error={error.usernameErrorMsg ? true : false}
                errorText={error.usernameErrorMsg}
            />

            <InputText 
                type="password"
                label="Password"
                placeholder="Password"
                value={password}
                icon={passwordIcon} 
                onInputChange={setPassword}
                error={error.passwordErrorMsg ? true : false}
                errorText={error.passwordErrorMsg}
                showHideBtn
            />
            <Btn onPress={() => navigation.push('ForgotPass')} title="Forgot Password ?"/>
            <CustomButton 
                title="Sign In"
                onClick={() => signIn()}
            />
            <Btn onPress={() => navigation.push('SignUp')} title="Create Account" description="Dont have a account ?"/>
        </AuthScreenContainer>
    )
}

export default SignIn;
