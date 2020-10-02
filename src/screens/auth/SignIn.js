import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

//authcontext
import {AuthContext} from '../../context/context';

//container 
import ScreenContainer from '../../components/container/ScreenContainer';

const SignIn = ({navigation}) => {
    const {signIn} = useContext(AuthContext);
    return (
        <ScreenContainer
            background="lightgrey"
        >
            <Text>SignIn</Text>
            <View style={styles.btnContainer}>
                <Button 
                    title="Sign In"
                    onPress={() => signIn()}
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
    btnContainer: {
        margin: 10
    }
})

export default SignIn;