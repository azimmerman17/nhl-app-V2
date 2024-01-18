// sets border color for the games header
const SetGamesHeaderBorder = (gameState, clock, periodDescriptor) => {
  if (gameState === 'FUT' || gameState === 'PRE') return 'dark' // Black for Future Games
  else if (gameState === 'FINAL' || gameState === 'OFF') return 'primary' // Blue for Completed Games
  else if (gameState === 'LIVE') {
    const { number } = periodDescriptor
    const { secondsRemaining } = clock
    if (number > 3) return 'danger'  // Red for OT and SO
    else if (number === 3 && secondsRemaining <= 5 *60) return 'danger' // Red  for last 5 minutes of 3rd
    else return 'success' // Green for live 
  } else return 'warning' // Yellow for unknown gameState
}

export default SetGamesHeaderBorder