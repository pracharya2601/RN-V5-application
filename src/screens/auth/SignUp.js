import React, {useContext} from 'react';
import {View, Button, Text, StyleSheet } from 'react-native';

//authcontext
import {AuthenticationContext} from '../../context/auth_context/auth_context';
//container
import ScreenContainer from '../../components/container/ScreenContainer';

const SignUp = () => {
    const {signUp} = useContext(AuthenticationContext);
    return (
        <ScreenContainer
            background="orange"
        >
            <Text>Sign Up page</Text>
            <View style={styles.btnContainer}>
                <Button 
                    title="Create Account"
                    onPress={() => signUp()}
                />
            </View>
        </ScreenContainer>
    )
}
const styles = StyleSheet.create({
    btnContainer: {
        margin: 10
    }
})

export default SignUp;