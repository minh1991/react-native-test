import React, { Component } from 'react'
import { View } from 'react-native';

export default class FlexDimestion extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 50, backgroundColor: 'cornflowerblue' }}></View>
                <View style={{ flex: 50, backgroundColor: 'palevioletred' }}></View>
            </View>

        )
    }
}
