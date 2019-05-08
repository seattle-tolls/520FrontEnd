import React from 'react'

const CurrentTime = props => {

  const {
    dayName, goodToGo, holidayName,
    payByMail, schedule,
  } = props.currentTimeInfo

  return (
    <div className='current-time'>
      <h2>{dayName}</h2>
      <h3>{holidayName}</h3>
      <p>{schedule}</p>
      <p>Good To Go: <b>{goodToGo}</b></p>
      <p>Pay By Mail: <b>{payByMail}</b></p>
    </div>
  )
}

export default CurrentTime