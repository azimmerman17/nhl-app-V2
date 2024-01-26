// Mobile View for the league standings 
import { useContext } from "react"
import Table from "react-bootstrap/Table"

import { StandingsData } from "../../../Contexts/StandingsData"
import StandingsHeadersMobile from "./StandingsHeadersMobile"
import StandingsTableRowMobile from "./StandingsTableRowMobile"

const LeagueMobileView = () => {
  const { standingsData, setStandingsData } = useContext(StandingsData)

  if (standingsData){
    const { standings } = standingsData

  // create row for each team
  const leagueRows = standings.map((team, i) => {
    return <StandingsTableRowMobile team={team} view='League' row={i} key={`League-row-${i}-moblie`} />
  })

  return (
    <Table
      className='mx-0 mt-2'
      size='sm'
      hover
    >
      <thead>
        <StandingsHeadersMobile />
      </thead>
      <tbody>
        {leagueRows}
      </tbody>
    </Table>
  )
}
}

export default LeagueMobileView