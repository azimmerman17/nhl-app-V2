import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './Components/NavBar'
import Standings from './Components/Standings/Standings'
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
      <Router>
        <IsMobileProvider>
          <TodaysGamesProvider>
            <header>
              <NavBar />
              <div style={{marginTop: '73px'}}></div>
              <TodaysGamesWrapper title={title} />
            </header>
            <main>
              <Routes>
                {/* <Route exact path='/' element={<Home />} />  */}
                <Route path='/standings' element={<Standings setTitle={setTitle} />} />
                {/* <Route path='/scores' element={<Scores data={data} setPath={setPath} setTitle={setTitle} />} /> */}
              </Routes>
              NHL APP
            </main>
          </TodaysGamesProvider>
        </IsMobileProvider>
      </Router>
    </div>
  )
}

export default App
