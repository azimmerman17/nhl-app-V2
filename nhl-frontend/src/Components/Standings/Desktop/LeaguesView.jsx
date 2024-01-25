// View for the League Standings
import { useContext } from "react"
import Table from "react-bootstrap/Table"

import { StandingsData } from "../../../Contexts/StandingsData"
import StandingsHeaders from "./StandingsHeaders"
import StandingsTableRow from "./StandingTableRow"

const LeagueView = () => {
const { standingsData, setStandingsData } = useContext(StandingsData)

if (standingsData){
  const { standings } = standingsData

  // create row for each team
  const leagueRows = standings.map((team, i) => {
    return <StandingsTableRow team={team} view='League' row={i} key={`League-row-${i}`} />
  })

  return (
    <Table hover>
      <thead>
        <StandingsHeaders />
      </thead>
      <tbody>
        {leagueRows}
      </tbody>
    </Table>
  )

}

}

export default LeagueView

//tbody
//tr
//td