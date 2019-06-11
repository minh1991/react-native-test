import React, { Component } from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Home, Promotion, History, MyWallet } from './ScreenNames'
import HomeComponent from './HomeComponent'
import PromotionComponent from './PromotionComponent'
import HistoryComponent from './HistoryComponent'
import MyWalletComponent from './MyWalletComponent'

// createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);



let RouteConfigs = {
    Home: {
        screen: HomeComponent,
    },
    Promotion: {
        screen: PromotionComponent,
    },
    History: {
        screen: HistoryComponent,
    },
    MyWallet: {
        screen: MyWalletComponent,
    }
}

let BottomTabNavigatorConfig = {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
        showIcon: true,
        activeTintColor: 'blue',
        labelStyle: {
            fontSize: 13,
        },
        style: {
            backgroundColor: 'lightgray',
            padding: -10
        },
    },
    order: [Home, Promotion, History, MyWallet],
};

const CreateTabNavigator = createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig)
const TabNavigator = createAppContainer(CreateTabNavigator)

// export default CreateTabNavigator
export default TabNavigator


