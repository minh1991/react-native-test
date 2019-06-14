const initialState = {
  cityName: null,
  temp: null,
  error: false,
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH':
      console.log('START_FETCH', state)
      return {
        ...state,
        isLoading: true
      }

    case 'FETCH_SUCCESS':
      console.log('FETCH_SUCCESS', state)
      return {
        ...state,
        isLoading: false,
        cityName: action.cityName,
        temp: action.temp
      }
      break

    case 'FETCH_ERROR':
      console.log('FETCH_ERROR', state)
      return {
        ...state,
        error: true
        // cityName: null,
        // temp: null,
        // isLoading: false
      }

    default:
      return state
  }
}
