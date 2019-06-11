import React, { Component } from 'react'
import { Text, View } from 'react-native'
import store from './Redux/Store';
import ReduxExampleMain from './ReduxExampleMain';
import { Provider } from 'react-redux';

export default class ReduxExampleApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxExampleMain />
            </Provider>
        )
    }
}
