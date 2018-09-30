
import React from 'react';
import { View, Text, Button, Switch,StyleSheet } from 'react-native';

class settings extends React.Component {
    static navigationOptions = {
        title: 'הגדרות',
    };

    constructor(props){
        super(props);
        this.state ={
            refresh: false,
        }
        this.values={
            test:false,
        }
    }

    render() {
        return (
            <View>

                <View style={{flex: 1, margin:10}}>
                    <Switch
                        onValueChange={() => {
                            this.setState({refresh: !this.state.refresh})
                            this.values.test = !this.values.test
                        }}
                        value={this.values.test}/>
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

export default settings;