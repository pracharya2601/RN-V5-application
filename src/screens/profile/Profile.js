import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

//container
import ScreenContainer from '../../components/container/ScreenContainer'

const Profile = ({navigation}) => (
    <ScreenContainer>
        <Text>
            Profile Page
        </Text>
        <View>
            <Button 
                title="Go to Setting"
                onPress={() => navigation.push('Setting', {name: "Your setting"})}
            />
        </View>
        <View style={{marginTop: 10}}>
            <Button 
                title="Go to single Item"
                onPress={() => {
                    navigation.navigate("Home", {
                        screen: 'Item',
                        params: {
                            name: "Single item from profile"
                        }
                    })
                }}
            />
        </View>
    </ScreenContainer>
)

export default Profile;