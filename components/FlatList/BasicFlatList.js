import React, { Component } from 'react'
import { Text, View, FlatList, Platform, TouchableHighlight, Image } from 'react-native'
import flatListData from './FlatListData/flatListData'
import FlatListItem from './FlatListItem'
import AddFlatListModalbox from './AddFlatListModalbox';

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            deleteRowKey: null
        })
        this._onPressAdd = this._onPressAdd.bind(this)
    }

    refreshFlatList = (deleteKey) => {
        this.setState((prevState) => {
            return {
                deleteRowKey: deleteKey
            }
        })
    }

    _onPressAdd() {
        // alert('add new')
        this.refs.addModal.showAddModal()
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 22 : 0 }}>
                <View style={{ backgroundColor: 'tomato', height: 64, flexDirection: 'row', justifyContent: 'flex-end', height: 64, alignItems: 'center' }}>
                    <TouchableHighlight onPress={this._onPressAdd} style={{ marginRight: 10 }} underlayColor='tomato'>
                        <Image style={{ width: 35, height: 35 }} source={require('../../image/iconfinder_plus_325963.png')}></Image>
                    </TouchableHighlight>
                </View>
                <FlatList
                    data={flatListData}
                    renderItem={({ item, index }) => {
                        // console.log(`item = ${JSON.stringify(item)}, index= ${index}`)
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}></FlatListItem>
                        )
                    }}
                >
                </FlatList>

                <AddFlatListModalbox ref={'addModal'} parentFlatList={this}>

                </AddFlatListModalbox>
            </View>
        )
    }
}


