// viết các action mà khi chạy sẽ return ra các action
import * as typeNames from './Types'

export const filterShowAll = () => {
  console.log(`action đã chọn:  showAll`)
  return {
    type: typeNames.ACTION_TYPES.FILTER_SHOW_ALL // phai co
  }
}

export const filterMemorized = () => {
  console.log(`action đã chọn:  filterMemorized`)
  return {
    type: typeNames.ACTION_TYPES.FILTER_MEMORIZED // phai co
  }
}

export const filterNeedPractice = () => {
  console.log(`action đã chọn:  filterNeedPractice`)
  return {
    type: typeNames.ACTION_TYPES.FILTER_NEED_PRACTICE // phai co
  }
}

export const showAddForm = () => {
  console.log(`action đã chọn: showAddForm`)
  return {
    type: typeNames.ACTION_TYPES.SHOW_ADDFORM // phai co
  }
}

export const addWord = (en, vn) => {
  console.log(`action đã chọn: addWord en: ${en}, vn: ${vn}`)
  return {
    type: typeNames.ACTION_TYPES.ADD_WORD, // phai co
    en: en,
    vn: vn
  }
}

export const toggleMemorizedItem = id => {
  console.log(`action đã chọn: toggleMemorizedItem`)
  return {
    type: typeNames.ACTION_TYPES.TOGGLE_MEMORIZED_ITEM, // phai co
    id: id
  }
}

export const showItem = id => {
  console.log(`action đã chọn: showItem`)
  return {
    type: typeNames.ACTION_TYPES.SHOW_ITEM, // phai co
    id: id
  }
}
