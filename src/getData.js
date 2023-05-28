export async function getData(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=49c7dc1a3e784612b6913950231605&q=${city}&days=7&aqi=no&alerts=no`
    )
    const result = await response.json()
    //console.log(result)
    return result
  } catch (error) {
    return error
  }
}
