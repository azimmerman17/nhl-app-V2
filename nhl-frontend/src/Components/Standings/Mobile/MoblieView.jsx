import { useState } from "react"
import Container from "react-bootstrap/Container";

import StandingsViews from "../../../assets/Files/StandingsViews"
import StandingsRadioMobile from "./StandingsRadioMobile";
import LeagueMobileView from "./LeagueMobileView";
import ConferenceMobileView from "./ConferenceMobileView";

const MobileView = () => { 
  const [view, setView] = useState(StandingsViews[0].nme);

  const showView = (view) => {
    switch (view) {
      case 'League':
        return <LeagueMobileView />
      case 'Conference':
        return <ConferenceMobileView />
      // case 'Division':
      //   return <DivisionWildCardView view={view}/>      
      // case 'Wild Card':
      //   return <DivisionWildCardView view={view}/>

      default:
        return <h6>{view} page not built</h6>
    }

  }

  return (
      <Container className='mx-o'>
        <StandingsRadioMobile view={view} setView={setView} />
        {showView(view)}
      </Container>
    )

}

export default MobileView