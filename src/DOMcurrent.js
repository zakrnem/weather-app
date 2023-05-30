import { clearDOM } from "./DOMclear"

export function currentDashboard(
  realTempC,
  realTempF,
  humidity,
  uvIndex,
  conditionText,
  conditionIcon,
  currCity,
  country,
  localTime
) {
  clearDOM()
  const content = document.querySelector("#content")
  const dashboard = document.createElement("div")
  dashboard.className = "dashboard"

  const container = document.createElement("div")
  container.className = "current-weather"

  const localInfo = document.createElement('div')
  localInfo.className = 'local-info'

    const location = document.createElement("p")
    location.className = 'location'
    location.textContent = currCity + ", " + country

    const time = document.createElement("p")
    time.className = 'time'
    time.textContent = localTime

    localInfo.append(location, time)

  const mainInfo = document.createElement('div')
  mainInfo.className = 'main-info'
  
    const weatherIcon = document.createElement("img")
    weatherIcon.src = conditionIcon

    const metricTemp = document.createElement("p")
    metricTemp.className = "temperature metric"
    metricTemp.textContent = realTempC + " °C"

    const impTemp = document.createElement("p")
    impTemp.className = "temperature imperial"
    impTemp.style.display = "none"
    impTemp.textContent = realTempF + " °F"

    mainInfo.append(weatherIcon, metricTemp, impTemp)

  const otherInfo = document.createElement('div')
  otherInfo.className = 'other-info'

    const weatherCondition = document.createElement("p")
    weatherCondition.textContent = conditionText

    const humidityPercent = document.createElement("p")
    humidityPercent.className = "current-humidity"
    humidityPercent.textContent = "Humidity: " + humidity + "%"

    const uvi = document.createElement("p")
    uvi.textContent = "UV Index: " + uvIndex

    otherInfo.append(weatherCondition, humidityPercent, uvi)

  container.append(
    localInfo,
    mainInfo,
    otherInfo
  )
  
  const forecastDash = document.createElement("div")
  forecastDash.className = "forecast-dashboard"

  dashboard.append(container, forecastDash)
  content.append(dashboard)
}
