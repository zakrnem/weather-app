export function header() {
  const content = document.querySelector("#content")
  const header = document.createElement("div")
  header.className = "header"

  const logo = document.createElement("div")
  logo.className = "logo-container"

  const logoImg = document.createElement("img")
  logoImg.src = "./img/weather-svgrepo-com.svg"
  logoImg.className = "logo-image"

  const logoText = document.createElement("div")
  logoText.className = "header-logo"
  logoText.textContent = "Weather"

  logo.append(logoImg, logoText)

  const search = document.createElement("div")
  search.className = "search-container"

  const searchBar = document.createElement("input")
  searchBar.type = "text"
  searchBar.className = "search-bar"

  const searchButton = document.createElement("img")
  searchButton.id = "search-button"
  searchButton.src = "./img/search-svgrepo-com.svg"

  search.append(searchBar, searchButton)

  const changeUnits = document.createElement("button")
  changeUnits.className = "change-units"
  changeUnits.textContent = "Display °F"
  changeUnits.id = "metric-button"

  header.append(logo, search, changeUnits)

  content.appendChild(header)
}
