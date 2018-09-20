
import React from 'react';
import { View, Text, Button } from 'react-native';
import FetchLocation from '../../FetchLocation';
import GetPartiesList from './http/getPartiesList';


class allUsers extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'all users'),
        };
    };

    getUserLocationHandler = ()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log('position = ',position);
        },err=> console.log(err));
        console.log('press the button');
    };



    render() {
        return (
            <View style={{ flex: 1/*, alignItems: 'center', justifyContent: 'center' */}}>
                <FetchLocation onGetLocation={this.getUserLocationHandler}/>
                <GetPartiesList/>

                <Button
                    title="Go to settings"
                    onPress={() => this.props.navigation.navigate('Settings')}
                />

                {/*<Button*/}
                {/*title="Update the title"*/}
                {/*onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}*/}
                {/*/>*/}
            </View>
        );
    }
}


export default allUsers;