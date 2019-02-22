import React from 'react'
import NumEl from '../number'

const getLastActiveValue = (val) => {
  if (val < 10) {
    return Number(String(val)[0]) 
  }
  return Number(String(val)[1])
}

const getFirstActiveValue = (val) => {
  if (val < 10) {
    return 0
  }
  return Number(String(val)[0])
}

const mapTypeTime = {
  hr: {first: 2, last: 5},
  min: {first: 6, last: 10} ,
  sec: {first: 6, last: 10},
}

const TimePart = ({value, type}) =>  console.log({value, type}) || (
  <div>
    <div className="title">{type}</div>
    <NumEl
      nodes={mapTypeTime[type].first}
      active={getFirstActiveValue(value)}
    />
    <NumEl
      nodes={mapTypeTime[type].last}
      active={getLastActiveValue(value)}
      />
  </div>
)

export default TimePart
