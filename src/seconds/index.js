import React from 'react'
import NumEl from '../number'

const Seconds = () => (
  <div>
    <div className="title">SEC</div>
    <NumEl type="seconds-pre" num="6" />
    <NumEl type="seconds-last" num="10" />
  </div>
)

export default Seconds
