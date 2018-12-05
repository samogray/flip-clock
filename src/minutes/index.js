import React from 'react'
import NumEl from '../number'

const Minutes = ({min}) => (
  <div>
    <div className="title">MIN</div>
    <NumEl type="minutes-pre" num="6" active={String(min)[0]}/>
    <NumEl type="minutes-last" num="10" active={String(min)[1]}/>
    <div className="semicolon">
      <span />
      <span />
    </div>
  </div>
)

export default Minutes
