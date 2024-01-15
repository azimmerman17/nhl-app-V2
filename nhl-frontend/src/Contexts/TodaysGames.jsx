// Context for the scores for today's games
import { useEffect, createContext, useState } from "react";

export const TodaysGames = createContext()

const TodaysGamesProvider = ({ children }) => {
    const [ todaysGames, setTodaysGames ] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://localhost:3000/game/today')
        const data = await response.json()
        const { gameWeek } = await data
        const { date, dayAbbrev, games } = gameWeek[0]
        setTodaysGames({
          date,
          dayAbbrev,
          games
        })
      }
      if (!todaysGames) fetchData()

      // add a set invetval for refreshing data
      
    }, [todaysGames])
    
    return (
        <TodaysGames.Provider value={{ todaysGames, setTodaysGames }}>
            {children}
        </TodaysGames.Provider>
    )
}

export default TodaysGamesProvider