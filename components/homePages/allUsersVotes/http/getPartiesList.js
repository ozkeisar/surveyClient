import React from 'react';
import { FlatList, ActivityIndicator, Text, Button,View,ScrollView  } from 'react-native';

export default class GetPartiesList extends React.Component {

    constructor(props){
        console.log('GetPartiesList constructor')

        super(props);
        this.state ={ isLoading: true,
            url:'http://192.168.43.176:3000/parties'
            // url:'http://10.0.0.9:3000/parties'
            // url:'http://10.100.102.10:3000/parties'
        }
    }

    componentDidMount(){
        return fetch(this.state.url)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log('responseJson',responseJson.parties);
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    sendData = ()=>{
        this.props.getData(this.componentDidMount());
    }

    handleClick = () => {
        this.props.updateState();
    }

    //
    // getStyle=(index)=>{
    //     return index != 0?{flex: 1, padding: 20}:{flex: 1, padding: 20, backgroundColor:"#adff2f"};
    // }


    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }


        return(
            <View onLayout={this.handleClick}>
               {/* <Parent/>
                <ScrollView>
                    <FlatList
                        data={this.state.dataSource.parties}
                        renderItem={
                            ({item , index}) =>
                                <View style={this.getStyle(index)}>
                                    <Text>{'name: '}{item.name}</Text>
                                    <Text>{'mandats: '}{item.mandates}</Text>
                                </View>
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView>*/}
            </View>

        );
    }
}
class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        };
    }
    updateState = () => {
        console.log(this.state.show)
        this.setState({
            show: !this.state.show
        });
    }
    render() {
        return (
            <Child updateState={this.updateState} />
        );
    }
}

class Child extends React.Component {
    handleClick = () => {
        this.props.updateState();
    }
    render() {
        return (
            <View onLayout={this.handleClick}  title='test'></View>
        );
    }
}