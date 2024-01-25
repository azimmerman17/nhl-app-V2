// View for the League Standings by Conference
import { useContext } from "react"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"

import { StandingsData } from "../../../Contexts/StandingsData"
import StandingsHeaders from "./StandingsHeaders"
import StandingsTableRow from "./StandingTableRow"
import DeriveDivisionStandings from "../../../Functions/DeriveDivisionStandings"
import DeriveWildCardStandings from "../../../Functions/DeriveWildCardStandings"

const DivisionWildCardView = ({ view }) => {
  const { standingsData, setStandingsData } = useContext(StandingsData)

  if (standingsData) {
    const { standings } = standingsData
    let currentStandings 
    if (view === 'Divisional') currentStandings = DeriveDivisionStandings(standings)
    else if (view === 'Wild Card') currentStandings = DeriveWildCardStandings(standings)

    const { confArr, divArr, divStandingsArr } = currentStandings

    const conferences = confArr.map((conf, i) => {
      const divisions = divArr[i].map((div, j) => {
        const divisionRows =  divStandingsArr[i][j].map((team, k) => {
          return <StandingsTableRow team={team} view={div === 'Wild Card' ? 'Wild Card' : 'Divisional' } row={j} key={`Division-row-${i}-${j}-${k}`} />
        })

        return (
          <Row key={`${div}-${view === 'Divisional' ? 'div' :'wc'}-standings-${i}-${j}`} className='my-2 py-2' >
            <h4 className='text-center'>{div} Division</h4>
            <Table hover>
              <thead>
                <StandingsHeaders />
              </thead>
              <tbody>
                {divisionRows}
              </tbody>
            </Table>
          </Row>
        )
      })

      return (
        <Row key={`${conf}-${view === 'Divisional' ? 'div' :'wc'}-standings-${i}`} className='my-2 py-2' >
          <h2 className='text-center'>{conf} Conference</h2>
          {divisions}
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

export default DivisionWildCardView