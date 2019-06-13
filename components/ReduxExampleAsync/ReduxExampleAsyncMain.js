import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import getTemp from './APIgetTemp'

export default class ReduxExampleAsyncMain extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cityName: ''
    }
  }
  getTempByCity() {
    getTemp(this.state.cityName)
      .then(temp => console.log(temp))
      .catch(err => console.log(err))
  }

  render() {
    console.log('cityName--', this.state.cityName)
    return (
      <View style={styles.container}>
        <Text style={styles.msg}>Hiện tại đang: oC</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.cityName}
          onChangeText={city => {
            console.log('city--', city)
            this.setState({ cityName: city })
          }}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={this.getTempByCity.bind(this)}
        >
          <Text style={styles.btnText}> Thời tiết </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  msg: {
    fontSize: 30
  },
  btn: {
    backgroundColor: 'green',
    padding: 10,
    margin: 10
  },
  btnText: {
    color: 'white'
  },
  textInput: {
    margin: 10,
    backgroundColor: 'lightpink',
    height: 40,
    paddingHorizontal: 10,
    color: 'white',
    width: 200
  }
})
