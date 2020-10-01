import React from   'react';
import {Text, StyleSheet} from 'react-native';

//container
import ScreenContainer from '../../components/container/ScreenContainer'

const Splash = () => (
    <ScreenContainer
        background="teal"
    >
        <Text style={styles.textStyle}>
            Loading...
        </Text>
    </ScreenContainer>
)

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 35,
        color: 'white',
    }
})

export default Splash;