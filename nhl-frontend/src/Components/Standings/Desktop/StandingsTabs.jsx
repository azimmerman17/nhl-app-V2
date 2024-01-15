import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const StandingsTabs = ({ standingsTabList, standingsTab, setStandingsTab }) => {
  return (
      <ButtonGroup className='bg-white p-2'>
        {
          standingsTabList.map((tab, i) => {
            const { nme } = tab
            return (
              <ToggleButton
                className='px-4'
                key={`tab-${nme}`}
                id={`tab-${nme}`}
                type="radio"
                variant={standingsTab === nme ? 'outline-primary' : 'outline-secondary'}
                name="tab"
                value={nme}
                checked={standingsTab === nme}
                onChange={(e) => setStandingsTab(e.currentTarget.value)}
              >
                {nme}
              </ToggleButton>
            )
          })
        }
      </ButtonGroup>
  )
}

export default StandingsTabs