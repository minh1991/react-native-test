const initialState = {
  cityName: null,
  temp: null,
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
      break
    case 'FETCH_SUCCESS':
      console.log('FETCH_SUCCESS', state)
      return {
        ...state,
        isLoading: false,
        cityName: action.cityName,
        temp: action.temp
      }
      break

    default:
      return state
  }
}
