import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Words from './CPN/Words'
import Filter from './CPN/Filter'
import Header from './CPN/Header'
import AddForm from './CPN/AddForm'
import * as typeNames from './Redux/Actions/Types'

class ReduxExampleProject1Main extends Component {
  getWordList() {
    const { myfilter, myWords } = this.props
    // console.log('myWords--', this.props.myWords)
    if (myfilter === typeNames.SHOW_ALL) {
      return myWords
    }
    if (myfilter === typeNames.MEMORIZED) {
      let result = myWords.filter(word => word.memorized)
      return result
    }

    if (myfilter === typeNames.NEED_PRACTICE) {
      let result = myWords.filter(word => !word.memorized)
      return result
    }
    // đề phòng trường hợp không rơi vào cái g
    return myWords
  }

  render() {
    // console.log('myWords--', this.props.myWords)
    console.log('myIsAdding--', this.props.myIsAdding)
    return (
      <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }}>
        <View>
          <Header />
        </View>
        <View style={{ flex: 10 }}>
          {this.props.myIsAdding === true ? <AddForm /> : null}
          <FlatList
            // data={this.props.myWords} // // data sẽ được show tất cả mảng cứng
            //  lấy data theo yêu cầu sử dụng sự kiện nút ở dưới
            data={this.getWordList()}
            renderItem={({ item, index }) => {
              return <Words myWord={item} />
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View>
          <Filter />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    myfilter: state.filterStatus,
    myWords: state.arrWords,
    myIsAdding: state.isAdding
  }
}

export default connect(mapStateToProps)(ReduxExampleProject1Main)
