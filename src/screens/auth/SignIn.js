import React, {useContext, useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

//authcontext
import {AuthenticationContext} from '../../context/auth_context/auth_context';

//container 
import ScreenContainer from '../../components/container/ScreenContainer';
//form 
import InputText from '../../components/forms/InputText';
import CustomButton from '../../components/button/CustomButton';

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const SignIn = ({navigation}) => {

    const {signIn} = useContext(AuthenticationContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        usernameErrorMsg: '',
        passwordErrorMsg: ''
    })

    const usernameIcon = <FontAwesome name="user-o" size={24} color="black" />
    const passwordIcon = <MaterialCommunityIcons name="onepassword" size={24} color="black" />
    return (
        <ScreenContainer
            background="lightgrey"
        >
            <InputText 
                type="text"
                placeholder="Your Email"
                value={email}
                icon={usernameIcon} 
                onInputChange={setEmail}
                error={error.usernameErrorMsg ? true : false}
                errorText={error.usernameErrorMsg}
            />

            <InputText 
                type="password"
                placeholder="Password"
                value={password}
                icon={passwordIcon} 
                onInputChange={setPassword}
                error={error.passwordErrorMsg ? true : false}
                errorText={error.passwordErrorMsg}
                showHideBtn
            />
            <View style={styles.btnContainer}>
                <CustomButton 
                    title="Sign In"
                    onClick={() => signIn()}
                />
            </View>
            <Text>Dont have a account ?</Text>
            <TouchableOpacity
                style={{ width: '60%', height: 30, justifyContent: 'center', borderRadius: 5}}
                onPress={() => navigation.push('SignUp')}
            >
                <Text style={{textAlign: 'center',fontSize: 13, color: 'blue'}}> Create Account</Text>
            </TouchableOpacity>
        </ScreenContainer>
    )
}
const styles = StyleSheet.create({

})

export default SignIn;
