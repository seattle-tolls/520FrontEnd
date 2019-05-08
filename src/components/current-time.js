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
      <hr/>
      <h3>{goodToGo}</h3>
      <p>Good To Go</p>
      <hr/>
      <h3>{payByMail}</h3>
      <p>Pay By Mail</p>
    </div>
  )
}

export default CurrentTime