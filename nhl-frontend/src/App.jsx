import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IsMobileProvider from './assets/Contexts/isMobile'

function App() {
  const [title, setTitle] = useState('APP')

  useEffect(() => {
    document.title = `NHL ${title}`
  }, [title])

  return (
    <div>
      <IsMobileProvider>
        NHL APP
      </IsMobileProvider>
    </div>
  )
}

export default App
