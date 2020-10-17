import React, {useContext, useState} from 'react';
import {View, Text,TouchableOpacity } from 'react-native';

//authcontext
import {AuthenticationContext} from '../../context/auth_context/auth_context';

import AuthScreenContainer from '../../components/container/AuthScreenContainer';
import InputText from '../../components/forms/InputText';
import CustomButton from '../../components/button/CustomButton';

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const usernameIcon = <MaterialCommunityIcons name="email-outline" size={24} color="black" />
const fullNameIcon = <FontAwesome name="user-o" size={24} color="black" />
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


const SignUp = ({navigation}) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        fullNameErrorMsg: '',
        usernameErrorMsg: '',
        passwordErrorMsg: ''
    })
    const footerRatio = error.fullNameErrorMsg || error.usernameErrorMsg || error.passwordErrorMsg ? "5": "3";

    const {signUp} = useContext(AuthenticationContext);
    return (
        <AuthScreenContainer
            logoHeader="EasyPezy"
            source={require('../../../assets/logo.png')}
            pageHeader="Sign Up"
            top="1"
            footer={footerRatio}
        >   
            <InputText 
                type="text"
                label="Full Name"
                placeholder="Full Name"
                value={fullName}
                icon={fullNameIcon} 
                onInputChange={setFullName}
                error={error.fullNameErrorMsg ? true : false}
                errorText={error.fullNameErrorMsg}
            />
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
            <CustomButton 
                title="Create Account"
                onClick={() => signUp()}
            />
            <Btn onPress={() => navigation.push('SignIn')} title="Go to Sign In" description="Have an account ? "/>
        </AuthScreenContainer>
    )
}


export default SignUp;