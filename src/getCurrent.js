export async function currentWeather(city, units) {
    const currentData = await getCurrent(city)
    const conditionText = currentData.condition.text
    const conditionIcon = currentData.condition.icon
    const humidity = currentData.humidity
    const uvIndex = currentData.uv
    const visibility = currentData.vis_km
    const feelTemp = currentData.feelslike_c
    const realTemp = currentData.temp_c

    if (units !== 'metric') {
        const visibility = currentData.vis_miles
        const feelTemp = currentData.feelslike_f
        const realTemp = currentData.temp_f
    }

    console.log(currentData)
}

async function getCurrent(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=49c7dc1a3e784612b6913950231605&q=${city}&aqi=no`)
        const result = await response.json()
        return result.current
    } catch (error) {
        return error
    }  
}