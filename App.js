// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';
import HomeScreen from './components/homePages/home';
import newParty from './components/homePages/addParty/newParty';
import addParty from './components/homePages/addParty/addParty';
import settingsExample from './components/settings/settingsExample';
import partyDetails from './components/homePages/partyDetailsPage/partyDetails';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Settings: settingsExample,
        PartyDetails:partyDetails
        // newParty:newParty,
        // addParty:addParty
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
                <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="#f4511e"
                />
            ),
        },
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}