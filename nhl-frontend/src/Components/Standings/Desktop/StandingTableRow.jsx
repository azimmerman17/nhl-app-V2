// creates columns for each row
import StandingsHeadersList from "../../../assets/Files/StandingsHeadersList"
import StandingsTableData from "./StandingsTableData"

const StandingsTableRow = ({ team, view, row }) => {
  const rowHeaders = StandingsHeadersList.map((header, i) => {
    return <StandingsTableData team={team} header={header} view={view} key={`League-row-${row}-col-${i}`} />
})

  return (
    <tr>
      {rowHeaders}
    </tr>
  )
}

export default StandingsTableRow