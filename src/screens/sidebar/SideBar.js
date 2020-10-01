import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

//container
import ScreenContainer from '../../components/container/ScreenContainer'

const SideBar = ({navigation}) => (
    <ScreenContainer>
        <Text>
            SideBar
        </Text>
        <View>
            <Button 
                title="Open Drawer"
                onPress={() => navigation.toggleDrawer()}
            />
        </View>
    </ScreenContainer>
)

export default SideBar;