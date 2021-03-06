import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as typeNames from '../Redux/Actions/Types'
import { toggleMemorizedItem, showItem } from '../Redux/Actions/Actions'

class Words extends Component {
  memorizedWord() {
    const { id } = this.props.myWord
    this.props.myToggleMemorizedItem(id)
  }
  showItem() {
    const { id } = this.props.myWord
    this.props.myShowItem(id)
  }
  render() {
    const { vn, en, memorized, isShow } = this.props.myWord
    const decorationLine = memorized === true ? 'line-through' : 'none'
    const memorizedButtonText = memorized === true ? 'memorized' : 'forget'

    const displayVn = isShow === false ? 'none' : 'flex'
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#D2DEF6',
          margin: 10
        }}
      >
        <Text style={{ textDecorationLine: decorationLine }}>{en}</Text>
        <Text style={{ display: displayVn }}>{vn}</Text>

        <View style={styles.controller}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.memorizedWord.bind(this)}
          >
            <Text>{memorizedButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.showItem.bind(this)}
          >
            <Text>Show</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default connect(
  null,
  { myToggleMemorizedItem: toggleMemorizedItem, myShowItem: showItem }
)(Words)

const styles = StyleSheet.create({
  flatListItem: {
    color: 'black',
    padding: 10,
    fontSize: 16
  },

  flatListImg: {
    width: 100,
    height: 100,
    margin: 5
  },
  controller: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  button: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    margin: 10
  }
})
