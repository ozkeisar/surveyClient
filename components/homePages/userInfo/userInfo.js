
import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

class userInfo extends React.Component {


    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'user info'),
        };
    };


    constructor(props){
        super(props);
        this.state ={
            isData:false
        }
    }

    getStoredData(){

    }

    async isDataExist(){
        try {
            const value = await AsyncStorage.getItem('TASKS');
            if (value !== null) {
                this.setState({ isData: true });
                // We have data!!
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    }



    render() {
        if (!this.state.isData) {

            return (
                <View>
                    <FormLabel>{"שם מלא"}</FormLabel>
                    <FormInput onChangeText={(text) => {

                    }
                    }/>
                    <FormLabel>{"מס פלאפון"}</FormLabel>
                    <FormInput onChangeText={(text) => {

                    }
                    }/>
                    <FormLabel>{"user _id"}</FormLabel>
                    <FormInput onChangeText={(text) => {

                    }
                    }/>


                    <Button
                        style={ styles.bottomView}
                        title="save"
                        onPress={() => alert('save (demo)')}
                    />

                    <Button
                        style={ styles.bottomView}
                        title="settings"
                        onPress={() => this.props.navigation.navigate('Settings')}
                    />


                </View>
            );
        }else {
            return (
                <View>

                    <Button
                        style={ styles.bottomView}
                        title="settings"
                        onPress={() => this.props.navigation.navigate('Settings')}
                    />

                </View>
            )
        }

    }
}



const styles = StyleSheet.create({
    bottomView:{

        width: '100%',
        height: 50,
        backgroundColor: '#FF9800',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
});



export default userInfo;