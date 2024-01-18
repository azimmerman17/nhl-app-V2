// Context for the scores for today's games
import { useEffect, createContext, useState } from "react";

export const TodaysGames = createContext()

const TodaysGamesProvider = ({ children }) => {
  const [ todaysGames, setTodaysGames ] = useState(null)
    
  useEffect(() => {
    const fetchData = async () => {
      console.log('rf',new Date())
      const response = await fetch('http://localhost:3000/game/today')
      const data = await response.json()
      const { focusedDate, gamesByDate, focusedDateCount } = await data
      let i = 0
      // sets the game date for the focused Date (ususally today or yesterday)
      while (!todaysGames || i < focusedDateCount) {
        const { games, date } = gamesByDate[i]
        if (focusedDate === date)  {
          setTodaysGames({
            games,
            date
          })
          break
        }
        i++
      }
    }

    if (!todaysGames) fetchData()
    // set or clear interval for reload 
    if (todaysGames) {
      let interval = setInterval(() => {
        fetchData()
      }, 60 * 1000)

      return () => clearInterval(interval)
    }
  }, [todaysGames])
  
  return (
      <TodaysGames.Provider value={{ todaysGames, setTodaysGames }}>
          {children}
      </TodaysGames.Provider>
  )
}

export default TodaysGamesProvider