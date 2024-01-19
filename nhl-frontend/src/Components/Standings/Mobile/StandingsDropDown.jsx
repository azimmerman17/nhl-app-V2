import Dropdown from 'react-bootstrap/Dropdown'

const StandingsDropDown = ({ StandingsViews, view, setView }) => {

  return(
    <Dropdown >
      <Dropdown.Toggle 
        variant="secondary" 
        id="dropdown-standings">
        {view}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          StandingsViews.map(tab => {
            const { nme } = tab
            return (
              <Dropdown.Item 
                eventKey={nme}
                title={nme}
                key={`tab-${nme}`}
                onClick={(e) => setView(nme)}
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