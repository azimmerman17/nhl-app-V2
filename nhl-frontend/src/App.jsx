import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './Components/NavBar'

import IsMobileProvider from './Contexts/IsMobile'
import TodaysGamesProvider from './Contexts/todaysGames'
import TodaysGamesWrapper from './Components/TodayGames/TodayGamesWrapper'

function App() {
  const [title, setTitle] = useState('APP')

  useEffect(() => {
    document.title = `NHL ${title}`
  }, [title])

  return (
    <div className='bg-skategray'>
      <IsMobileProvider>
        <TodaysGamesProvider>
          <header>
            <NavBar />
            <div style={{marginTop: '73px'}}></div>
            <TodaysGamesWrapper title={title} />
          </header>
          NHL APP
        </TodaysGamesProvider>
      </IsMobileProvider>
    </div>
  )
}

export default App
