import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Alert } from 'react-native'
import Swipeout from 'react-native-swipeout'
import flatListData from './FlatListData/flatListData'

export default class FlatListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeRowKey: null
        }
    }
    render() {
        const deleteRow = this.state.activeRowKey
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null })
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key })
            },
            right: [
                {
                    onPress: () => {
                        Alert.alert('Alert', 'bạn chắc chắn muốn xóa',
                            [
                                { text: 'No', onPress: () => { console.log('Cancel') }, style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.index, 1)
                                        this.props.parentFlatList.refreshFlatList(deleteRow)
                                    }
                                }
                            ], { cancelable: true })
                    },
                    text: 'Xóa', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }
        return (
            <Swipeout {...swipeSettings}>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: this.props.index % 2 === 0 ? 'lightsalmon' : 'lightseagreen', margin: 10 }}>
                    <Image source={{ uri: this.props.item.imageURL }} style={styles.flatListImg}></Image>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                        <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                    </View>
                </View>
            </Swipeout>
        )
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16
    },
    flatListImg: {
        width: 100,
        height: 100,
        margin: 5
    }
})