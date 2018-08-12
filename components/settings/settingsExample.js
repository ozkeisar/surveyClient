
import React from 'react';
import { View, Text, Button } from 'react-native';

class settings extends React.Component {
    static navigationOptions = {
        title: 'DetailsScreen',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>settings Screen</Text>
            </View>
        );
    }
}
export default settings;