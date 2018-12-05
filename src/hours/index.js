import React from 'react'
import Num from '../number'

const Hours  = ({hr}) => (
      <div>
        <div className="title">
          HR
        </div>
        <Num type='hours-pre' num='2' active={String(hr)[0]} />
        <Num type='hours-last' num='4' active={String(hr)[1]} />
        <div className="semicolon">
          <span></span>
          <span></span>
        </div>
      </div>
    )
export default Hours

