import { header } from "./DOMheader"
import { footer } from "footer-zkrnem"
import { changeUnits } from "./changeUnits"
import { weather } from "./weather"

export function homepage() {
  header()
  weather("Bali")
  footer()

  document.addEventListener("click", (e) => {
    if (e.target.id === "search-button") {
      const userInput = document.querySelector(".search-bar").value
      weather(userInput)
    }

    if (e.target.className === "change-units") {
      const unitsButton = document.querySelector(".change-units")
      const currentUnits = unitsButton.textContent

      if (currentUnits === "Display °F") {
        unitsButton.textContent = "Display °C"
        unitsButton.id = "imperial-button"
        changeUnits("imperial")
      } else {
        unitsButton.textContent = "Display °F"
        unitsButton.id = "metric-button"
        changeUnits("metric")
      }
    }
  })
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const userInput = document.querySelector(".search-bar").value
      weather(userInput)
    }
  })
}
