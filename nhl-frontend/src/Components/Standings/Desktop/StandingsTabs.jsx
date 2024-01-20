import { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import StandingsViews from '../../../assets/Files/StandingsViews';
import LeagueView from './LeaguesView';
import ConferenceView from './ConferenceView';

const StandingsTabs = () => {
  const [tab, setTab] = useState(StandingsViews[0].nme);

  const setView = (tab) => {
    switch (tab) {
      case 'League':
        return <LeagueView />
      case 'Conference':
        return <ConferenceView />
      default:
        return <h6>{tab} page not built</h6>
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
    StandingsViews.map(tab => {
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