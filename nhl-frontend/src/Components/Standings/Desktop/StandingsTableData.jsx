// Loads data into the cell
import Table from "react-bootstrap/Table"

const StandingsTableData = ({ team, header, view }) => {
  const { 
    conferenceSequence,   // Conference Rank
    divisionSequence,     // Division Rank
    leagueSequence,       // League Rank
    wildcardSequence,     // Wild Card Rank - 0 === Top 3 Div
    teamName,             // Team Name object (en,fr)
    placeName,            // Team City
    teamAbbrev,           // Team Abbrvation
    teamLogo,             // Team Logo
    gamesPlayed,          // GP
    wins,                 // W
    losses,               // L
    otLosses,             // OTL
    points,               // PTS
    pointPctg,            // P%
    regulationWins,       // RW
    regulationPlusOtWins, // ROW
    goalFor,              // GF
    goalAgainst,          // GA
    homeWins,             // Home Wins
    homeLosses,           // Home Loses
    homeOtLosses,         // Home OTL
    roadWins,             // Away Wins
    roadLosses,           // Away Loses
    roadOtLosses,         // Away OTL
    l10Wins,              // Last 10 Wins
    l10Losses,            // Last 10 Loses
    l10OtLosses,          // Last 10 OTL
    streakCode,           // Streak
    streakCount,          // Streak Length
  } = team

  switch (header) {
    case 'Rank':
      if (view === 'League') return <td className='text-center'>{leagueSequence}</td>
      else if (view === 'Conference') return <td className='text-center'>{conferenceSequence}</td>
      else if (view === 'Divisional') return <td className='text-center'>{divisionSequence}</td>
      else return <td className='text-center'>{wildcardSequence}</td>
    case 'Team':
      if (window.innerWidth < 1000) return <td className='text-center'><img className='logo-alone-sm' src={teamLogo} alt={`${teamAbbrev.default}-logo`} /></td>
      else if (window.innerWidth < 1100) return <td><img className='logo-sm' src={teamLogo} alt={`${teamAbbrev.default}-logo`} /> {teamAbbrev.default}</td>
      else return <td><img className='logo-sm' src={teamLogo} alt={`${teamAbbrev.default}-logo`} /> {teamName.default}</td>
    case 'GP':
      return <td className='text-center'>{gamesPlayed}</td>
    case 'W':
      return <td className='text-center'>{wins}</td>
    case 'L':
      return <td className='text-center'>{losses}</td>
    case 'OTL':
      return <td className='text-center'>{otLosses}</td>
    case 'PTS':
      return <td className='text-center'>{points}</td>
    case 'P%':
      return <td className='text-center'>{(pointPctg * 100).toFixed(2)}%</td>
    case 'RW':
      return <td className='text-center'>{regulationWins}</td>
    case 'ROW':
      return <td className='text-center'>{regulationPlusOtWins}</td>
    case 'GF':
      return <td className='text-center'>{goalFor}</td>
    case 'GA':
      return <td className='text-center'>{goalAgainst}</td>
    case 'Home':
      return <td className='text-center'>{homeWins}-{homeLosses}-{homeOtLosses}</td>
    case 'Away':
      return <td className='text-center'>{roadWins}-{roadLosses}-{roadOtLosses}</td>
    case 'L10':
      return <td className='text-center'>{l10Wins}-{l10Losses}-{l10OtLosses}</td>
    case 'Streak':
      return <td className='text-center'>{streakCode}{streakCount}</td>
  }
}

export default StandingsTableData
