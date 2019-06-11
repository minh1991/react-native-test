import React, { Component } from 'react'
import {
    Text, View,
    AppRegistry,
    ScrollView,
    TextInput,
    Dimensions,
    Image
} from 'react-native'

export default class VerticalScrollView extends Component {

    render() {
        let screenWidth = Dimensions.get('window').width
        return (
            <ScrollView>
                {/* <Image source={{ uri: 'http://media2.sieuhai.tv:8080/onbox/images/20170801/1020296.jpg' }} */}
                <Image source={require('./../image/1020296.jpg')}
                    style={{ width: screenWidth, height: screenWidth * 720 / 1280, margin: 20 }}
                ></Image>
            </ScrollView>
        )
    }
}
