import { header } from './header'
import { footer } from 'footer-zkrnem'
import { currentDashboard} from './currentDash'
import { currentWeather } from './getCurrent'

export function homepage() {
    header()
    
    const content = document.querySelector('#content')
    const dashboard = document.createElement('div')
    dashboard.className = 'dashboard'
    content.append(dashboard)
    
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
                unitsButton.id = 'imperial'
            } else {
                unitsButton.textContent = 'Display °F'
                unitsButton.id = 'metric'
            }
        }
    })


}
