import React from 'react'
import Seconds from './seconds'
import Minutes from './minutes'
import Hours from './hours'
import './style.scss'

export default class FilpClock extends React.Component {
//  $$  (str) {
//     return document.querySelectorAll(str)
//   }

//   componentDidMount () {
//     this.flip()
//     console.log('this.secRef', this.secRef)
//   }

//   flip () {
//     setInterval(() => {
//       this.secondsLastMove()
//     }, 1000)
//   }

//   hoursPredMove = (() => {
//     return this.move('.hours-pre')
//   })()

//   hoursLastMove = (() => {
//     return this.move('.hours-last', this.hoursPredMove)
//   })()

//   minutesPredMove = (() => {
//     return this.move('.minutes-pre', this.hoursLastMove)
//   })()

//   minutesLastMove = (() => {
//     return this.move('.minutes-last', this.minutesPredMove)
//   })()

//   secondsPredMove = (() => {
//     return this.move('.seconds-pre', this.minutesLastMove)
//   })()

//   secondsLastMove = (() => {
//     return this.move('.seconds-last', this.secondsPredMove)
//   })()

//   setRef =(input)=> {
//     this.secRef = input;
//   }

//   //ref = React.createRef();

//   move (className, fn) {
//     let num = 0
//     let ele = null
//     return () => {
//       const element = ele || (ele = this.$$(`${className} > li`))

//       this.clearFilpClock(className)
//       element[num].className = 'flip-clock-before'

//       if (num === element.length - 1) {
//         element[0].className = 'flip-clock-active'
//         num = 0
//         fn && fn()
//         return
//       }

//       element[num + 1].className = 'flip-clock-active'
//       num = num + 1
//     }
//   }

//   clearFilpClock (str) {
//     this.$$(`${str} li`).forEach((item) => {
//       item.className = ''
//     })
//   }

  render () {
    console.log('ref', this.setRef)
    return (
      <div className="flip-clock-wrapper">
        <Hours hr={13} />
        <Minutes min={15} />
        <Seconds setRef={this.setRef} sec={24}/>
      </div>
    )
  }
}
