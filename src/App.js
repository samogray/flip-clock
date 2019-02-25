import React from 'react'
import TimePart from './time-part'
import './style.scss'

const mapTypeTime = {
  hr: {maxFirst: 2, maxLast: 10},
  min: {maxFirst: 6, maxLast: 10} ,
  sec: {maxFirst: 6, maxLast: 10},
}

export default class FilpClock extends React.Component {
  constructor() {
    super()
    this.state = this.getTime()
  }

  componentDidMount() {
    this.time = setInterval( this.changeTime, 1000)
  }

  getTime = () => {
    const t = new Date()
    t.setTime(t.getTime() - t.getTimezoneOffset()*60*1000)
    return {
      total: t,
      seconds: Math.floor( (t/1000) % 60),
      minutes: Math.floor( (t/1000/60) % 60),
      hours: Math.floor( (t/(1000*60*60)) % 24),
      days: Math.floor( t/(1000*60*60*24)),
    }
  }

  changeTime = () => this.setState({...this.getTime()})

  componentWillUnmount() {
    clearInterval(this.time)
  }

  render() {
    const {
      hours,
      minutes,
      seconds,
      days,
    } = this.state

    return (
      <div>
      <div className="flip-clock-wrapper">
        <TimePart value={hours} {...mapTypeTime.hr} />
         <span className="flip-clock-wrapper__spacer">:</span>
        <TimePart value={minutes} {...mapTypeTime.min} />
        <span className="flip-clock-wrapper__spacer">:</span>
        <TimePart value={seconds}  {...mapTypeTime.sec} />
      </div>
      <div>
        <span>{hours}:</span>
        <span>{minutes}:</span>
        <span>{seconds}</span>
      </div>
      </div>
    )
  }
}
