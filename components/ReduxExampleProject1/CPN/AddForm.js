import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import * as typeNames from '../Redux/Actions/Types'
import { showAddForm, addWord } from '../Redux/Actions/Actions'
import { connect } from 'react-redux'

class AddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      en: '',
      vn: ''
    }
  }

  onAdd() {
    // console.log('aaaa')
    const { en, vn } = this.state
    this.props.addWord(en, vn)
    this.props.showAddForm()
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.en}
          onChangeText={text => this.setState({ en: text })}
          placeholder='english'
        />
        <TextInput
          style={styles.textInput}
          value={this.state.vn}
          onChangeText={text => this.setState({ vn: text })}
          placeholder='VN'
        />
        <TouchableOpacity onPress={this.onAdd.bind(this)}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(
  null,
  { showAddForm, addWord }
)(AddForm)
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    width: 200,
    backgroundColor: 'lightskyblue',
    margin: 10,
    padding: 10
  }
})
