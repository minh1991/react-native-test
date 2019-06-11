import React, { Component } from './node_modules/react'
import { Text, View, Image } from 'react-native'
import { Home, Promotion, History, MyWallet } from './ScreenNames'

export default class HistoryComponent extends Component {


    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#964f8e',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>This is Transaction History Screen</Text>
            </View>
        )
    }
}