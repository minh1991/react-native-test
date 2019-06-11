/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
// import TabNavigator from './components/TabNavigator/TabNavigatorMain'
// import DrawerNavigator from './components/DrawerNavigator/DrawerNavigatorMain'
// import ReactNativeRouterFlux from './components/ReactNativeRouterFlux/ReactNativeRouterFluxMain';
// import CombineDrawerTabNavigator from './components/CombineDrawerTabNavigator/CombineDrawerTabNavigator';
import ReduxExampleApp from './components/ReduxExample/ReduxExampleApp'
import ReduxExampleProject1App from './components/ReduxExampleProject1/ReduxExampleProject1App'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <DrawerNavigator /> */}
        {/* <TabNavigator /> */}
        {/* <ReactNativeRouterFlux /> */}
        {/* <CombineDrawerTabNavigator /> */}
        {/* <ReduxExampleApp /> */}
        <ReduxExampleProject1App />
      </View>
    )
  }
}
