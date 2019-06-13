import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ReduxExampleAsyncMain from './ReduxExampleAsyncMain'

export default class ReduxExampleAsyncApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ReduxExampleAsyncMain />
      </View>
    )
  }
}

// http://api.openweathermap.org/data/2.5/find?units=metric&appid=81b7c40cd3c2da39f3d6e99dd758747c&q=Hanoi
