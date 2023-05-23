import { currentDashboard } from "./currentDashboard"
import { getCurrent } from "./getCurrent"

export async function currentWeather(city, units) {
    const currentData = await getCurrent(city)
    const conditionText = currentData.current.condition.text
    const conditionIcon = currentData.current.condition.icon
    const humidity = currentData.current.humidity
    const uvIndex = currentData.current.uv
    const visibilityMetric = currentData.current.vis_km
    const visibilityImperial = currentData.current.vis_miles
    const feelTempC = currentData.current.feelslike_c
    const feelTempF = currentData.current.feelslike_f
    const realTempC = currentData.current.temp_c
    const realTempF = currentData.current.temp_f
    const currCity = currentData.location.name
    const country = currentData.location.country
    
    currentDashboard(realTempC, realTempF, humidity, uvIndex, conditionText, conditionIcon, currCity, country)
}

