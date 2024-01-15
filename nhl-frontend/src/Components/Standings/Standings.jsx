import { useEffect, useState, useContext } from "react"

import StandingsTabs from './Desktop/StandingsTabs'
import { IsMobile } from '../../Contexts/IsMobile';
import StandingsDropDown from "./Mobile/StandingsDropDown";
import MobileView from "./Mobile/MoblieView";



const Standings = ({ setTitle }) => {
  const { isMobile, setIsMobile } = useContext(IsMobile)
  const [ standingsTab, setStandingsTab ] = useState('Divisional')
  const [ standingsData, setStandingsData ] = useState(null)

  useEffect(() => {
    setTitle(`${standingsTab} Standings`)
    console.log(standingsTab)
  },[standingsTab])

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
        <MobileView standingsData={standingsData} standingsTabList={standingsTabList}  standingsTab={standingsTab} setStandingsTab={setStandingsTab} /> : 
        <StandingsTabs standingsTabList={standingsTabList}  standingsTab={standingsTab} standingsData={standingsData} setStandingsTab={setStandingsTab} />
      }
    </div>
  )
}

export default Standings