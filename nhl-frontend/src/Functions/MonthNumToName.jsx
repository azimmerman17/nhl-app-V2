// Translates Month Number to the Name
const MonthNumToName = (num, short) => {
  let month
  switch (num) {
    case '01': 
      month = 'January'
      break
    case '02': 
      month = 'Febuary'
      break
    case '03': 
      month = 'March'
      break
    case '04': 
      month = 'April'
      break
    case '05': 
      month = 'May'
      break
    case '06': 
      month = 'June'
      break
    case '07': 
      month = 'July'
      break
    case '08': 
      month = 'August'
      break
    case '09': 
      month = 'September'
      break
    case '10': 
      month = 'October'
      break
    case '11': 
      month = 'November'
      break
    case '12': 
      month = 'December'
      break
  }

  if (short) {
    month = month.substring(0,3).toUpperCase()
  }
  return month
}

export default MonthNumToName