import React from 'react'
import Num from '../number'

const Hours  = () => (
      <div>
        <div className="title">
          HR
        </div>
        <Num type='hours-pre' num='2' />
        <Num type='hours-last' num='4' />
        <div className="semicolon">
          <span></span>
          <span></span>
        </div>
      </div>
    )
export default Hours

