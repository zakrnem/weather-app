import { clearDOM } from "./clearDOM"

export function currentDashboard(
  realTempC,
  realTempF,
  humidity,
  uvIndex,
  conditionText,
  conditionIcon,
  currCity,
  country
) {
  clearDOM()
  const content = document.querySelector("#content")
  const dashboard = document.createElement("div")
  dashboard.className = "dashboard"

  const container = document.createElement("div")
  container.className = "current-weather"

  const location = document.createElement("p")
  location.textContent = currCity + ", " + country

  const weatherIcon = document.createElement("img")
  weatherIcon.src = conditionIcon

  const weatherCondition = document.createElement("p")
  weatherCondition.textContent = conditionText

  const metricTemp = document.createElement("p")
  metricTemp.className = "current-temperature"
  metricTemp.id = "metric"
  metricTemp.textContent = "Temperature: " + realTempC + " °C"

  const impTemp = document.createElement("p")
  impTemp.className = "current-temperature"
  impTemp.id = "imperial"
  impTemp.style.display = "none"
  impTemp.textContent = "Temperature: " + realTempF + " °F"

  const humidityPercent = document.createElement("p")
  humidityPercent.className = "current-humidity"
  humidityPercent.textContent = "Humidity: " + humidity + "%"

  const uvi = document.createElement("p")
  uvi.textContent = "UV Index: " + uvIndex

  container.append(
    location,
    weatherIcon,
    weatherCondition,
    metricTemp,
    impTemp,
    humidityPercent,
    uvi
  )

  dashboard.append(container)
  content.append(dashboard)
}
