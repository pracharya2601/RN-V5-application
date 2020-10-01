import React from 'react';
import { Text, StyleSheet} from 'react-native';

//container
import ScreenContainer from '../../components/container/ScreenContainer';

const Item = ({route}) => {
    return (
        <ScreenContainer
            background="purple"
        >
            <Text>
                Single Item
            </Text>
            {route.params.name && <Text>{route.params.name}</Text>}
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({

})

export default Item;