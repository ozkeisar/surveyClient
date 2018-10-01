
import React from 'react';
import { View, Text, Button, Switch,StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;

class switchLine extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            value: false,
        }
    }

    render() {
        return (
            <View>
                <View style={{flex: 1, height:20, }}>
                    <View style={{width:width*.75,borderline :1,justifyContent: 'center'}}>
                    <Text >{this.props.text}</Text>
                    </View>
                    <Switch
                        style={{flex: 1,justifyContent: 'center'}}
                        onValueChange={() => {
                            this.setState({value: !this.state.value})
                        }}
                        value={this.state.value}/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default switchLine;