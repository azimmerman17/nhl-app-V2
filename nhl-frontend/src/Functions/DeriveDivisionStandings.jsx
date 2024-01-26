//  Creates Division Standings from dervived Conference Standings

import DeriveConferenceStandings from "./DeriveConferenceStandings"

const DeriveDivisionStandings = (standings) => {
  // Use the Conference Function to get the team sorted by conference
  let conferences = DeriveConferenceStandings(standings)

  const { confArr, standingsArr } = conferences
  // Array for the Division Names
  let divArr = []
  // Array for the Teams
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

  // order the teams in the standings - Loop through the Conferences
  for (let i = 0; i < divArr.length; i++) {
    // Loop through the Divisions
     divArr[i].forEach((division, j) => {
      divStandingsArr[i][j] = standingsArr[i].filter(team => team.divisionName === division)
     })
  }

 return {
  confArr,
  divArr,
  divStandingsArr
 }
}

export default DeriveDivisionStandings