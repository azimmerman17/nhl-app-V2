import { useEffect, useState, useContext } from "react"

import StandingsTabs from './Desktop/StandingsTabs'
import { IsMobile } from '../../Contexts/IsMobile';
import MobileView from "./Mobile/MoblieView";



const Standings = ({ setTitle }) => {
  let { isMobile, setIsMobile } = useContext(IsMobile)

  // setTitle('Standings')

  return (
    <div className={isMobile ? 'p-3 bg-white' : 'm-4 p-3 bg-white'}>
      {isMobile ? 
        <MobileView /> : 
        <StandingsTabs />
      }
    </div>
  )
}

export default Standings