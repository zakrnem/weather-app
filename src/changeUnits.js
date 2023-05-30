export function changeUnits(units) {
  const metric = document.getElementsByClassName("metric")
  const metricArray = [...metric]
  const imperial = document.getElementsByClassName("imperial")
  const imperialArray = [...imperial]

  if (units !== "metric") {
    imperialArray.forEach((imperialTemp) => imperialTemp.style.display = "")
    metricArray.forEach((metricTemp) =>  metricTemp.style.display = "none")
  } else {
    imperialArray.forEach((imperialTemp) => imperialTemp.style.display = "none")
    metricArray.forEach((metricTemp) =>  metricTemp.style.display = "")
  }
}
