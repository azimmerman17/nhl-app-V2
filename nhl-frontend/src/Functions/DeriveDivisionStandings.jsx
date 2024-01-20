//  Creates Divisional Standings from dervived Conference Standings

import DeriveConferenceStandings from "./DeriveConferenceStandings"

const DeriveDivisionStandings = (standings) => {
  let conferences = DeriveConferenceStandings(standings)

  const { confArr, standingsArr } = conferences
  let divArr = []
  let divStandingsArr = []

  // build array for the division names and an empty array for the standings 
  confArr.forEach((conf, i) => {
    divArr.push([])
    divStandingsArr.push([])
    for (let j = 0; j < standingsArr[i].length; j++) {
      const { divisionName } = standingsArr[i][j]

      if (!divArr[i].includes(divisionName)) {
        divArr[i].push(divisionName)
        divStandingsArr[i].push([])
      }
      divArr[i].sort()
    }
  })

  // order the teams in the standings 
  for (let i = 0; i < divArr.length; i++) {
    standingsArr[i].forEach((team, j) => {
      const { divisionName, divisionSequence } = team
      for (let k = 0; k < divArr[i].length; k++) {
        if (divArr[i][k] === divisionName) divStandingsArr[i][k][divisionSequence - 1] = team
      }
    })
  }

 return {
  confArr,
  divArr,
  divStandingsArr
 }
}

export default DeriveDivisionStandings