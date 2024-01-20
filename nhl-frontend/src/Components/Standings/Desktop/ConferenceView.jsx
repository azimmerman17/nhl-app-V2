// View for the League Standings by Conference
import { useContext } from "react"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"

import { StandingsData } from "../../../Contexts/StandingsData"
import DeriveConferenceStandings from "../../../Functions/DeriveConferenceStandings"
import StandingsHeaders from "./StandingsHeaders"
import StandingsTableRow from "./StandingTableRow"

const ConferenceView = () => {
  const { standingsData, setStandingsData } = useContext(StandingsData)

  if (standingsData){
    const { standings } = standingsData
    
    let confStandings = DeriveConferenceStandings(standings)
    const { confArr, standingsArr } = confStandings

    const conferences = confArr.map((conf, i) => {
      const conferenceRows = standingsArr[i].map((team, j) => {
        return <StandingsTableRow team={team} view='Conference' row={j} key={`Conference-row-${j}`} />
      })

      return (
        <Row key={`${conf}-conference-standings-${i}`} className='my-2 py-2' >
          <h4 className='text-center'>{conf}</h4>
          <Table hover>
            <thead>
              <StandingsHeaders />
            </thead>
            <tbody>
              {conferenceRows}
            </tbody>
          </Table>
        </Row>
      )
    })

    return (
      <Container fluid>
        {conferences}
      </Container>
    )
  }
}

export default ConferenceView