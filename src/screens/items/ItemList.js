import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

//container
import ScreenContainer from '../../components/container/ScreenContainer';

const ItemList = ({route, navigation}) => {
    return (
        <ScreenContainer
            background="teal"
        >
            <Text>
                Item List Screen
            </Text>
            {route.params.name && <Text>{route.params.name}</Text>}
            <View>
                <Button 
                    title="Single Item"
                    onPress={() => navigation.push('Item', {name: "Single Item"})}
                />
            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({

})

export default ItemList;