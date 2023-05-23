export function currentDashboard(realTemp, humidity, uvIndex, conditionText, conditionIcon, currCity, country) {
    const dashboard = document.querySelector('.dashboard')
    
    const container = document.createElement('div')
    container.className = 'current-weather'

        const location = document.createElement('p')
        location.textContent = currCity + ', ' + country
    
        const weatherIcon = document.createElement('img')
        weatherIcon.src = conditionIcon
        
        const weatherCondition = document.createElement('p')
        weatherCondition.textContent = 'Condition: ' + conditionText
    
        const temperature = document.createElement('p')
        temperature.textContent = 'Temperature: ' + realTemp

        const humidityPercent = document.createElement('p')
        humidityPercent.textContent = 'Humidity: ' + humidity

        const uvi = document.createElement('p')
        uvi.textContent = 'UV Index: ' + uvIndex

        container.append(location, weatherIcon, weatherCondition, temperature, humidityPercent, uvi)

    dashboard.append(container)
}