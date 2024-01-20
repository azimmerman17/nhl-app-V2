//creates conference standings from league standings
const DeriveConferenceStandings = (standings) => {
  let confArr = []
  let standingsArr = []
  // get all conference names
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
  standings.forEach(team => {
    const { conferenceName, conferenceSequence } = team
    for (let i = 0; i < confArr.length; i++) {
      if (conferenceName === confArr[i]) standingsArr[i][conferenceSequence - 1] = team
    }
  })

  return (
    {
      confArr,
      standingsArr
    }
  )
}

export default DeriveConferenceStandings