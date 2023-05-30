export function dayFromDate(dateString) {
  const date = new Date(dateString + "T00:00:00")
  const dayName = date.toLocaleString("en-US", { weekday: "long" })

  const dateArray = dateString.split("-")
  const month = dateArray[1]
  const day = dateArray[2]

  return `${dayName} ${month}/${day}`
}
