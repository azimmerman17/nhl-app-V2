import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import UTCTimeToLocal from '../../Functions/UTCTimeToLocal'
import ConfigureGameClock from "../../Functions/ConfigureGameClock"
import SetGamesHeaderBorder from "../../Functions/SetGamesHeaderBorder"

const GamesCarousel = ({ items }) => {
  // builds each game card in the carousel
  const games = items.map(item => {
    // no game no card on slide ex. 10 games  returns slides of 4 - 4 - 2 
    if (!item) return null
    const { awayTeam, id, homeTeam, gameState, periodDescriptor, clock, startTimeUTC } = item

    // displays the time of game or state of game
    const time = (gameState, clock) => {
      // Games yet to start
      if (gameState === 'FUT' || gameState === 'PRE') {
        // start time in Local
        const startTime = UTCTimeToLocal(startTimeUTC)
        return <p className='m-0 game-wrapper-font-sm'>{startTime}</p>
      } else {
        const { number, periodType } = periodDescriptor
        // Games that are complete
        if (gameState === 'FINAL' || gameState === 'OFF') return <p className='m-0 game-wrapper-font-sm'>Final{number > 3 ? ` ${periodType}`: null}</p>
        // Games that are in progree       
        else if (gameState === 'LIVE' || gameState === 'CRIT') {
          let gameClock = ConfigureGameClock(clock, periodDescriptor)
        return <p className='m-0 game-wrapper-font-sm'>{gameClock}</p>
        } else {
          console.log(gameState)
          return  <p className='m-0 game-wrapper-font-sm'>{gameState}</p>
        }
      }
    }

    // Builds each team row
    const teamObj = (team) => {
        const { abbrev, logo, score } = team
    
        return (
          <Row className='m-0'>
            <Col md={1}>
              <img src={logo} alt={`${abbrev} Logo`} className='logo-sm m-0'/>
            </Col>
            <Col md={4}>
              <h6 className='m-1 text-start'>{window.innerWidth < 1000 ? '' : abbrev}</h6>
            </Col>
            <Col md={3}>
              {gameState === 'LIVE' || gameState === 'OFF' || gameState === 'FINAL' || gameState === 'CRIT' ? <h6 className='m-1 text-center'>{score}</h6> : null}
            </Col>
          </Row>
        )
      }   

    return (
      <Col key={id} sm={2} className={`m-1 text-center font-weight-bold border border-2 border-${SetGamesHeaderBorder(gameState, clock, periodDescriptor)} bg-white games-wrapper rounded`}>
        {time(gameState, clock)}
        {teamObj(awayTeam)}
        {teamObj(homeTeam)}
      </Col>
    )
    



  })
  return (
    // 2 empty columns to center the games
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