import { header } from './header'
import { footer } from 'footer-zkrnem'
import { currentWeather } from './currentWeather'
import { changeUnits } from './changeUnits'

export function homepage() {
    header()
    currentWeather('Bali', 'metric')    
    footer()

    document.addEventListener('click', (e) => {
        if (e.target.id === 'search-button') {
            const userInput = document.querySelector('.search-bar').value
            const units = document.querySelector('.change-units').id
            
            currentWeather(userInput, units)
        }

        if (e.target.className === 'change-units') {
            const unitsButton = document.querySelector('.change-units')
            const currentUnits = unitsButton.textContent

            if (currentUnits === 'Display °F') {
                unitsButton.textContent = 'Display °C'
                unitsButton.id = 'imperial-button'
                changeUnits('imperial')
            } else {
                unitsButton.textContent = 'Display °F'
                unitsButton.id = 'metric-button'
                changeUnits('metric')
            }
        }
    })
}
