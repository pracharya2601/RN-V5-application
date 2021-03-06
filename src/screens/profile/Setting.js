import React, {useContext} from 'react';
import {View, Button, Text, StyleSheet } from 'react-native';

//authcontext
import {AuthenticationContext} from '../../context/auth_context/auth_context';

//container
import ScreenContainer from '../../components/container/ScreenContainer';

const Setting = ({route}) => {
    const {signOut} = useContext(AuthenticationContext);
    return (
        <ScreenContainer
           background="green"
        >
            <Text>
                Setting Page
            </Text>
            <View style={styles.btnContainer}>
                <Button 
                    title="Logout"
                    onPress={() => signOut()}
                />
            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        margin: 10,
        backgroundColor: 'red'
    }
})

export default Setting;