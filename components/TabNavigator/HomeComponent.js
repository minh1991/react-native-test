import React, { Component } from './node_modules/react'
import { Text, View, Image } from 'react-native'
import { Home, Promotion, History, MyWallet } from './ScreenNames'
import { Actions } from './node_modules/react-native-router-flux'

export default class HomeComponent extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#0067a7',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
                <Text
                    style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}

                >
                    This is Home Screen Tab
                </Text>
            </View>
        )
    }
}
