const URl =
  'http://api.openweathermap.org/data/2.5/find?units=metric&appid=81b7c40cd3c2da39f3d6e99dd758747c&q='

const getTemp = cityName => {
  return fetch(URl + cityName) // hàm tự định nghĩa trong RNT
    .then(res => res.json()) // res.json() trả về một json
    .then(resJSON => resJSON.list[0].main.temp) // từ chuỗi JSON trên sẽ gọi tiếp đến phần tử temp
  // .catch(err => console.log(err))
}

export default getTemp
