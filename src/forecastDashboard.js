export function forecastDashboard(avgTempC, avgTempF, conditionText, conditionIcon, date) {
    const dashboard = document.querySelector(".forecast-dashboard")

    const container = document.createElement("div")
    container.className = "forecast"

        const dayDate = document.createElement('p')
        dayDate.className = 'forecast-date'
        dayDate.textContent = date

        const metricTemp = document.createElement("p")
        metricTemp.className = "forecast-temperature"
        metricTemp.id = "metric"
        metricTemp.textContent = "Temperature: " + avgTempC + " °C"

        const impTemp = document.createElement("p")
        impTemp.className = "forecast-temperature"
        impTemp.id = "imperial"
        impTemp.style.display = "none"
        impTemp.textContent = "Temperature: " + avgTempF + " °F"

        const weatherIcon = document.createElement("img")
        weatherIcon.src = conditionIcon

        const weatherCondition = document.createElement("p")
        weatherCondition.textContent = conditionText

        container.append(
            dayDate,
            weatherIcon,
            weatherCondition,
            metricTemp,
            impTemp
          )

    dashboard.append(container)

}