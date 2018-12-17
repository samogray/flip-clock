import React from 'react'
import NumEl from '../number'

const Minutes = ({min}) => console.log('min', min) || (
  <div>
    <div className="title">MIN</div>
    <NumEl type="minutes-pre" num="6" active={min < 10 ? 0 : String(min)[0]} />
    <NumEl type="minutes-last" num="10" active={min < 10 ? String(min)[0] : String(min)[1]} />
    <div className="semicolon">
      <span />
      <span />
    </div>
  </div>
)

export default Minutes
