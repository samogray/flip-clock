import React from 'react'
import NumEl from '../number'

const Seconds = ({setRef, sec}) => console.log(sec) || (
  <div>
    <div className="title">SEC</div>
    <NumEl type="seconds-pre" num="6" setRef={setRef} active={String(sec)[0]} />
    <NumEl type="seconds-last" num="10" setRef={setRef} active={String(sec)[0]} />
  </div>
)

export default Seconds
