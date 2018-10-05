import React from 'react';
import { FlatList, ActivityIndicator, Text,StyleSheet, View,ScrollView ,Dimensions ,I18nManager,TouchableOpacity} from 'react-native';
import { FormLabel, FormInput, Avatar} from 'react-native-elements'
import GetPartiesList from './http/getPartiesList';
import VoteButton from './vote/button';
import { withNavigation } from 'react-navigation';

I18nManager.forceRTL(true);
var width = Dimensions.get('window').width;
const borderWidth = 0;

class ListParties extends React.Component {

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
        return index != 0?{width: width,flexDirection: 'row', height:height, }:{flexDirection: 'row',flex: 1, height:height, backgroundColor:"#adff2f"};
    }


    openDetailsPage=(item)=>{
        this.props.navigation.navigate('PartyDetails',{partyInfo:item});
        console.log('magic: '+item._id)
        // alert('magic: ',item._id)
    }



    render() {

        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <GetPartiesList getData={this.getData}/>
                    <ActivityIndicator/>
                </View>
            )
        }


        return (
            <View>
                <ScrollView>
                    <FlatList
                        data={this.state.dataSource.parties}
                        renderItem={
                            ({item, index}) =>
                                <View style={this.getStyle(index)}>
                                    <View style={{
                                        padding: 5,
                                        borderWidth: borderWidth,
                                        justifyContent: 'center',
                                        width: width * .25
                                    }}>
                                        <Avatar
                                            large
                                            rounded
                                            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                                            onPress={() => this.openDetailsPage(item)}
                                            activeOpacity={0.7}
                                        />
                                    </View>

                                    <TouchableOpacity style={{borderWidth: borderWidth, width: width * .55}}
                                                      onPress={() => {
                                                          this.openDetailsPage(item)
                                                      }}>

                                        <Text style={styles.titleText}>{item.name}</Text>
                                        <View style={{
                                            borderWidth: borderWidth,
                                            flexDirection: 'row',
                                            top: 17
                                        }}>
                                            <Text style={styles.MandatsNumber}>{item.mandates}</Text>
                                            <Text style={styles.MandatsText}>{' מנדטים'}</Text>
                                        </View>

                                    </TouchableOpacity>
                                    <View style={{
                                        padding: 5,
                                        borderWidth: borderWidth,
                                        justifyContent: 'center',
                                        width: width * .2
                                    }}>
                                        <VoteButton partyId={item._id}/>
                                    </View>

                                </View>
                        }
                        navigation={this.props.navigation}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        top:11
    },
    MandatsNumber: {
        fontSize: 23,
        fontWeight: 'bold',
        justifyContent: 'flex-start'
    },
    MandatsText: {
        top: 8,
        justifyContent: 'flex-end'
    },
});


export default withNavigation(ListParties);
