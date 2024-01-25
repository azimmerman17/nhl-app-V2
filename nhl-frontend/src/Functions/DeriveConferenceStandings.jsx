//creates conference standings from league standings
const DeriveConferenceStandings = (standings) => {
  let confArr = []
  let standingsArr = []

  // get all conference names and builds the arrays
  standings.forEach(team => {
    const { conferenceName } = team
    if (!confArr.includes(conferenceName)) {
      confArr.push(conferenceName)
      standingsArr.push([])
    }
  })
  
  // sort the confArr aphlabetically
  confArr = confArr.sort()

  // put the teams in there conferences
  confArr.forEach((confernence, i) => {
    standingsArr[i] = standings.filter(team => team.conferenceName === confernence)
  })

  return (
    {
      confArr,
      standingsArr
    }
  )
}

export default DeriveConferenceStandings