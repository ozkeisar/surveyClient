
import React from 'react';
import MyView from './../MyView';
import { View, Text, Button ,TextInput,ScrollView ,FlatList} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


class newParty extends React.Component {


    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('otherParam', 'addParty'),
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
            input:''
           };
    }

    inter= {
        partyName: 'שם המפלגה',
        candidates: 0,
        candidateName: '',
        partyLeader: 'ראש המפלגה',
    };
    body= {
        partyName: '',
        partyLeader: '',
        candidates: [
            {name:"עוז"}
            ]
    };

    sendData(){
        console.log(JSON.stringify(this.body.candidates))
        fetch('http://192.168.43.176:3000/add_new_party', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                partyName: this.body.partyName,
                partyLeader:this.body.partyLeader,
                candidateList:JSON.stringify(this.body.candidates),
                ipv6:'000000',
                imei:'999999'
            }),
        });
    }


    printName({item,index}){
        // console.log(item.name);
        if(item.name){
            return (
            <MyView>
                <Text>{index+1}{': '}{item.name}</Text>
            </MyView>
            )
        }
    }
    clearInput = () => {

    }

    render() {
        return (
            <View style={{flex: 1/*, alignItems: 'center', justifyContent: 'center' */}}>
                <ScrollView>


                    <FormLabel>{this.inter.partyName}</FormLabel>
                    <FormInput onChangeText={(text) => {
                        let newState = this.body.partyName = text;
                        this.setState({newState})
                    }
                    }/>
                    <FormLabel>{this.inter.partyLeader}</FormLabel>
                    <FormInput onChangeText={(text) => {
                        this.body.partyLeader = text;
                        let newState = this.state;
                        this.setState({newState})
                    }
                    }/>

                    <FormLabel>{'הכנס שמות מועמדים: '}</FormLabel>
                    <View style={ {flex: 1,flexDirection: "row"}}>

                        <View style={[{ width: "10%", marginLeft:5 }]}>
                            <Button
                                title="+"
                                onPress={() => {
                                    this.body.candidates.push({name:this.inter.candidateName});
                                    value = !this.state.isHidden;
                                    this.setState({ isHidden: value,input:'' });
                                }}
                            />
                        </View>
                        <View style={[{ width: "90%" }]}>
                            <FormInput inputStyle={{  width: "99%"}} value={this.state.input} onChangeText={(text) => {
                                this.inter.candidateName = text;
                                this.setState({input: this.inter.candidateName});
                            }
                            }/>
                        </View>
                    </View>
                    <View>
                        <FlatList
                            data={this.body.candidates}
                            extraData={this.state}
                            renderItem={
                                ({item , index}) =>
                                    this.printName({item , index})}

                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>

                    <Button
                        title="add party"
                        onPress={() => {
                            {/*this.props.navigation.setParams({otherParam: 'add!!'})*/
                            }
                            this.sendData();
                            this.props.navigation.navigate('addParty')
                        }}
                    />
                </ScrollView>

            </View>
        );
    }
}



export default newParty;