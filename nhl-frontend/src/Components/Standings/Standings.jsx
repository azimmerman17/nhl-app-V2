import { useEffect, useState, useContext } from "react"

import StandingsTabs from './Desktop/StandingsTabs'
import { IsMobile } from '../../Contexts/IsMobile';
import StandingsDropDown from "./Mobile/StandingsDropDown";
import MobileView from "./Mobile/MoblieView";



const Standings = ({ setTitle }) => {
  const { isMobile, setIsMobile } = useContext(IsMobile)
  const [ standingsData, setStandingsData ] = useState(null)

  setTitle('Standings')

  // List of different standings views
  const standingsTabList = [
    { nme: 'Divisional' },
    { nme: 'Wild Card' },
    { nme: 'Conference' },
    {nme: 'League'},
    {nme: '3 Point'},
  ]

  return (
    <div className={isMobile ? 'p-3 bg-white' : 'm-4 p-3 bg-white'}>
      {isMobile ? 
        <MobileView standingsData={standingsData} standingsTabList={standingsTabList} /> : 
        <StandingsTabs standingsTabList={standingsTabList} standingsData={standingsData} />
      }
    </div>
  )
}

export default Standings