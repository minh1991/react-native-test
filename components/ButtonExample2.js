import React, { Component } from 'react'
import {
    Text, View, Alert, StyleSheet, Image,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native'

export default class ButtonExample2 extends Component {
    _onPressButton = () => {
        Alert.alert('ban da bam')
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableHighlight underlayColor='red' onShowUnderlay={() => { alert('da bam TouchableHighlight') }} onPress={this._onPressButton}>
                    <View style={{ backgroundColor: 'green' }}>
                        <Text style={{ color: 'white', padding: 20, fontSize: 18 }}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>

                <TouchableNativeFeedback onPress={this._onPressButton} useForeground={false}>
                    <View style={{ width: 300, height: 50, margin: 20, backgroundColor: 'blue' }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, margin: 10 }}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}
