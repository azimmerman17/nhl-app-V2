import { useState } from "react"

import StandingsDropDown from "./StandingsDropDown"
import StandingsViews from "../../../assets/Files/StandingsViews"

const MobileView = ({ standingsTabList, }) => { 
  let [ view, setView ] = useState(StandingsViews[0])

  return (
    <div>
      <StandingsDropDown StandingsViews={StandingsViews} view={view} setView={setView} />
      Standings Data
    </div>
  )

}

export default MobileView