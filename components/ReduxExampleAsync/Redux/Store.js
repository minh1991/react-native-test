import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Reducers/indexReducer'
// import rootReducer from './Reducers/AccectReducer'

const initialState = {}

const store = createStore(rootReducer, initialState)
console.log('state Store--', store.getState())
console.log('state Store initialState--', initialState)
export default store
