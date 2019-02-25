import React from 'react'
import Number from '../number'

const splitNumber = (value) => {
  if (value < 10) {
    return {
      first: 0,
      last: +String(value)[0],
    }
  }
  return {
    first: +String(value)[0],
    last: +String(value)[1],
  }
}

const TimePart = ({value, maxFirst, maxLast}) => {
  const {first, last} = splitNumber(value)
  return (
    <div>
      <Number active={first} max={maxFirst} />
      <Number active={last} max={maxLast} />
    </div>
  )
}

export default TimePart
