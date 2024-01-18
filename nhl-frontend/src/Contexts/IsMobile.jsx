// context for determining if the device is mobile 
import { useEffect, createContext, useState } from "react";

export const IsMobile = createContext()

const IsMobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // checks the width and height 750px x 375px in portrait mode - only 1 has to be true for mobile view
    if (window.innerWidth <= 775 || window.innerHeight <= 775 * (1/2)) setIsMobile(true)
    else setIsMobile(false)
  }, [])

  return (
    <IsMobile.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </IsMobile.Provider>
  )
}

export default IsMobileProvider