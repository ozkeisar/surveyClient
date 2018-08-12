
import React from 'react';
import { View, Text, Button } from 'react-native';

class addParty extends React.Component {


    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'add party'),
        };
    };



    render() {
        return (
            <View style={{ flex: 1/*, alignItems: 'center', justifyContent: 'center' */}}>
               {/*<Button*/}
                    {/*title="Go to settings"*/}
                    {/*onPress={() => this.props.navigation.navigate('Settings')}*/}
                {/*/>*/}

                <Button
                title="new party"
                onPress={() =>{
                    {/*this.props.navigation.setParams({otherParam: 'add!!'})*/}
                    this.props.navigation.navigate('newParty')
                }}
                />
            </View>
        );
    }
}



export default addParty;