import React from 'react'
import ScheduleItem from './schedule-item'


const TodaySchedule = ({ todaySchedule }) => {



  return (
    <ul className='todaySchedule'>
      {Object.keys(todaySchedule).map((item, i) =>
        <ScheduleItem  key={i} todaySchedule={todaySchedule[item]} />
      )}
    </ul>

  )
}

export default TodaySchedule
