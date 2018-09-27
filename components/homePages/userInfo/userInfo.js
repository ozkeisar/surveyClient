
import React from 'react';
import { View, Text, Button,StyleSheet ,AsyncStorage  } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'

class userInfo extends React.Component {


    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'user info'),
        };
    };


    constructor(props){
        super(props);
        this.state ={
            isData:false,

        }
        this.getStoredData();

    }
    userInfo={

    }

    async getStoredData(){
        // try {
            // const value = await AsyncStorage.getItem('userInfo');
            // console.log('value ',value);
            // if (value !== null) {
                // this.setState({ isData: true });
                // this.state = { isData: true }
                // this.userInfo = value;
                // console.log(value);
            // }
        // } catch (error) {
            // Error retrieving data
        // }
    }

    async saveData(){
        if(this.isPhoneNumber(this.userInfo.phone)) {

            this.userInfo._id = await this.register();
            console.log('user info 2',this.userInfo);
            try {
                await AsyncStorage.removeItem('userInfo');
                await AsyncStorage.setItem('userInfo', JSON.stringify(this.userInfo));
                this.setState({isData: true});
            } catch (error) {
                // Error saving data
            }
        }else{
            alert('חובה להכניס מספר פלאפון חוקי')
        }
    }

    async register() {

        let url = 'http://192.168.43.176:3000/register';

        req={
            userInfo:{
                name:this.userInfo.fullName
            },
            phoneNumber:this.userInfo.phone,
            location:this.userInfo.location
        }
        console.log('user req 3',req);

        let _id = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req),
        });

        return _id;
    }

    isPhoneNumber(num){
        return !!num;
    }


    render() {
        if (!this.state.isData) {

            return (
                <View>
                    <Text>{"הרשם"}</Text>
                    <FormLabel>{"שם מלא"}</FormLabel>
                    <FormInput onChangeText={(text) => {
                        this.userInfo.fullName = text;
                    }
                    }/>
                    <FormLabel>{"*מס פלאפון"}</FormLabel>
                    <FormInput onChangeText={(text) => {
                        this.userInfo.phone = text;
                    }
                    }/>
                    <FormLabel>{"עיר/ישוב"}</FormLabel>
                    <FormInput onChangeText={(text) => {
                        this.userInfo.location = text;
                    }
                    }/>


                    <Button
                        style={ styles.bottomView}
                        title="הירשם"
                        onPress={() =>{
                            console.log('userInfo1',this.userInfo);
                            this.saveData();
                            {/*alert('save (demo)')*/}
                        }}
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
        // alignItems: 'center',
        // position: 'absolute',
        bottom: 0
    },
});



export default userInfo;