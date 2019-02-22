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

const Minutes = ({min}) => (
  <div>
    <div className="title">MIN</div>
    <NumEl type="minutes-pre" num="6" active={getFirstActiveValue(min)} />
    <NumEl type="minutes-last" num="10" active={getLastActiveValue(min)} />
    <div className="semicolon">
      <span />
      <span />
    </div>
  </div>
)

export default Minutes
