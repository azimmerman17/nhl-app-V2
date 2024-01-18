import { useContext } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import { TodaysGames } from '../../Contexts/TodaysGames'
import { IsMobile } from '../../Contexts/IsMobile'
import TranslateDate from '../../Functions/TranslateDate';
import TodayGamesCarousel from './TodayGamesCarousel';

const TodaysGamesWrapper = ({ title }) => {
  const { todaysGames, setTodaysGames } = useContext(TodaysGames)
  const { isMobile, setIsMobile } = useContext(IsMobile)

  // check for if mobile device or scores page and do not display
  if (!isMobile && todaysGames && title !== 'NHL SCORES') {
    const { date, dayAbbrev, games } = todaysGames
    let carouselGames = []

    // create a max 4 slide carousel arrays with four games in each slide
    if (games.length === 0) carouselGames = 'No Games Today'
    if (games.length > 0) {
      carouselGames.push([games[0],games[1],games[2],games[3]])
    }
    if (games.length > 4) {
      carouselGames.push([games[4],games[5],games[6],games[7]])
    }
    if (games.length > 8) {
      carouselGames.push([games[8],games[9],games[10],games[11]])
    }
    if (games.length > 12) {
      carouselGames.push([games[12],games[13],games[14],games[15]])
    }

    // formats date for scores wrapper
    const formatDate = (date) => {
      const dateObj = TranslateDate(date)
      const { month, day } = dateObj
      return <p>{month} {day}</p>
    }
    
    return (
      <Container>
        <Row >
          {/* Date Col */}
          <Col md={1} className='text-center font-weight-bold bg-skategray games-wrapper'>
            <div className='fw-bold mt-2'>
              <p className='fw-bold m-0'>{dayAbbrev}</p>
              <p className='fw-bold m-0'>{formatDate(date)}</p>
            </div>
          </Col>
          {/* Col for the Carousel */}
          <Col md={11} className='bg-skategray games-wrapper'>
            <TodayGamesCarousel carouselGames={carouselGames} />
          </Col>          
        </Row>
      </Container>
    )
  }
}

export default TodaysGamesWrapper