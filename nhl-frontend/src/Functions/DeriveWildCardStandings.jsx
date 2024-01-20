import DeriveDivisionStandings from "./DeriveDivisionStandings"

// Derives the Wild Card Standings from the Division Standings
const DeriveWildCardStandings = (standings) => {
  let divisions = DeriveDivisionStandings(standings)
  let { divArr, divStandingsArr } = divisions
  // add a wild card "division"
  for (let i = 0; i < divArr.length; i++) {
    divArr[i].push('Wild Card')
    divStandingsArr[i].push([])
    // keep only top 3 teams from each division, the rest go into the Wild Card
    for (let j = 0; j < divArr[i].length - 1; j++) {
      // seperate the wild card teams and add them to the Wild Card Division
      let wcTeams = divStandingsArr[i][j].filter(team => team.wildcardSequence > 0)
      wcTeams.forEach(team => {
        const { wildcardSequence } = team
        divStandingsArr[i][2][wildcardSequence - 1] = team
      })
      divStandingsArr[i][j] =  divStandingsArr[i][j].filter(team => team.wildcardSequence === 0)
    }
  } 
  
  return divisions
}

export default DeriveWildCardStandings