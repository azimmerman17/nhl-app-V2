import ToggleButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import StandingsViews from '../../../assets/Files/StandingsViews';

const StandingsRadioMobile = ({ view, setView }) => {

  return (
    <ToggleButtonGroup 
      className='bg-white'
      size='sm'   
    >
      {
        StandingsViews.map(standingsView => {
          const { nme } = standingsView
          return (
            <ToggleButton
              key={`radio-${nme}`}
              id={`radio-${nme}`}
              type="radio"
              variant={view === nme ? 'outline-primary' : 'outline-secondary'}
              name="radio"
              value={nme}
              checked={view === nme}
              onChange={(e) => setView(e.currentTarget.value)}
            >
              {nme}
            </ToggleButton>
          )
        })
      }

    </ToggleButtonGroup>
  )
}

export default StandingsRadioMobile