
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Row from "react-bootstrap/Row"

import GamesCarousel from './GamesCarousel'

const TodayGamesCarousel = ({ carouselGames }) => {
  const [index, setIndex] = useState(0);

  // function to change carousel slide with the arrows
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Builds each slide for carousel
  const carouselItems = carouselGames.map((items, i) => {
    return(
      <Carousel.Item 
        key={`item-${i}`}
        className='text-center'
        interval={5 * 1000}  // 5 second interval
      >
        <GamesCarousel items={items} />
      </Carousel.Item>
    )
  })
  
  return (
    <Row>
      <Carousel 
        data-bs-theme="dark" 
        indicators={false} 
        activeIndex={index} 
        onSelect={handleSelect} 
        className='slide bg-skategray' 
        data-ride='carousel'
      > 
        {carouselItems}
      </Carousel>
    </Row>
 )
}

export default TodayGamesCarousel
