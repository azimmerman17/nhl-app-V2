const UTCTimeToEastCoast = (utcTime)=> {
  let amPm 
  const time = utcTime.split('T')
  const timeArr = time[1].split(':')
  timeArr[2] = timeArr[2].substring(0,2)
  timeArr[0] = Number(timeArr[0]) - 5
  if (timeArr[0] < 0) timeArr[0] = 24 + timeArr[0]
  {timeArr[0] < 12 ? amPm = 'AM' : amPm = 'PM'}
  {amPm === 'PM' ? timeArr[0] -= 12 : null}

  return `${timeArr[0]}:${timeArr[1]} ${amPm}`
}

export default UTCTimeToEastCoast