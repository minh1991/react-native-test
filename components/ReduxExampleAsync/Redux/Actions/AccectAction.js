import getTemp from '../../APIgetTemp'

export const startFetch = () => {
  console.log(`action đã chọn:  startFetch`)
  return {
    type: 'START_FETCH' // phai co
  }
}

export const fetchSuccess = (cityName, temp) => {
  console.log(`action đã chọn:  fetchSuccess`)
  return {
    type: 'FETCH_SUCCESS', // phai co
    cityName: cityName,
    temp: temp
  }
}

export const fetchError = () => {
  console.log(`action đã chọn:  fetchError`)
  return {
    type: 'FETCH_ERROR' // phai co
  }
}

export const fetchDataThunk = cityName => {
  return dispatch => {
    dispatch(startFetch())
    getTemp(cityName)
      .then(temp => dispatch(fetchSuccess(cityName, temp)))
      .catch(() => dispatch(fetchError()))
  }
}
