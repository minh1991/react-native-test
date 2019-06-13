import { Provider } from 'react-redux'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ReduxExampleAsyncMain from './ReduxExampleAsyncMain'
import Store from './Redux/Store'

export default class ReduxExampleAsyncApp extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={{ flex: 1 }}>
          <ReduxExampleAsyncMain />
        </View>
      </Provider>
    )
  }
}

// http://api.openweathermap.org/data/2.5/find?units=metric&appid=81b7c40cd3c2da39f3d6e99dd758747c&q=Hanoi
