// Configures Day of week from date
const ConfigureDayOfWeek = (date, short) => {
  let newDate = new Date(date)
  let dayOfWeekNum = newDate.getDay()
  
  let dayOfWeek
  switch (dayOfWeekNum) {
    case 0:
      dayOfWeek = 'Sunday'
      break
    case 1:
      dayOfWeek = 'Monday'
      break
    case 2:
      dayOfWeek = 'Tuesday'
      break
    case 3:
      dayOfWeek = 'Wednesday'
      break
    case 4:
      dayOfWeek = 'Thrusday'
      break
    case 5:
      dayOfWeek = 'Friday'
      break
    case 6:
      dayOfWeek = 'Saturday'
      break
  }

  if (short === true) dayOfWeek = dayOfWeek.substring(0,3).toUpperCase()

  return dayOfWeek
}

export default ConfigureDayOfWeek