'use strict'

const Intl = require('intl')

/*
 * calculates the distance and returns a humanize string
 * @param {object} pointA
 * @param {number} pointA.latitude
 * @param {number} pointA.longitude
 * @param {object} pointB
 * @param {number} pointB.latitude
 * @param {number} pointB.longitude
 * @param {string} [locale=en-US]
 * @param {string} [units=metric] can be metric or us
*/
module.exports = function humanizeDistance (pointA, pointB, locale, unitSystem) {
  locale = locale || 'en-US'
  unitSystem = unitSystem || 'metric'
  const toRad = degree => degree * Math.PI / 180

  const deltaLatitude = toRad(pointA.latitude - pointB.latitude)
  const deltaLongitude = toRad(pointA.longitude - pointB.longitude)

  const a = Math.pow(Math.sin(deltaLatitude / 2), 2) +
            Math.pow(Math.sin(deltaLongitude / 2), 2) *
            Math.cos(toRad(pointA.latitude)) * Math.cos(toRad(pointB.latitude))

  const hav = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  const result = unitSystem === 'metric'
    ? {distance: hav * 6373, unit: 'km', smallUnit: 'm', factor: 1000, smallBorder: 0.9}
    : {distance: hav * 3960, unit: 'mi', smallUnit: 'yd', factor: 1760, smallBorder: 0.5}

  const formatter = new Intl.NumberFormat(locale, { maximumSignificantDigits: 2 })
  if (result.distance < result.smallBorder) {
    let distance = result.distance * result.factor
    if (distance < 40) return `< 50 ${result.smallUnit}`

    distance = Math.round(distance / 50) * 50
    return `${formatter.format(distance)} ${result.smallUnit}`
  }

  return `${formatter.format(result.distance)} ${result.unit}`
}
