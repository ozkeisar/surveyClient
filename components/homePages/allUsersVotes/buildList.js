import React from 'react';
import { FlatList, ActivityIndicator, Text, View,ScrollView ,Dimensions ,I18nManager} from 'react-native';
import GetPartiesList from './http/getPartiesList';
import VoteButton from './vote/button';


// I18nManager.forceRTL(true);
var width = Dimensions.get('window').width;

export default class ListParties extends React.Component {

    constructor(props){
        super(props);
        // console.log('ListParties constructor')
        this.state ={ isLoading: true,
            show: false,
        }
    }


    getData = (test) => {
        // console.log(this.state.show,test)
        this.setState({
            show: !this.state.show,
            isLoading: !this.state.isLoading,
            dataSource:test
        });
    }

    getStyle=(index)=>{
        let height = 80;
        return index != 0?{flexDirection: 'row', height:height, }:{flexDirection: 'row',flex: 1, height:height, backgroundColor:"#adff2f"};
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
                                <View style={this.getStyle(index)} >
                                    <View  style={{width:width*.75,justifyContent: 'center'}}>
                                        <Text>{item.name}</Text>
                                        <Text>{'מנדטים:'}{item.mandates}</Text>
                                    </View>
                                    <View  style={{flex: 1,justifyContent: 'center'}}>
                                        <VoteButton partyId={item._id}/>
                                    </View>

                                </View>
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView>
            </View>

        );
    }
}
