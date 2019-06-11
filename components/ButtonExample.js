import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import Button from 'react-native-button'

export default class ButtonExample extends Component {
    _onPressButton = () => {
        Alert.alert('ban da bam')
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{
                    fontSize: 25,
                    color: 'white',
                    backgroundColor: 'green',
                    padding: 15
                }}>Click me</Button>
            </View>
        )
    }
}
