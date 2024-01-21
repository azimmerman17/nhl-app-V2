// Header for the Standings table
import StandingsHeadersList from "../../../assets/Files/StandingsHeadersList"

const StandingsHeaders = () => {

  const checkItem = (item) => {
    switch (item) {
      case 'Home':
        if (window.innerWidth >= 1000) return item
        break
      case 'Away':
        if (window.innerWidth >= 1000) return item
        break
      default:
        return item
    }
  }

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
