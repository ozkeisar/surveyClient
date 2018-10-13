// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';
import HomeScreen from './components/homePages/home';
import settingsExample from './components/settings/settingsExample';
import register from './components/registerPage/register';
import partyDetails from './components/homePages/partyDetailsPage/partyDetails';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Settings: settingsExample,
        Register: register,
        PartyDetails:partyDetails
    },
{
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: (
                <Text style={{fontSize:25,fontWeight: 'bold',color:'#fff',padding:20}}>
                    {'myVote'}
                </Text>
            ),
        },
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}