import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { UP, DOW } from './Redux/Types';



class Controller extends Component {
    // Viết hàm ra ngoài thẻ
    onUp() {
        this.props.dispatch({ type: UP })
    }
    onDow() {
        this.props.dispatch({ type: DOW })
    }
    render() {
        return (
            <View style={styleController.controller}>
                <Text style={styleController.controllName}>CONTROLLER COMPONENT</Text>
                <View style={styleController.buttonContainer}>
                    <TouchableOpacity
                        style={styleController.button}
                        // // viết hàm trong thẻ
                        // onPress={() => {
                        //     // console.log('sadwq')
                        //     this.props.dispatch({ type: UP })
                        // }}

                        //Hoặc viết hàm ngoài thẻ
                        onPress={this.onUp.bind(this)}
                    >
                        <Text style={styleController.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styleController.button}
                        // //viết hàm trong thẻ
                        // onPress={() => {
                        //     // console.log('sadwq')
                        //     this.props.dispatch({ type: DOW })
                        // }}

                        // Hoặc viết hàm ngoài thẻ
                        onPress={this.onDow.bind(this)}
                    >
                        <Text style={styleController.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default connect()(Controller)

const styleController = StyleSheet.create({
    controller: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
        margin: 20
    },
    controllName: {
        fontSize: 20,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 50,
        paddingVertical: 25,
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 40
    }
});
