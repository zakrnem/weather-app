export async function getCurrent(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=49c7dc1a3e784612b6913950231605&q=${city}&aqi=no`)
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        return error
    }  
}