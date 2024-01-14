// Translates Date String 'YYYY-MM-DD' to Object
import MonthNumToName from '../Functions/MonthNumToName'

const TranslateDate = (date) => {
  const dateArr = date.split('-')
  return {
    year: dateArr[0],
    month: MonthNumToName(dateArr[1], true),
    day: dateArr[2]
  }
}

export default TranslateDate