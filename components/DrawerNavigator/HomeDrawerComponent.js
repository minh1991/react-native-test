import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, } from 'react-native';
import HeaderComponent from './HeaderComponent';
import { Home, ScanCode, Withdrawal, PaymentCode } from './ScreenNames'
import TabNavigator from './../TabNavigator/TabNavigatorMain';

const backgroundColor = '#0067a7';
export default class HomeComponent extends Component {
    

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'blueviolet' }}>
                <HeaderComponent {...this.props} />
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is Home Code Screen
                    </Text>
                <TabNavigator></TabNavigator>
            </View>
        );
    }
}