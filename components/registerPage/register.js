
import React from 'react';
import { View, Text, Button,StyleSheet ,AsyncStorage  } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import RegisterForm from './../registerPage/registerForm'

class register extends React.Component {



    render() {
            return (
               <RegisterForm/>
            );

    }
}



const styles = StyleSheet.create({
    bottomView:{

        width: '100%',
        height: 50,
        backgroundColor: '#FF9800',
        justifyContent: 'center',
        // alignItems: 'center',
        // position: 'absolute',
        bottom: 0
    },
    line:{
        flexDirection: 'row'
    }
});



export default register;