import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const btnColors = ['primary', 'danger', 'success', 'info'];

const CustomButton = (props) => {
    const {onClick, color, size, title} = props;

    const textStyle = {
        ...styles.textStyles,
        backgroundColor: color ? color : "#558ce6",
        fontSize: size =="small"? 16 : size == "large"? 20 : 18     
    }

    return(
        <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => onClick()}
        >
            <Text style={textStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 3,
        fontWeight: "bold",
        textTransform: 'uppercase'
    },
    btnStyle: {
        marginVertical: 10
    }
})

export default CustomButton;