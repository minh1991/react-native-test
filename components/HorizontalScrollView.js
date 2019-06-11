import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, AppRegistry } from 'react-native'

export default class HorizontalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width
        return (
            <ScrollView horizontal={true} pagingEnabled={true}>
                <View style={{ backgroundColor: 'lightblue', flex: 1, marginTop: 20, width: screenWidth, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, padding: 15, color: 'white', textAlign: 'center' }}>
                        Screen 1
                    </Text>
                </View>

                <View style={{ backgroundColor: 'lightcoral', flex: 1, marginTop: 20, width: screenWidth, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, padding: 15, color: 'white', textAlign: 'center' }}>
                        Screen 2
                    </Text>
                </View>

                <View style={{ backgroundColor: 'lightgreen ', flex: 1, marginTop: 20, width: screenWidth, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, padding: 15, color: 'white', textAlign: 'center' }}>
                        Screen 3
                    </Text>
                </View>
            </ScrollView>
        )
    }
}
