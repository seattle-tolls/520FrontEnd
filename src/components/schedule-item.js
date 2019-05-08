import React from 'react'

const ScheduleItem = props => {
  const { schedule, goodToGo, payByMail }= props.todaySchedule

  return (
    <li className='schedule-item'>
      <p>{`Schedule: ${schedule}`}</p>
      <p>Good-To-Go: <b>{goodToGo}</b> || Pay By Mail <b>{payByMail}</b></p>
      <p>-------------</p>
    </li>
  )
}

export default ScheduleItem
