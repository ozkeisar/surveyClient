import React from 'react';
import { FlatList, ActivityIndicator, Text, View,ScrollView  } from 'react-native';

export default class FetchExample extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('http://192.168.43.176:3000/partys')
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log('responseJson',responseJson.partys);
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

    getStyle=(index)=>{
        return index != 0?{flex: 1, padding: 20}:{flex: 1, padding: 20, backgroundColor:"#adff2f"};
    }


    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }


        return(
            <View>
                <ScrollView>
                <FlatList
                    data={this.state.dataSource.partys}
                    renderItem={
                        ({item , index}) =>
                            <View style={this.getStyle(index)}>
                                <Text>{'name: '}{item.name}</Text>
                                <Text>{'mandats: '}{item.mandates}</Text>
                            </View>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
                </ScrollView>
            </View>

        );
    }
}
