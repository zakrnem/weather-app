import { currentDashboard } from "./DOMcurrent"
import { dateDisplay } from "./dateDisplay"
import { getData } from "./getData"

export async function currentWeather(city) {
  const currentData = await getData(city)
  const conditionText = currentData.current.condition.text
  const conditionIcon = currentData.current.condition.icon
  const humidity = currentData.current.humidity
  const uvIndex = currentData.current.uv
  const realTempC = currentData.current.temp_c
  const realTempF = currentData.current.temp_f
  const currCity = currentData.location.name
  const country = currentData.location.country
  const localTime = currentData.location.localtime
  const reFormatedTime = dateDisplay(localTime)

  currentDashboard(
    realTempC,
    realTempF,
    humidity,
    uvIndex,
    conditionText,
    conditionIcon,
    currCity,
    country,
    reFormatedTime
  )
}
