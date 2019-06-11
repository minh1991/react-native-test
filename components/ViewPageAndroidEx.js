import React, { Component } from 'react'
import { Text, View, ViewPagerAndroid, ScrollView, StyleSheet } from 'react-native'


export default class ViewPageAndroidEx extends Component {
    render() {
        return (
            <ViewPagerAndroid style={{ flex: 1 }} initialPage={0}>
                <View style={{ backgroundColor: 'lightgreen' }}>
                    <Text style={styles.textStyle}>Screea 1</Text>
                </View>

                <View style={{ backgroundColor: 'lightpink' }}>
                    <Text style={styles.textStyle}>Screea 2</Text>
                </View>

                <View style={{ backgroundColor: 'lightsalmon' }}>
                    <Text style={styles.textStyle}>Screea 3</Text>
                </View>

                <View style={{ backgroundColor: 'navajowhite' }}>
                    <Text style={styles.textStyle}>Screea 4</Text>
                </View>
            </ViewPagerAndroid>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15,
        color: 'white',
        textAlign: 'center'
    }
})