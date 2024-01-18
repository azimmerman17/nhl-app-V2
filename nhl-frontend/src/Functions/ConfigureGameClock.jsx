// Configures the Game Clock
const ConfigureGameClock = (clock, periodDescriptor) => {
  console.log(clock, periodDescriptor)
  const { number } = periodDescriptor
  // set the period of the game
  let period
  if (number === 1) period = '1st'
  else if (number === 2) period = '2nd'
  else if (number === 3) period = '3rd'
  else if (number === 4) period = 'OT'
  else period = 'SO'

  // set the clock
  const { timeRemaining, inIntermission } = clock
  let gameClock
  if (period ===  'SO') gameClock = ''
  else if (inIntermission === true) gameClock = 'INT'
  else gameClock = timeRemaining

  return `${period} - ${gameClock}`
}

export default ConfigureGameClock