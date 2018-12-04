import React from 'react'
import _ from 'lodash'

const Number = ({type, num = 1}) => {
  return (
    <ul className={type}>
      {_.times(num, String).map(index => (
        <li key={index} className="number">
          <a className="link number__wrapper">
            <div className="up number__up">
              <div className="shadow number__shadow" />
              <div className="inn number__inner">
                {index}
              </div>
            </div>
            <div className="down number__down">
              <div className="shadow number__down" />
              <div className="inn number__inner">{index}</div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Number
