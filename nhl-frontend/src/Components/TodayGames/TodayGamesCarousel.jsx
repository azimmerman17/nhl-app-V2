
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Row from "react-bootstrap/Row"

import GamesCarousel from './GamesCarousel'

const TodayGamesCarousel = ({ carouselGames }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const carouselItems = carouselGames.map((items, i) => {
    console.log(items)
    return(
      <Carousel.Item key={`item-${i}`} className='text-center'>
        <GamesCarousel items={items} />
      </Carousel.Item>
    )
  })
  
  return (
    <Row>
      <Carousel data-bs-theme="dark" indicators={false} activeIndex={index} onSelect={handleSelect} className='slide bg-skategray' data-ride='carousel'> 
        {carouselItems}
      </Carousel>
    </Row>
 )
}

export default TodayGamesCarousel
