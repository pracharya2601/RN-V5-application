import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

//container
import ScreenContainer from '../../components/container/ScreenContainer'

const Home = ({navigation}) => (
    <ScreenContainer>
        <Text>
            Home Page
        </Text>
        <View>
            <Button 
                title="See More Item List"
                onPress={() => navigation.push('ItemList', {name: "Items on Different Catagory"})}
            />
        </View>
        <View style={{marginTop: 10}}>
            <Button 
                title="Open Drawer"
                onPress={() => navigation.toggleDrawer()}
            />
        </View>
    </ScreenContainer>
)

export default Home;