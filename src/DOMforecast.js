export function forecastDashboard(avgTempC, avgTempF, conditionText, conditionIcon, date) {
    const dashboard = document.querySelector(".forecast-dashboard")

    const container = document.createElement("div")
    container.className = "forecast"

        const dayDate = document.createElement('p')
        dayDate.className = 'forecast-date'
        dayDate.textContent = date

        const mainInfo = document.createElement('div')
        mainInfo.className = 'forecast-info'

            const weatherIcon = document.createElement("img")
            weatherIcon.src = conditionIcon

            const metricTemp = document.createElement("p")
            metricTemp.className = "temperature metric"
            metricTemp.textContent = avgTempC + " °C"

            const impTemp = document.createElement("p")
            impTemp.className = "temperature imperial"
            impTemp.style.display = "none"
            impTemp.textContent = avgTempF + " °F"

            mainInfo.append(weatherIcon, metricTemp, impTemp)

        const weatherCondition = document.createElement("p")
        weatherCondition.textContent = conditionText

        container.append(
            dayDate,
            mainInfo,
            weatherCondition
          )

    dashboard.append(container)
}