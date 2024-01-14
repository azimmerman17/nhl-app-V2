import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const StandingsTabs = ({ standingsTabList, standingsTab, setStandingsTab }) => {



  return (
    <Tabs
      defaultActiveKey={standingsTab}
      id="fill-tab"
      className="mb-3"
      fill
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
          </Tab>
        )
      })
    }
    </Tabs>
  )
}

export default StandingsTabs