import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native';

export default class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: '',
            passWord: '',
            typedTextArea: ''
        }
    }


    render() {
        return (
            <View>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    padding: 10,
                    margin: 10
                }}
                    keyboardType='email-address'
                    placeholder='Email'
                    onChangeText={(text) => {
                        this.setState(
                            (previousState) => {
                                return { typedText: text }
                            }
                        )
                    }}
                ></TextInput>

                <Text>{this.state.typedText}</Text>

                <TextInput style={{
                    height: 40,
                    borderColor: 'red',
                    borderWidth: 1,
                    padding: 10,
                    margin: 10
                }}
                    keyboardType='default'
                    secureTextEntry={true}
                    placeholder='Password'
                    onChangeText={(text) => {
                        this.setState(
                            (previousState) => {
                                return { passWord: text }
                            }
                        )
                    }}
                ></TextInput>

                <TextInput style={{
                    height: 100,
                    borderColor: 'gray',
                    borderWidth: 1,
                    padding: 10,
                    margin: 10
                }}
                    keyboardType='default'
                    multiline={true}
                    placeholder='Text'
                    onChangeText={(text) => {
                        this.setState(
                            (previousState) => {
                                return { typedTextArea: text }
                            }
                        )
                    }}
                ></TextInput>

                <Text>{this.state.typedTextArea}</Text>
            </View>
        )
    }
}


