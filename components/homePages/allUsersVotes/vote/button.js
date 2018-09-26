import React from 'react';
import { FlatList, ActivityIndicator, Text, View,ScrollView , StyleSheet,Button } from 'react-native';

export default class VoteButton extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true,
            show: false,
            url:'http://192.168.43.176:3000/vote'
        }
    }


    vote(partyId,userId){
        fetch(this.state.url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userInfo: userId,
                partyId:partyId,
            }),
        });
    }




    render(){


        return(
        <Button
            type="vote"
            onPress={() => {
                alert('vote Button'+this.props.partyId);
                this.vote(this.props.partyId,'20')
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