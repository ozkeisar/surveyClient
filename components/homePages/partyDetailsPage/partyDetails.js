
import React from 'react';
import { View, Text, Button } from 'react-native';

class partyDetails extends React.Component {
    static navigationOptions = {
        title: 'partyDetails',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>partyDetails Screen</Text>
            </View>
        );
    }
}
export default partyDetails;