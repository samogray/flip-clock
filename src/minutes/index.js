import React from 'react'
import NumEl from '../number'

const Minutes = () => (
  <div>
    <div className="title">MIN</div>
    <NumEl type="minutes-pre" num="6" />
    <NumEl type="minutes-last" num="10" />
    <div className="semicolon">
      <span />
      <span />
    </div>
  </div>
)

export default Minutes
