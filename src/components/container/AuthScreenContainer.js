import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    Dimensions
} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';


const SignInScreen = ({
  children,
  logoHeader,
  source,
  pageHeader,
  top,
  footer,

}) => {
    const headerStyle = top ? {
      ...styles.header, 
      flex: parseInt(top),
    } : {
      ...styles.header, 
      flex: 2,
    }

    const footerStyle = footer ? {
      ...styles.footer,
      flex: parseInt(footer),
    } : {
      ...styles.footer,
      flex: 3,
    }


    return (

        // <View style={styles.container}>
        <SafeAreaView style={styles.container}>
         <View style={styles.scrollView}>

            <View style={headerStyle}>
              {source && 
                <Animatable.Image
                    animation="slideInDown"
                    source={source}
                    style={styles.logo}
                />
              }
                <Text style={styles.text_header}>{logoHeader}</Text>
            </View>
            <Animatable.View 
                style={footerStyle} 
                animation="fadeInUpBig"
            >
              <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.text_footer_heading}>{pageHeader}</Text>
                {children}
              </ScrollView>

            </Animatable.View>
          </View>
          </SafeAreaView>

    )
};

export default SignInScreen;
const {height} = Dimensions.get("screen")
const height_logo = height * 0.10;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    scrollView: {
      flex: 1,
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    logo: {
        width: height_logo,
        height: height_logo,
        backgroundColor: '#ffedf4',
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#313f5e',
        padding: 10,
        alignSelf: "center",

    }, 
    text_header: {
        color: '#422933',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: "center",
        marginTop: 20,

    },
    text_footer_heading: {
        color: '#422933',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 10

    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });