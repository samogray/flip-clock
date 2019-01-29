import React from 'react'
import NumEl from '../number'

const getLastActiveValue = (val) => {
  if (val < 10) {
    return String(val)[0] 
  }
  return String(val)[1] 
}

const getFirstActiveValue = (val) => {
  if (val < 10) {
    return '0'
  }

  return String(val)[0]
}
const getLastValue =(sec) => String(sec)[1] === '0'

const Seconds = ({setRef, sec}) =>  (
  <div>
    <div className="title">SEC</div>
    <NumEl type="seconds-pre" num="6" setRef={setRef} active={getFirstActiveValue(sec)} />
    <NumEl
      type="seconds-last"
      num="10"
      setRef={setRef}
      active={getLastActiveValue(sec)}
      last={getLastValue(sec)}
      />
  </div>
)

export default Seconds
