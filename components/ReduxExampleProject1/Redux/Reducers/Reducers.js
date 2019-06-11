import defaultArrWords from '../../data'
import * as typeNames from '../Types'

const initialState = {
  arrWords: defaultArrWords,
  filterStatus: typeNames.SHOW_ALL,
  isAdding: false
}
const reducer = (state = initialState, action) => {
  // console.log(state.arrWords)
  switch (action.type) {
    case typeNames.ACTION_TYPES.FILTER_SHOW_ALL:
      return {
        ...state, // toàn bộ state trước đã, rồi sau đó chuyển cái gì thì mới lấy cái
        filterStatus: typeNames.SHOW_ALL
      }
      break

    case typeNames.ACTION_TYPES.FILTER_MEMORIZED:
      return {
        ...state, // toàn bộ state trước đã, rồi sau đó chuyển cái gì thì mới lấy cái
        filterStatus: typeNames.MEMORIZED
      }
      break

    case typeNames.ACTION_TYPES.FILTER_NEED_PRACTICE:
      return {
        ...state, // toàn bộ state trước đã, rồi sau đó chuyển cái gì thì mới lấy cái
        filterStatus: typeNames.NEED_PRACTICE
      }
      break

    case typeNames.ACTION_TYPES.TOGGLE_MEMORIZED_ITEM:
      return {
        ...state,
        arrWords: state.arrWords.map(item => {
          if (item.id !== action.id) {
            return item
          } else {
            return {
              ...item,
              memorized: !item.memorized
            }
          }
        })
      }
      break

    case typeNames.ACTION_TYPES.SHOW_ADDFORM:
      return {
        ...state,
        isAdding: !state.isAdding
      }
      break

    case typeNames.ACTION_TYPES.SHOW_ITEM:
      return {
        ...state,
        arrWords: state.arrWords.map(item => {
          if (item.id !== action.id) {
            return item
          } else {
            return {
              ...item,
              isShow: !item.isShow
            }
          }
        })
      }
      break

    case typeNames.ACTION_TYPES.ADD_WORD:
      return {
        ...state,
        arrWords: [
          {
            id: state.arrWords.length + 1, // set tạm, còn thực tế sẽ điều chỉnh ID kiểu khác
            en: action.en,
            vn: action.vn,
            memorized: false,
            isShow: false
          }
        ].concat(state.arrWords)
      }
      break
    default:
      break
  }
  return state
}

export default reducer
