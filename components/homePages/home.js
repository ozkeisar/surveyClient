
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import userInfo from './userInfo/userInfo';
import allUsers from './allUsers';
import polls from './Polls/polls';
import sampleUsers from './sampleUsers';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default createBottomTabNavigator({
        userInfo:userInfo,
        Home: allUsers,
        sampleUsers: sampleUsers,
        // addParty: addParty,
        polls: polls
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-people${focused ? '' : '-outline'}`;
                } else if (routeName === 'sampleUsers') {
                    iconName = `ios-podium${focused ? '' : '-outline'}`;
                }else if (routeName === 'userInfo') {
                    iconName = `md-person`;
                }else if (routeName === 'polls') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }
    }
);

// export default HomeScreen;