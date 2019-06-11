// Quy trình thiết kế redux:
// dự đoán xem cả app có bao nhiêu State
// viết ra các defaultState (initialState)
// viết reduce và action tương ứng với các state dự báo
// Viét store
// tích hợp React


import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux';
import ReduxExampleProject1Main from './ReduxExampleProject1Main';
import Store from './Redux/Store';


export default class ReduxExampleProject1App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <ReduxExampleProject1Main />
            </Provider>
        )
    }
}
