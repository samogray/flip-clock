import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'

const Number = ({type, num = 1, setRef, active}) => {
  return (
    <div className={`${type} container`}>
      {_.times(num, String).map(index => (
        <div className={classNames(
          'num',
          String(active) === index && 'num--active',
          String(active - 1) === index && 'num--before',
        )}>
        <div className="num__wrapper">
          <div className="num__up">
            <div className="num__shadow num__shadow--up"></div>
            <div className="num__number num__number--up">{index}</div>
          </div>
          <div className="num__down">
            <div className="num__shadow num__shadow--down"></div>
            <div className="num__number num__number--down">{index}</div>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Number
