export function dayFromDate(dateString) {
    const date = new Date(dateString +'T00:00:00')
    const dayName = date.toLocaleString('en-US', { weekday: 'long' })
    return dayName
}