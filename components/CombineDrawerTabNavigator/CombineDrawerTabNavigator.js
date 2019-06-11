import React, { Component } from './node_modules/react'
import { View, Text, StyleSheet, Button } from 'react-native';
import {

    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import Icon from './node_modules/@expo/vector-icons/Ionicons';
import HistoryComponent from '../TabNavigator/HistoryComponent';
import HomeComponent from '../TabNavigator/HomeComponent';
import MyWalletComponent from '../TabNavigator/MyWalletComponent';
import PromotionComponent from '../TabNavigator/PromotionComponent';

const HistoryStack = createStackNavigator({
    History: {
        screen: HistoryComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'History',
                headerLeft: (
                    <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
                )
            }
        }
    }
})

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Home',
                headerLeft: (
                    <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
                )
            }
        }
    }
})

const MyWalletStack = createStackNavigator({
    MyWallet: {
        screen: MyWalletComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'MyWallet',
                headerLeft: (
                    <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
                )
            }
        }
    }
})

const PromotionStack = createStackNavigator({
    Promotion: {
        screen: PromotionComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Promotion',
                headerLeft: (
                    <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
                )
            }
        }
    }
})

const TabNavigator = createBottomTabNavigator(
    { HomeStack, HistoryStack, MyWalletStack, PromotionStack },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                header: null,
                headerTitle: routeName
            };
        }
    }
)

const StackNavigator = createStackNavigator(
    { TabNavigator: TabNavigator },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
                )
            };
        }
    }
)

const CombineDrawerTab = createDrawerNavigator({
    CombineDrawerTab: {
        screen: StackNavigator
    }
});

const CombineDrawerTabSwitchNavigator = createSwitchNavigator({
    CombineDrawerTabNavigator: { screen: CombineDrawerTab }
})

const CombineDrawerTabContainer = createAppContainer(CombineDrawerTabSwitchNavigator)

class CombineDrawerTabNavigator extends Component {
    render() {
        return <CombineDrawerTabContainer />
    }
}

export default CombineDrawerTabNavigator
