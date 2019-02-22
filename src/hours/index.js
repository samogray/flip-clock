import React from 'react'
import Num from '../number'


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

const Hours  = ({hr}) => (
      <div>
        <div className="title">
          HR
        </div>
        <Num type='hours-pre' nodes='2' active={getFirstActiveValue(hr)} />
        <Num type='hours-last' nodes='4' active={getLastActiveValue(hr)} />
        <div className="semicolon">
          <span></span>
          <span></span>
        </div>
      </div>
    )
export default Hours

