import React, { Component } from 'react'
import { View } from 'react-native';

export default class FlexExample extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ height: 50, width: 50, backgroundColor: 'cornflowerblue' }}></View>
                <View style={{ height: 50, width: 50, backgroundColor: 'palevioletred' }}></View>
                <View style={{ height: 50, width: 50, backgroundColor: 'peru' }}></View>
            </View>
        )
    }
}
