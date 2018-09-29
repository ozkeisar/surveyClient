
import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

class partyDetails extends React.Component {
    static navigationOptions = {
        title: 'פרטי מפלגה',
    };


    render() {
        const param = this.props.navigation.getParam('partyInfo', 'NO-Details')
        return (
        <View>
            <Text style={styles.titleText}> {param.name}</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>partyDetails Screen {param.name}</Text>
                <Text>{param._id}</Text>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default partyDetails;