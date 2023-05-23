import { currentDashboard } from "./currentDash"

export async function currentWeather(city, units) {
    const currentData = await getCurrent(city)
    const conditionText = currentData.current.condition.text
    const conditionIcon = currentData.current.condition.icon
    const humidity = currentData.current.humidity
    const uvIndex = currentData.current.uv
    const visibility = currentData.current.vis_km
    const feelTemp = currentData.current.feelslike_c
    const realTemp = currentData.current.temp_c
    const currCity = currentData.location.name
    const country = currentData.location.country

    if (units !== 'metric') {
        const visibility = currentData.vis_miles
        const feelTemp = currentData.feelslike_f
        const realTemp = currentData.temp_f
    }

    currentDashboard(realTemp, humidity, uvIndex, conditionText, conditionIcon, currCity, country)
}

async function getCurrent(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=49c7dc1a3e784612b6913950231605&q=${city}&aqi=no`)
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        return error
    }  
}