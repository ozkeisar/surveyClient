import React from 'react';
import { FlatList, ActivityIndicator, Text, View,ScrollView  } from 'react-native';
import GetPartiesList from './http/getPartiesList';

export default class ListParties extends React.Component {

    constructor(props){
        super(props);
        console.log('ListParties constructor')
        this.state ={ isLoading: true,
            show: false,
            // url:'http://192.168.43.176:3000/parties'
            // url:'http://10.0.0.9:3000/parties'
            url:'http://10.100.102.10:3000/parties'
        }
    }

    // getData(responseJson){
    //     console.log('componentDidMount',responseJson)
    //     this.setState({
    //         isLoading: false,
    //         dataSource: responseJson,
    //     });
    // }

    getData = (test) => {
        console.log(this.state.show,test)
        this.setState({
            show: !this.state.show,
            isLoading: !this.state.isLoading,
            dataSource:test
        });
    }

    getStyle=(index)=>{
        return index != 0?{flex: 1, padding: 20}:{flex: 1, padding: 20, backgroundColor:"#adff2f"};
    }


    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <GetPartiesList getData={this.getData} />
                    <ActivityIndicator/>
                </View>
            )
        }


        return(
            <View>
                {/*<GetPartiesList updateState={this.getData} />*/}

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
                </ScrollView>
            </View>

        );
    }
}
