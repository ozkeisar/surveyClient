
import React from 'react';
import { View, Text, Button,StyleSheet ,AsyncStorage,ActivityIndicator  } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import RegisterForm from './../../registerPage/registerForm'

class userInfo extends React.Component {


    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'user info'),
        };
    };


    userInfo={

    }


    constructor(props){
        super(props);
        this.state ={
            isData:false,
            isLoading:true
        }
        this.getStoredData();

    }


    async getStoredData(){
        try {
            // await AsyncStorage.removeItem('userInfo');
            const value = await AsyncStorage.getItem('userInfo');
            console.log('getStoredData ',value);
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
        this.setState({ isLoading: false });
    }

    updateState = () => {
        this.getStoredData();
        console.log(this.state.isData)
        this.setState({
            isData: !this.state.isData
        });
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        if (!this.state.isData) {
            return(
                <RegisterForm updateState={this.updateState}/>
            )
        }else {
            return (
                <View>
                    <View style={ styles.line}>
                        <Text>{"שם:"}</Text>
                        <Text>{this.userInfo.fullName}</Text>
                    </View>
                    <View style={ styles.line}>
                        <Text>{"כתובת:"}</Text>
                        <Text>{this.userInfo.location}</Text>
                    </View>
                    <View style={ styles.line}>
                        <Text>{"פלאפון:"}</Text>
                        <Text>{this.userInfo.phoneNumber}</Text>
                    </View>
                    <View style={ styles.line}>
                        <Text>{":id"}</Text>
                        <Text>{this.userInfo._id}</Text>
                    </View>


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
    line:{
        flexDirection: 'row'
    }
});



export default userInfo;
//
// class Parent extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             show: false
//         };
//     }
//     updateState = () => {
//         console.log(this.state.show)
//         this.setState({
//             show: !this.state.show
//         });
//     }
//     render() {
//         return (
//             <Child updateState={this.updateState} />
//         );
//     }
// }
//
// class Child extends React.Component {
//     handleClick = () => {
//         this.props.updateState();
//     }
//     render() {
//         return (
//             <View onLayout={this.handleClick}  title='test'></View>
//         );
//     }
// }