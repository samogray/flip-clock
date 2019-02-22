import React from 'react'
import Seconds from './seconds'
import Minutes from './minutes'
import Hours from './hours'
import TimePart from './time-part'
import './style.scss'

export default class FilpClock extends React.Component {
  state = {}

  componentDidMount() {
    this.time = setInterval( this.changeTime, 1000)
  }

  getTimeDifference = (endtime) => {
    const t = Date.parse(endtime) - Date.parse(new Date())
    let seconds = Math.floor( (t/1000) % 60 )
    let minutes = Math.floor( (t/1000/60) % 60 )
    let hours = Math.floor( (t/(1000*60*60)) % 24 )
    let days = Math.floor( t/(1000*60*60*24) )
    this.setState({
      total: t,
      days,
      hours: hours * -1,
      minutes: minutes * -1,
      seconds: seconds * -1,
    })
  }

  changeTime = () => this.getTimeDifference(new Date(2018, 11, 31))

  componentWillUnmount() {
    clearInterval(this.time)
  }
  

  render() {
    const {
      hours,
      minutes,
      seconds
    } = this.state

    return (
      <div>
      <div className="flip-clock-wrapper">
        <TimePart value={hours} type="hr" />
        <TimePart value={minutes} type="min" />
        <TimePart value={seconds} type="sec" />
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
