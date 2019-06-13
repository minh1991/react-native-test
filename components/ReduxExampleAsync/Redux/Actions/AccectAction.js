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
