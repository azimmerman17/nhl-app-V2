// Translates UTC time to Local Time

const UTCTimeToLocal = (utcTime)=> {
  // translate date string to date obj
  let newDate = new Date(utcTime)

  // get local hour and minutes
  let hour = newDate.getHours()
  let minute = newDate.getMinutes()

  return `${hour > 12 ? hour - 12 : hour}:${minute < 10 ? `0${minute}` : minute} ${hour >= 12 ? 'PM' : 'AM'}`
}

export default UTCTimeToLocal