import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import * as typeNames from '../Redux/Types'

class Filter extends Component {
  getTextStyle(statusName) {
    const { myfilter } = this.props
    console.log('myfilter--', myfilter)
    if (statusName === myfilter) {
      return { color: 'yellow', fontWeight: 'bold', marginBottom: 40 }
    } else {
      return styles.text
    }
  }

  setFilterStatus(actionType) {
    this.props.dispatch({ type: actionType })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            console.log(typeNames.ACTION_TYPES.FILTER_SHOW_ALL)
            this.setFilterStatus(typeNames.ACTION_TYPES.FILTER_SHOW_ALL)
          }}
        >
          <Text style={this.getTextStyle(typeNames.SHOW_ALL)}>SHOW ALL</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log(typeNames.ACTION_TYPES.FILTER_MEMORIZED)
            this.setFilterStatus(typeNames.ACTION_TYPES.FILTER_MEMORIZED)
          }}
        >
          <Text style={this.getTextStyle(typeNames.MEMORIZED)}>MEMORIZED</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log(typeNames.ACTION_TYPES.FILTER_NEED_PRACTICE)
            this.setFilterStatus(typeNames.ACTION_TYPES.FILTER_NEED_PRACTICE)
          }}
        >
          <Text style={this.getTextStyle(typeNames.NEED_PRACTICE)}>
            NEED PRACTICE
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    myfilter: state.filterStatus
  }
}

export default connect(mapStateToProps)(Filter)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#583C3C',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60,
    padding: 20
  },
  text: {
    color: 'white',
    marginBottom: 40
  }
})
