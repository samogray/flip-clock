import React from 'react'
import Seconds from './seconds'
import Minutes from './minutes'
import Hours from './hours'
import './style.scss'

export default class FilpClock extends React.Component {
  state = {}

  componentDidMount() {
    //console.log(this.getTimeDifference(new Date(2011, 0, 1)))
    setInterval(() => console.log(this.getTimeDifference(new Date(2018, 11, 31))), 1000)
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
      hours,
      minutes,
      seconds
    })
  }

  render() {
    const {
      hours,
      minutes,
      seconds
    } = this.state

    console.log(this.state)
    return (
      <div>
      <div className="flip-clock-wrapper">
        <Hours hr={hours} />
        <Minutes min={minutes} />
        <Seconds sec={seconds} />
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
