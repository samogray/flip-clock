import React, {memo} from 'react'
import classNames from 'classnames'

class Item extends React.PureComponent {
  render() {
    const {active, index} = this.props
    const beforeIndex = this.beforeIndex
    this.beforeIndex = active

    return (
      <div className={classNames(
        'num',
        active === index && 'num--active',
        beforeIndex != null && active === index && 'animate-active', 
        beforeIndex === index && 'num--before',
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
    )
  }
}

const Number = ({max, active}) =>  {
  return (
    <div className={`container`}>
      {Array.from(new Array(max))
        .map((item, index) => <Item active={active} index={index} key={index} />)}
    </div>
  )
}

export default memo(Number)
