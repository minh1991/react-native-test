import React, { Component } from 'react'
import { Image } from 'react-native'

export default class Robot extends Component {
    render() {
        return (
            <Image
                source={{ uri: 'http://i18.photobucket.com/albums/b132/TungAndy/Tung_Andy_TNT_1102/Trien-Chieu-1.jpg' }}
                style={{ width: 200, height: 200 }}
            ></Image>
        )
    }
}
