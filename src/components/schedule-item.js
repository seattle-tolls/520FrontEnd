import React from 'react'

const ScheduleItem = props => {
  const { schedule, goodToGo, payByMail }= props.todaySchedule

  return (
    <li>
      <p>{`Schedule: ${schedule}`}</p>
      <p>{`Good-To-Go: ${goodToGo} | Pay By Mail ${payByMail}`}</p>
      <p>-------------</p>
    </li>
  )
}

export default ScheduleItem
