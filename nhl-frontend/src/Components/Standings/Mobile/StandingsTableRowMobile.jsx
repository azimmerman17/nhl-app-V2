// creates columns for each row
import StandingsMobileHeadersList from "../../../assets/Files/StandingsMobileHeadersList"
import StandingsTableData from "../Desktop/StandingsTableData"

const StandingsTableRowMobile = ({ team, view, row }) => {
  const rowHeaders = StandingsMobileHeadersList.map((header, i) => {
    return <StandingsTableData team={team} header={header} view={view} key={`League-row-${row}-col-${i}-mobile`} />
})

  return (
    <tr>
      {rowHeaders}
    </tr>
  )
}

export default StandingsTableRowMobile