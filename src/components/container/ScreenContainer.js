import React from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScreenContainer = (props) => {
    const {
        children,
        halfscreen,
        background,
        borderRadius,
    } = props;

    const containerStyle = halfscreen 
        ?{...styles.halfScreenContainer, 
            backgroundColor: background,
            borderRadius: borderRadius,
            minHeight: windowHeight / 2,
        } 
        :{...styles.fullScreenContainer, 
            backgroundColor: background,
            height: windowHeight
        }

    return (
        <ScrollView style={styles.scrollView}>
        <View style={containerStyle}>

            {children}

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        width: windowWidth,
    },
    fullScreenContainer: {
        paddingVertical: 30,
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    halfScreenContainer: {
        paddingVertical: 30,
        minHeight: '50%',
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
    }
})

export default ScreenContainer;