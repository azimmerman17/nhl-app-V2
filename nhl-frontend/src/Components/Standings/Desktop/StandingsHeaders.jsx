// Header for the Standings table
import StandingsHeadersList from "../../../assets/Files/StandingsHeadersList"

const StandingsHeaders = () => {

  return (
    <tr>
      {StandingsHeadersList.map(item => {
        return(
        <th key={`header-${item}`} className='text-center'>
          {item}
        </th>
        )
      })}
    </tr>
  )
}

export default StandingsHeaders
