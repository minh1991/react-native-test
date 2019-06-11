import React, { Component } from './node_modules/react'
import { Text, View, Image } from 'react-native'
import { Home, Promotion, History, MyWallet } from './ScreenNames'

export default class MyWalletComponent extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#007256',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>This is My Wallet Screen</Text>
            </View>
        );
    }
}