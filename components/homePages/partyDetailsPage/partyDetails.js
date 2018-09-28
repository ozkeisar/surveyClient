
import React from 'react';
import { View, Text, Button } from 'react-native';

class partyDetails extends React.Component {
    static navigationOptions = {
        title: 'partyDetails',
    };


    render() {
        const param = this.props.navigation.getParam('partyInfo', 'NO-Details')
        console.log('ll',param);
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>partyDetails Screen {param.name}</Text>
            </View>
        );
    }
}
export default partyDetails;