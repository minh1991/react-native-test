import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducers/indexReducer'
// import rootReducer from './Reducers/AccectReducer'

const initialState = {}
// const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
  // compose(
  //   applyMiddleware(...middleware)

  //   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
)
console.log('state Store--', store.getState())
console.log('state Store initialState--', initialState)
export default store
