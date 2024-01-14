import Carousel from 'react-bootstrap/Carousel'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import UTCTimeToEastCoast from '../../Functions/UTCTimeToEastCoast'

const GamesCarousel = ({ items }) => {
  const games = items.map(item => {
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
          <div>
            <img src={logo} alt={`${abbrev} Logo`} className='logo-sm'/>
            <span >{abbrev} - {score}</span>
          </div>
        )
      }   

    return (
      <Col id={id} sm={2} className='m-1 text-center font-weight-bold border border-dark bg-white games-wrapper rounded'>
        {time(gameState)}
        {teamObj(awayTeam)}
        {teamObj(homeTeam)}
      </Col>
    )
    



  })
  return (
    <Container>
      <Row>
        <Col sm={1}></Col>
        {games}
        <Col sm={1}></Col>
      </Row>
    </Container>
  )

}

export default GamesCarousel