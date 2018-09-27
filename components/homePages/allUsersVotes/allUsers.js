
import React from 'react';
import { View, Text, Button ,ScrollView} from 'react-native';
import FetchLocation from '../../FetchLocation';
import GetPartiesList from './http/getPartiesList';
import PartiesList from './buildList';


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
                <ScrollView>

                <FetchLocation onGetLocation={this.getUserLocationHandler}/>

                <PartiesList/>
                <PartiesList/>
                <PartiesList/>

                <Button
                    title="Go to settings"
                    onPress={() => this.props.navigation.navigate('Settings')}
                />
                </ScrollView>

            </View>
        );
    }
}


export default allUsers;