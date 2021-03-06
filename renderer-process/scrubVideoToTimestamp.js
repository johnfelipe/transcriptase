const moment = require('moment')
const padTimestamp = require('./padTimestamp')

const scrubVideoToTimestamp = function () {
  let player = document.getElementsByTagName('video')[0]
  let timestamp = padTimestamp(this.innerHTML)
  const timeToGoTo = moment
    .duration(timestamp)
    .asSeconds()

  console.log(timestamp)
  console.log(timeToGoTo)

  if (player !== null && player.duration !== null) {
    if (timeToGoTo >= 0 && timeToGoTo <= player.duration) {
      console.log('reached inner condition')
      player.currentTime = timeToGoTo
    }
  }
}

module.exports = scrubVideoToTimestamp
