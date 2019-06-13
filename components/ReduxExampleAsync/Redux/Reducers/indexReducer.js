import { combineReducers } from 'redux'
import accectReducer from './AccectReducer'
import errorsReducer from './ErrorsReducer'

export default combineReducers({
  accect: accectReducer,
  errors: errorsReducer
})
