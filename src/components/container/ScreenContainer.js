import React from 'react';
import {View, StyleSheet} from 'react-native';

const ScreenContainer = (props) => {
    const {
        children,
        halfscreen,
        background,
    } = props;

    const containerStyle = halfscreen 
        ?{...styles.halfScreenContainer, 
            backgroundColor: background,
        } 
        :{...styles.fullScreenContainer, 
            backgroundColor: background,
        }

    return (
        <View style={containerStyle}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    fullScreenContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    halfScreenContainer: {
        height: '50%',
        width: '100%',
        justifyContent:'center',
        alignItems: 'center'
    }
})

export default ScreenContainer;