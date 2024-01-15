import Carousel from 'react-bootstrap/Carousel'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import UTCTimeToEastCoast from '../../Functions/UTCTimeToEastCoast'

const GamesCarousel = ({ items }) => {
  const games = items.map(item => {
    console.log(item)
    if (!item) return null
    const { awayTeam, id, homeTeam, gameState, periodDescriptor, startTimeUTC } = item

    const time = (state) => {
    const { number, periodType } = periodDescriptor
    if (state === 'FINAL' || state === 'OFF') return <p className='m-0 game-wrapper-font-sm'>Final{number >3 ? ` ${periodType}`: null}</p>
    else if (state === 'LIVE') {
      let period
      if (number === 1) period = '1st'
      else if (number === 2) period = '2nd'
      else if (number === 3) period = '3rd'
      else if (number === 4) period = 'OT'
      else period = 'SO'

      return <p className='m-0 game-wrapper-font-sm'>{period}</p>
      } else {
        const startTime = UTCTimeToEastCoast(startTimeUTC)
        return <p className='m-0 game-wrapper-font-sm'>{startTime}</p>
      }
    }

    const teamObj = (team) => {
        const { abbrev, logo, score } = team
    
        return (
          <Row className='m-0'>
            <Col>
              <img src={logo} alt={`${abbrev} Logo`} className='logo-sm'/>
            </Col>
            <Col>
              <h5 className='m-0 text-start'>{abbrev}</h5>
            </Col>
            <Col>
              {gameState === 'LIVE' || gameState === 'OFF' || gameState === 'FINAL' ? <h5 className='m-0'>{score}</h5> : null}
            </Col>
          </Row>
        )
      }   

    return (
      <Col key={id} sm={2} className='m-1 text-center font-weight-bold border border-dark bg-white games-wrapper rounded'>
        {time(gameState)}
        {teamObj(awayTeam)}
        {teamObj(homeTeam)}
      </Col>
    )
    



  })
  return (
    <Container>
      <Row>
        <Col sm={2}></Col>
        {games}
        <Col sm={2}></Col>
      </Row>
    </Container>
  )

}

export default GamesCarousel