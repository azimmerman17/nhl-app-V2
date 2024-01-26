// Header for the Standings table
import StandingsMobileHeadersList from "../../../assets/Files/StandingsMobileHeadersList"

const StandingsHeadersMobile = () => {

  return (
    <tr>
      {StandingsMobileHeadersList.map(item => {
        item = item.substring(1, item.length)
        return(
        <th key={`header-${item}-mobile`} className='text-center font-mobile'>
          {item}
        </th>
        )
      })}
    </tr>
  )

}

export default StandingsHeadersMobile