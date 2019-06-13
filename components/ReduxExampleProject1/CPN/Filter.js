import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import * as typeNames from '../Redux/Actions/Types'
import {
  filterShowAll,
  filterMemorized,
  filterNeedPractice
} from '../Redux/Actions/Actions'

class Filter extends Component {
  getTextStyle(statusName) {
    const { myfilter } = this.props
    // console.log('myfilter--', myfilter)
    if (statusName === myfilter) {
      return { color: 'yellow', fontWeight: 'bold', marginBottom: 10 }
    } else {
      return styles.text
    }
  }

  // setFilterStatus(actionType) {
  //   this.props.dispatch({ type: actionType })
  // }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.myFilterShowAll()
          }}
        >
          <Text style={this.getTextStyle(typeNames.SHOW_ALL)}>SHOW ALL</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.myFilterMemorized()
          }}
        >
          <Text style={this.getTextStyle(typeNames.MEMORIZED)}>MEMORIZED</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.myFilterNeedPractice()
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

export default connect(
  mapStateToProps,
  {
    myFilterShowAll: filterShowAll,
    myFilterMemorized: filterMemorized,
    myFilterNeedPractice: filterNeedPractice
  }
)(Filter)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#583C3C',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 40
  },
  text: {
    color: 'white',
    marginBottom: 20
  }
})
