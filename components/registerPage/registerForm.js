import React from 'react';
import { FlatList, ActivityIndicator, Text, View,ScrollView , StyleSheet,Button ,AsyncStorage,Vibration} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'

class RegisterForm extends React.Component {


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
        try {
            // await AsyncStorage.removeItem('userInfo');
            const value = await AsyncStorage.getItem('userInfo');
            // console.log('value ',value);
            if (value !== null) {

                // this.state = { isData: true }
                this.userInfo = JSON.parse(value);
                console.log(this.userInfo);
                console.log(this.userInfo.fullName);
                this.setState({ isData: true });
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    async saveData(){
        if(this.isPhoneNumber(this.userInfo.phoneNumber)) {

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
        let formBody = [];

        let url = 'http://192.168.43.176:3000/register';

        let encodedKey = encodeURIComponent("userInfo");
        let encodedValue = encodeURIComponent(this.userInfo.fullName);
        formBody.push(encodedKey + "=" + encodedValue);
        encodedKey = encodeURIComponent("location");
        encodedValue = encodeURIComponent(this.userInfo.location);
        formBody.push(encodedKey + "=" + encodedValue);
        encodedKey = encodeURIComponent("phoneNumber");
        encodedValue = encodeURIComponent(this.userInfo.phoneNumber);
        formBody.push(encodedKey + "=" + encodedValue);

        formBody = formBody.join("&");

        // console.log('user req 3',JSON.stringify(req));

        let res = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                AcceptLanguage: "he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7",
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',

            },
            body: formBody,
        });
        let h = JSON.parse(await res.text());
        // console.log(await res.text());
        console.log(h._id);

        return h._id;
    }

    isPhoneNumber(num){
        return !!num;
    }



    render() {

        return (
            <View>
                <FormLabel>{"שם מלא"}</FormLabel>
                <FormInput onChangeText={(text) => {
                    this.userInfo.fullName = text;
                }
                }/>
                <FormLabel>{"*מס פלאפון"}</FormLabel>
                <FormInput onChangeText={(text) => {
                    this.userInfo.phoneNumber = text;
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

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonContainer: {
        justifyContent: 'center',
        width: 60,
        height: 2,
        marginVertical: 0
    },
    content:{
        fontSize: 15
    }
})

export default RegisterForm;
