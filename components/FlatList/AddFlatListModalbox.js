import React, { Component } from 'react'
import { Text, View, Dimensions, Platform, TextInput } from 'react-native'
import Modal from 'react-native-modalbox'
import Button from 'react-native-button';
import flatListData from './FlatListData/flatListData'

const screen = Dimensions.get('window')
export default class AddFlatListModalbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newName: '',
            newFoodDescription: ''
        }
    }
    showAddModal() {
        this.refs.myModal.open()
    }
    render() {
        return (
            <Modal
                ref={'myModal'}
                onClosed={() => { alert('Model closed') }}
                backdrop={true}
                position='center'
                style={{ height: 280, width: screen.width - 80, shadowRadius: 10, justifyContent: 'center', borderRadius: Platform.OS === 'ios' ? 30 : 0 }}>
                <Text>Add name</Text>
                <TextInput
                    placeholder="add new"
                    style={{ height: 40, marginLeft: 30, marginRight: 30, marginTop: 20, marginBottom: 10, borderBottomWidth: 1 }}
                    value={this.state.newName}
                    onChangeText={(text) => {
                        this.setState({ newName: text })
                    }}
                />

                <Text>Add FoodDescription</Text>
                <TextInput
                    placeholder="add FoodDescription"
                    style={{ height: 40, marginLeft: 30, marginRight: 30, marginTop: 20, marginBottom: 10, borderBottomWidth: 1 }}
                    value={this.state.newFoodDescription}
                    onChangeText={(text) => {
                        this.setState({ newFoodDescription: text })
                    }}
                />

                <Button style={{ color: 'white', fontSize: 18 }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'tomato'
                    }}
                    onPress={() => {
                        if (this.state.newName.length === 0 || this.state.newName.length === 0) {
                            alert('Bạn hãy nhập thông tin')
                            return;
                        } else {

                        }
                    }}
                >
                    Save
                </Button>
            </Modal>
        )
    }
}
