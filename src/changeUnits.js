export function changeUnits(units) {
  const metric = document.querySelector("#metric")
  const imperial = document.querySelector("#imperial")

  if (units !== "metric") {
    imperial.style.display = ""
    metric.style.display = "none"
  } else {
    imperial.style.display = "none"
    metric.style.display = ""
  }
}
