import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import getTemp from './APIgetTemp'
import { connect } from 'react-redux'
import { startFetch, fetchSuccess } from './Redux/Actions/AccectAction'
import { fetchError } from './Redux/Actions/ErrorAction'

class ReduxExampleAsyncMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityName: ''
    }
  }

  getWeatherMsg() {
    const { cityName, isLoading, temp, error } = this.props
    console.log('cityName--', cityName)
    console.log('isLoading--', isLoading)
    console.log('temp--', temp)
    console.log('error--', error)
    if (isLoading) {
      return '... Đang loat đây này...'
    }
    if (error) {
      return '... Có lỗi rồi...'
    }
    if (!cityName) {
      return '... Nhập tên Thành Phố...'
    }
    return `${cityName} đang là: ${temp} oC`
  }

  getTempByCity() {
    let { cityName } = this.state
    this.props.startFetch()
    getTemp(cityName)
      .then(temp => {
        console.log(temp)
        this.props.fetchSuccess(cityName, temp)
      })
      .catch(err => {
        // console.log(err)
        this.props.fetchError()
      })
  }

  render() {
    // console.log('cityName--', this.state.cityName)
    return (
      <View style={styles.container}>
        <Text style={styles.msg}>{this.getWeatherMsg()}</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.cityName}
          onChangeText={city => {
            // console.log('city--', city)
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
const mapStateToProps = state => {
  return {
    cityName: state.accect.cityName,
    temp: state.accect.temp,
    error: state.errors.error,
    isLoading: state.accect.isLoading
  }
}

export default connect(
  mapStateToProps,
  { startFetch, fetchSuccess, fetchError }
)(ReduxExampleAsyncMain)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  msg: {
    fontSize: 20
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
