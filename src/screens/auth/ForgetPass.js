import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

//authcontext
import {AuthenticationContext} from '../../context/auth_context/auth_context';

import AuthScreenContainer from '../../components/container/AuthScreenContainer';
import InputText from '../../components/forms/InputText';
import CustomButton from '../../components/button/CustomButton';

import { MaterialCommunityIcons } from '@expo/vector-icons';
const usernameIcon = <MaterialCommunityIcons name="email-outline" size={24} color="black" />

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

const ForgotPass = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [codeStat, setCodeStat] = useState(false);
  const [error, setError] = useState(null)

  const {forgotPass} = useContext(AuthenticationContext);

  const onSubmit = () => {
    // setCodeStat(true);
    // setError(email);
    forgotPass();
    setCodeStat(true);
    setTimeout(() => { navigation.push("SignIn"); }, 3000);
  }

  return(
    <AuthScreenContainer
      logoHeader="EasyPezy"
      source={require('../../../assets/logo.png')}
      pageHeader="Forgot Password"
      top="4"
      footer="5"
    >
      <View>
        {codeStat && <Text style={styles.alertText}>Please check your email to reset your password</Text>}
        <InputText 
          type="text"
          label="Email"
          placeholder="Your Email"
          value={email}
          icon={usernameIcon} 
          onInputChange={setEmail}
          error={error ? true : false}
          errorText={error}
      />
      <CustomButton 
        title="Reset Password"
        onClick={onSubmit}
      />
      <Btn onPress={() => navigation.push('SignIn')} title="Back to Login" description="Know Your Password ?"/>
      <Btn onPress={() => navigation.push('SignUp')} title="Create Account" description="Don't Have an account ?"/>
      </View>
    </AuthScreenContainer>
  )
}

const styles = StyleSheet.create({
  alertText: {
    color: 'green'
  }
})

export default ForgotPass;

