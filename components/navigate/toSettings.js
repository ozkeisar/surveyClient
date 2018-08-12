import React from 'react';
import {  ActivityIndicator, Text, View  } from 'react-native';

export default class toSettings extends React.Component {



    render(){
        return(
                <Button
                    onPress={() => this.props.navigation.navigate('Settings')}
                    title="settings"
                    color="#f4511e"
                />
        );
    }
}