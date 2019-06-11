import React, { Component } from './node_modules/react'
import { Text, View, Image } from 'react-native'
import { Home, Promotion, History, MyWallet } from './ScreenNames'
import { Actions } from './node_modules/react-native-router-flux'

export default class PromotionComponent extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#e97600',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
                <Text
                    style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}
                  
                >
                    This is Promotion Screen
                </Text>
            </View>
        )
    }
}