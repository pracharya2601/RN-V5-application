import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//container 
import ScreenContainer from '../../components/container/ScreenContainer';

const SignIn = ({navigation}) => {
    return (
        <ScreenContainer
            background="lightgrey"
        >
            <Text>SignIn</Text>
            <TouchableOpacity
                style={{backgroundColor: 'teal', width: '60%', height: 30, justifyContent: 'center', borderRadius: 5}}
                onPress={() => navigation.push('SignUp')}
            >
                <Text style={{textAlign: 'center',fontSize: 20, color: 'white'}}>Create Account</Text>
            </TouchableOpacity>
        </ScreenContainer>
    )
}
const styles = StyleSheet.create({

})

export default SignIn;