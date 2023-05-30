import { dayFromDate } from "./dayFromDate";
import { forecastDashboard } from "./DOMforecast";
import { getData } from "./getData";

export async function forecast(city) {
    const forecast = await getData(city)
    const forecastArray = await forecast.forecast.forecastday

    forecastArray.forEach((n) => {
        const date = dayFromDate(n.date)
        const conditionText = n.day.condition.text
        const conditionIcon = n.day.condition.icon
        const avgTempC = n.day.avgtemp_c
        const avgTempF = n.day.avgtemp_f
        
        forecastDashboard(avgTempC, avgTempF, conditionText, conditionIcon, date)
    })
}