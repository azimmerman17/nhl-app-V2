import { useEffect, createContext, useState } from "react";

export const IsMobile = createContext()

const IsMobileProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
      if (window.innerWidth < 750 || window.innerHeight < 750 * (3/5)) setIsMobile(true)
      else setIsMobile(false)
    }, [])

    console.log(isMobile)

    return (
        <IsMobile.Provider value={{ isMobile, setIsMobile }}>
            {children}
        </IsMobile.Provider>
    )
}

export default IsMobileProvider