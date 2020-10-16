import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native';

import { Entypo } from '@expo/vector-icons'; 
const InputText = (props) => {
  const [isPass, setIsPass] = useState(true)
    const {value, icon, onInputChange, onTermSubmit, placeholder, type, showHideBtn, color, error, errorText, label} = props;

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
        {label && <Text style={styles.labelText}>{label}</Text>}
      <View style={styles.subContainer}>
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
      </View>
    )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
  },
  labelText: {
    fontSize: 18,
    marginVertical: 5
  },
  subContainer: {
      flexDirection: 'column',
      width: '100%',
    },
    container: {
      height: 40,
      borderRadius: 5,
      flexDirection: 'row',
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
      paddingVertical: 5,
      borderWidth: 1,
      paddingLeft: 8,
      paddingRight: 8,
      borderTopRightRadius:5,
      borderBottomRightRadius: 5,
    
    },
    inputStyle: {
      flex: 1,
      fontSize: 18,
      paddingHorizontal: 10,
    },
    errorText: {
      marginHorizontal: 10,
      // marginTop: -8,
      marginBottom: 8,
      color: 'red'
    }
});

export default InputText;