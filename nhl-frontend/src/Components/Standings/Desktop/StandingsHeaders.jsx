// Header for the Standings table
import StandingsHeadersList from "../../../assets/Files/StandingsHeadersList"

const StandingsHeaders = () => {
  
  return (
    <tr>
      {StandingsHeadersList.map(item => {
        return(
        <th key={`header-${item}`} className='text-center' style={(item === 'Home' || item === 'Away') && window.innerWidth < 1000 ? {'display':'none'} : null}>
          {item}
        </th>
        )
      })}
    </tr>
  )
}

export default StandingsHeaders
