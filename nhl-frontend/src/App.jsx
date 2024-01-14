import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import IsMobileProvider from './Contexts/IsMobile'
import TodaysGamesProvider from './Contexts/todaysGames'

function App() {
  const [title, setTitle] = useState('APP')

  useEffect(() => {
    document.title = `NHL ${title}`
  }, [title])

  return (
    <div>
      <IsMobileProvider>
        <TodaysGamesProvider>
        NHL APP
        </TodaysGamesProvider>
      </IsMobileProvider>
    </div>
  )
}

export default App
