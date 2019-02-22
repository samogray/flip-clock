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

const Seconds = ({sec}) =>  (
  <div>
    <div className="title">SEC</div>
    <NumEl
      type="seconds-pre"
      num="6"
      active={getFirstActiveValue(sec)}
    />
    <NumEl
      type="seconds-last"
      num="10"
      active={getLastActiveValue(sec)}
      />
  </div>
)

export default Seconds
