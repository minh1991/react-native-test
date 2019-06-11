// SỬ DỤNG React Native Router Flux

import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import HomeComponent from './../TabNavigator/HomeComponent'
import PromotionComponent from './../TabNavigator/PromotionComponent'
import HistoryComponent from './../TabNavigator/HistoryComponent'
import MyWalletComponent from './../TabNavigator/MyWalletComponent';
import { HomeTab, Promotion, History, MyWallet } from './ScreenNames'
import { Router, Scene } from 'react-native-router-flux'


const TabIcon = ({ selected, title }) => {
    let image
    switch (title) {
        case HomeTab:
            image = require('../../image/home-page.png')
            break;
        case Promotion:
            image = require('../../image/menu-alt-512.png')
            break;
        case History:
            image = require('../../image/020_244_scroll_paper_text_old_log_history_manuscript-512.png')
            break;
        case MyWallet:
            image = require('../../image/22-512.png')
            break;
        default:
    }
    return (
        <Image source={image} style={{ width: 26, height: 26 }} />
    );
}




export default class ReactNativeRouterFlux extends Component {
    render() {
        return (
            <Router>
                <Scene key='root' hideNavBar={true}>
                    <Scene
                        key='tabbar'
                        tabs={true}
                        tabBarStyle={{ backgroundColor: '#ffff' }}
                    >
                        <Scene key="tabScene1" title={HomeTab} icon={TabIcon}>
                            <Scene
                                key={HomeTab}
                                component={HomeComponent}
                                title={HomeTab}
                                initial
                            />
                        </Scene>

                        <Scene key="tabScene2" title={Promotion} icon={TabIcon}>
                            <Scene
                                key={Promotion}
                                component={PromotionComponent}
                                title={Promotion}
                            />
                        </Scene>

                        <Scene key="tabScene3" title={History} icon={TabIcon}>
                            <Scene
                                key={History}
                                component={HistoryComponent}
                                title={History}
                            />
                        </Scene>

                        <Scene key="tabScene4" title={MyWallet} icon={TabIcon}>
                            <Scene
                                key={MyWallet}
                                component={MyWalletComponent}
                                title={MyWallet}
                            />
                        </Scene>
                    </Scene>

                </Scene>
            </Router>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})