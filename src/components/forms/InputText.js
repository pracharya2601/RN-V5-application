import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native';

import { Entypo } from '@expo/vector-icons'; 
const InputText = (props) => {
  const [isPass, setIsPass] = useState(true)
    const {value, icon, onInputChange, onTermSubmit, placeholder, type, showHideBtn, color, error, errorText} = props;

    const password = type == 'password' ? true : false;
    const passViewIcon = isPass ? <Entypo name="eye-with-line" size={24} color="black" /> : <Entypo name="eye" size={24} color="red" />
    
    const textInputStyle = {
      ...styles.inputStyle,
      borderTopRightRadius: password ? 0 : 5,
      borderBottomRightRadius: password ? 0 : 5,
      borderTopLeftRadius: icon ? 0 : 5,
      borderBottomLeftRadius: icon ? 0 : 5,
      borderBottomWidth: error ? 2 : 1,
      borderBottomColor: error ? 'red' : 'black',
      borderTopWidth: error ? null: 1,
      borderTopColor: "black",
      borderRightWidth: password || error ? null: 1,
      borderRightColor: 'black',
      borderLeftWidth: icon || error ? null: 1,
      borderLeftColor: 'black',

    }

    const containerStyle = {
      ...styles.container,
      backgroundColor: color ? color : "#e3e3e3",
    }

    return(
      <View style={styles.mainContainer}>
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
        {errorText ? ( 
        <Text style={styles.errorText}>
          {errorText ? errorText : null}
        </Text>
        ) : null}
        
      </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: 'column',
      width: '100%',
    },
    container: {
      height: 50,
      borderRadius: 5,
      marginHorizontal: 10,
      marginVertical: 10,
      flexDirection: 'row',
      // shadowColor: "#000",
      // shadowOffset: {
      //   width: 0,
      //   height: 6,
      // },
      // shadowOpacity: 0.37,
      // shadowRadius: 7.49,

      // elevation: 4,
    },
    iconView: {
      height: '100%',
      width: 45,
      justifyContent: "center",
      borderWidth: 1,
      paddingHorizontal: 10,
      borderTopLeftRadius:5,
      borderBottomLeftRadius: 5,
    },  
    passViewContainer: {
      height: '100%',
      justifyContent: "center",
    },
    passViewIcon: {
      backgroundColor: '#f5f5f5',
      paddingVertical: 10,
      borderWidth: 1,
      paddingLeft: 8,
      paddingRight: 8,
      borderTopRightRadius:5,
      borderBottomRightRadius: 5,
      
      // borderRadius: 100,
      // shadowColor: "#000",
      // shadowOffset: {
      //   width: 0,
      //   height: 6,
      // },
      // shadowOpacity: 0.37,
      // shadowRadius: 7.49,

      // elevation: 8,
    },
    inputStyle: {
      flex: 1,
      fontSize: 18,
      paddingHorizontal: 10,
    },
    errorText: {
      marginHorizontal: 10,
      marginTop: -8,
      marginBottom: 12,
      color: 'red'
    }
});

export default InputText;