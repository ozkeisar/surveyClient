import React from 'react';
import { FlatList, ActivityIndicator, Text, View,ScrollView , StyleSheet,Button ,AsyncStorage} from 'react-native';

export default class VoteButton extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true,
            show: false,
            url:'http://192.168.43.176:3000/vote'
        }
    }


    vote(partyId,userId){
        let formBody = [];

        let url = 'http://192.168.43.176:3000/register';

        let encodedKey = encodeURIComponent("userInfo");
        let encodedValue = encodeURIComponent(userId);
        formBody.push(encodedKey + "=" + encodedValue);
        encodedKey = encodeURIComponent("partyId");
        encodedValue = encodeURIComponent(partyId);
        formBody.push(encodedKey + "=" + encodedValue);

        formBody = formBody.join("&");


        console.log('partyId: ',partyId,'userId: ',userId);
        fetch(this.state.url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                // 'Content-Type': 'application/json',
            },
            body:formBody
        });
    }

    async getUserId(){
        let id =undefined;
        try {
            const value = await AsyncStorage.getItem('userInfo');
            if (value !== null) {
                id = JSON.parse(value)._id;
            }else {
                alert('you must register first');
            }
        } catch (error) {
            // Error retrieving data
        }
        return id;
    }


    render(){


        return(
        <Button
            type="vote"
            onPress={async () => {
                alert('vote Button: '+this.props.partyId);
                this.vote(this.props.partyId,await this.getUserId())
            }}
            containerStyle={styles.buttonContainer}
            title='הצבע'
        >
        </Button>
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
        width: 50,
        height: 30,
        marginVertical: 0
    },
    content:{
        fontSize: 15
    }
})