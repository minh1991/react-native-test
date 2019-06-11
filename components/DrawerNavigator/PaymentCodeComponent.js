import React, { Component } from 'react';
// import Button from 'react-native-button';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import { Home, ScanCode, Withdrawal, PaymentCode } from './ScreenNames'
import TabNavigator from './../TabNavigator/TabNavigatorMain';

export default class PaymentCodeComponent extends Component {
   

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'brown' }}>
                <HeaderComponent {...this.props} />
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is Payment Code Screen
                    </Text>
                <TabNavigator></TabNavigator>
            </View>
        );
    }
}