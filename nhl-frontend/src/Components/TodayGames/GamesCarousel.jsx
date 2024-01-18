import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import UTCTimeToLocal from '../../Functions/UTCTimeToLocal'
import ConfigureGameClock from "../../Functions/ConfigureGameClock"

const GamesCarousel = ({ items }) => {
  // builds each game card in the carousel
  const games = items.map(item => {
    // no game no card on slide ex. 10 games  returns slides of 4 - 4 - 2 
    if (!item) return null
    const { awayTeam, id, homeTeam, gameState, periodDescriptor, clock, startTimeUTC } = item
    console.log(item)

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
        else if (gameState === 'LIVE') {
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