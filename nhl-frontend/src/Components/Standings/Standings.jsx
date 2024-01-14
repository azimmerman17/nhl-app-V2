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
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/standings')
      const data = await response.json()
      setStandingsData(data)
      console.log(data)
    }
    
    setTitle(`${standingsTab} Standings`)
    if (!standingsData) fetchData()

  },[standingsTab, standingsData])

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
        <StandingsTabs standingsTabList={standingsTabList}  standingsTab={standingsTab} standingsData={standingsData} />
      }
    </div>
  )
}

export default Standings