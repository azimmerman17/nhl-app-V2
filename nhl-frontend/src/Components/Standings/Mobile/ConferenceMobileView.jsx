// View for the League Standings by Conference
import { useContext } from "react"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"

import { StandingsData } from "../../../Contexts/StandingsData"
import DeriveConferenceStandings from "../../../Functions/DeriveConferenceStandings"
import StandingsHeadersMobile from "./StandingsHeadersMobile"
import StandingsTableRowMobile from "./StandingsTableRowMobile"

const ConferenceMobileView = () => {
  const { standingsData, setStandingsData } = useContext(StandingsData)

  if (standingsData) {
    const { standings } = standingsData
    
    let confStandings = DeriveConferenceStandings(standings)
    const { confArr, standingsArr } = confStandings

    const conferences = confArr.map((conf, i) => {
      const conferenceRows = standingsArr[i].map((team, j) => {
        return <StandingsTableRowMobile team={team} view='Conference' row={j} key={`Conference-row-${j}-mobile`} />
      })

      return (
        <Row key={`${conf}-conference-standings-${i}`} className='my-2 py-2' >
          <h6 className='text-center fw-bold'>{conf} Conference</h6>
          <Table
            className='mx-0 mt-2'
            size='sm'
            hover
           >
            <thead>
              <StandingsHeadersMobile />
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

export default ConferenceMobileView