import Dropdown from 'react-bootstrap/Dropdown'

const StandingsDropDown = ({ standingsTabList, standingsTab, setStandingsTab }) => {

  return(
    <Dropdown >
      <Dropdown.Toggle 
        variant="secondary" 
        id="dropdown-standings">
        {standingsTab}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          standingsTabList.map(tab => {
            const { nme } = tab
        return (
          <Dropdown.Item 
            eventKey={nme}
            title={nme}
            key={`tab-${nme}`}
            onClick={(e) => setStandingsTab(nme)}
          >
            {nme}
          </Dropdown.Item>
        )
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default StandingsDropDown