import { currentWeather } from "./currentWeather"
import { forecast } from "./forecast"

export function weather(city) {
    currentWeather(city)
    forecast(city)
}