import StandingsDropDown from "./StandingsDropDown"

const MobileView = ({ standingsData, standingsTabList,  standingsTab, setStandingsTab }) => { 

  return (
    <div>
      <StandingsDropDown standingsTabList={standingsTabList} standingsTab={standingsTab} setStandingsTab={setStandingsTab} />
      Standings Data
    </div>
  )

}

export default MobileView