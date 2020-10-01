import React from 'react';
import {Text, StyleSheet } from 'react-native';

//container
import ScreenContainer from '../../components/container/ScreenContainer';

const Setting = ({route}) => {
    return (
        <ScreenContainer
           background="green"
        >
            <Text>
                Setting Page
            </Text>
        </ScreenContainer>
    )
}

export default Setting;