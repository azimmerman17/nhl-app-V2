import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StandingDivisional from './StandingsDivisional';

const StandingsTabs = ({ standingsTabList }) => {
  const [tab, setTab] = useState(standingsTabList[0].nme);

  const setView = (tab) => {
    switch (tab) {
      case 'Divisional':
        return <StandingDivisional />
      default:
        return <h6>{tab} page in progress</h6>
    }

  }


  return (
    <Tabs
    id="fill-tab"
    className="mb-3"
    activeKey={tab}
    onSelect={(k) => setTab(k)}
    justify
  >
  {
    standingsTabList.map(tab => {
      const { nme } = tab
      return (
        <Tab 
          eventKey={nme}
          title={nme}
          key={`tab-${nme}`}

        >
          {setView(nme)}
        </Tab>
      )
    })
  }
  </Tabs>
  )
}

export default StandingsTabs