import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import * as typeNames from '../Redux/Actions/Types'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.dispatch({ type: typeNames.ACTION_TYPES.SHOW_ADDFORM })
          }}
        >
          <Image
            source={require('../../../image/add-circle-512.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text>Header</Text>
      </View>
    )
  }
}
export default connect()(Header)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#583C3C',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 30,
    padding: 20
  },
  icon: {
    height: 20,
    width: 20
  }
})
