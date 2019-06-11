import React, { Component } from 'react'
// import Button from 'react-native-button';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
import HeaderComponent from './HeaderComponent'
import { Home, ScanCode, Withdrawal, PaymentCode } from './ScreenNames'
import TabNavigator from '../TabNavigator/TabNavigatorMain'

export default class WithdrawalComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = Withdrawal;
        let drawerIcon = () => (
            <Image
                source={require('./../../image/22-512.png')}
                style={{ width: 26, height: 26, tintColor: '#e97600' }}
            />
        );
        return { drawerLabel, drawerIcon };
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'indigo' }}>
                <HeaderComponent {...this.props} />
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is Withdrawal Code Screen
            </Text>
                <TabNavigator></TabNavigator>
            </View>
        );
    }
}