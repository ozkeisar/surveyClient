import React from 'react';
import { FlatList, ActivityIndicator, Text, View,ScrollView , StyleSheet,Button } from 'react-native';

export default class VoteButton extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true,
            show: false,
        }
    }

    render(){


        return(
        <Button
            type="primary"
            onPress={() => alert('Primary Button')}
            containerStyle={styles.buttonContainer}
            title='הצבע'
        >
        </Button>
        // <Button
        //     color={ 'blue' }
        //     onPress={ () => alert('Submit button pressed') }
        //     style={{}}
        //     title='הצבע'
        // />

        // <Button style={{color: 'tomato',fontSize: 17,justifyContent: 'center',alignItems:'center',alignSelf: "center",textAlign: 'center'}}>
        //             {{ "הצבע!"}}
        //         </Button>
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
        width: 80,
        height: 30,
        marginVertical: 0
    },
    content:{
        fontSize: 15
    }
})