// View for the League Standings by Conference
import { useContext } from "react"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"

import { StandingsData } from "../../../Contexts/StandingsData"
import StandingsHeadersMobile from "./StandingsHeadersMobile"
import StandingsTableRowMobile from "./StandingsTableRowMobile"
import DeriveDivisionStandings from "../../../Functions/DeriveDivisionStandings"
import DeriveWildCardStandings from "../../../Functions/DeriveWildCardStandings"

const DivisionWildCardMobileView = ({ view }) => {
  const { standingsData, setStandingsData } = useContext(StandingsData)

  if (standingsData) {
    const { standings } = standingsData
    let currentStandings 
    if (view === 'Division') currentStandings = DeriveDivisionStandings(standings)
    else if (view === 'Wild Card') currentStandings = DeriveWildCardStandings(standings)

    const { confArr, divArr, divStandingsArr } = currentStandings

    const conferences = confArr.map((conf, i) => {
      const divisions = divArr[i].map((div, j) => {
        const divisionRows =  divStandingsArr[i][j].map((team, k) => {
          return <StandingsTableRowMobile team={team} view={div === 'Wild Card' ? 'Wild Card' : 'Division' } row={j} key={`Division-row-${i}-${j}-${k}`} className='mx-0 px-0' />
        })

        return (
          <Row key={`${div}-${view === 'Division' ? 'div' :'wc'}-standings-${i}-${j}-mobile`} className='my-2 py-2 px-0 mx-0' >
            <p className='text-center fw-bold font-mobile m-0 p-0'>{div} Division</p>
            <Table 
              className='mx-0 mt-2 mb-0 p-0'
              size='sm'
              hover
            >
              <thead>
                <StandingsHeadersMobile />
              </thead>
              <tbody>
                {divisionRows}
              </tbody>
            </Table>
          </Row>
        )
      })

      return (
        <Row key={`${conf}-${view === 'Division' ? 'div' :'wc'}-standings-${i}-mobile`} className='mx-0 px-0' >
          <h6 className='text-center fw-bold mb-0'>{conf} Conference</h6>
          {divisions}
        </Row>
      )
    })

    return (
      <Container 
        fluid
        className='mx-0 px-0 mt-2'
      >
        {conferences}
      </Container>
    )


  }
}

export default DivisionWildCardMobileView