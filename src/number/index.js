import React from 'react'
import _ from 'lodash'

const Number = ({type, num = 1, setRef, active}) => {
  return (
    <div className={`${type} container`}>
      {_.times(num, String).map(index => (
        <div class={`num ${String(active) === index ? 'num--active' : ''}`}>
        <div class="num__wrapper">
          <div class="num__up">
            <div class="num__shadow num__shadow--up"></div>
            <div class="num__number num__number--up">{index}</div>
          </div>
          <div class="num__down">
            <div class="num__shadow num__shadow--down"></div>
            <div class="num__number num__number--down">{index}</div>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Number
