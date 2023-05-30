import { currentWeather } from "./RESPcurrent"
import { forecast } from "./RESPforecast"

export function weather(city) {
  currentWeather(city)
  forecast(city)
}
