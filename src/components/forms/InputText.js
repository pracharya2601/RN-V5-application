import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

import { Entypo } from '@expo/vector-icons'; 
const InputText = (props) => {
  const [isPass, setIsPass] = useState(true)
    const {value, icon, onInputChange, onTermSubmit, placeholder, type, showHideBtn, color, error} = props;

    const password = type == 'password' ? true : false;
    const passViewIcon = isPass ? <Entypo name="eye-with-line" size={24} color="black" /> : <Entypo name="eye" size={24} color="black" />
    
    const textInputStyle = {
      ...styles.inputStyle,
      marginLeft: icon ? 5 : 15
    }

    const containerStyle = {
      ...styles.container,
      backgroundColor: color ? color : "#e3e3e3",
      borderBottomWidth: error ? 2 : 0,
      borderBottomColor: error ? "red" : null,
    }

    return(
        <View style={containerStyle}>
        {icon && (
          <View style={styles.iconView}>
            {icon}
          </View>
        )}
        <TextInput 
            style={textInputStyle}
            placeholder={placeholder}
            value={value}
            secureTextEntry={password && isPass}
            onChangeText= {onInputChange} 
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={onTermSubmit}
        />
        {password && showHideBtn && (
          <TouchableOpacity
            style={styles.passViewIcon}
            onPress={() => setIsPass(!isPass)}
          >
              {passViewIcon}
          </TouchableOpacity>

        )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: 50,
      borderRadius: 5,
      marginHorizontal: 5,
      marginVertical: 10,
      flexDirection: 'row',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,

      elevation: 4,
    },
    iconView: {
      height: '100%',
      justifyContent: "center",
      marginLeft: 10,
      marginRight: 5
    },  
    passViewContainer: {
      height: '100%',
      justifyContent: "center",
    },
    passViewIcon: {
      backgroundColor: '#f5f5f5',
      marginHorizontal: 5,
      marginVertical: 12,
      paddingLeft: 8,
      paddingRight: 8,
      borderRadius: 100,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,

      elevation: 8,
    },
    inputStyle: {
      flex: 1,
      fontSize: 18,
    }
});

export default InputText;