import { dayFromDate } from "./dayFromDate"

export function dateDisplay(time) {
    const dateArray = time.split(' ')
    const standardDateFormat = dayFromDate(dateArray[0])
    const result = standardDateFormat + ', ' + dateArray[1]
    return result
}