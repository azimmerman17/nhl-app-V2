// context for the standings data

import { useEffect, createContext, useState } from "react";

export const StandingsData = createContext()

const StandingsDataProvider = ({ children }) => {
    const [ standingsData, setStandingsData ] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://localhost:3000/standings')
        const data = await response.json()
        setStandingsData(data)
        console.log(data)
      }
      if (!standingsData) fetchData()
    }, [standingsData])
    
    return (
        <StandingsData.Provider value={{ standingsData, setStandingsData }}>
            {children}
        </StandingsData.Provider>
    )
}

export default StandingsDataProvider