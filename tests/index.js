'use strict'

const test = require('tape')
const humanizeDistance = require('../index')

test('same point', (assert) => {
  const result = humanizeDistance(
    {latitude: 50.95, longitude: 6.91},
    {latitude: 50.95, longitude: 6.91})

  assert.equal(result, '0 m')
  assert.end()
})

test('work distance', (assert) => {
  const result = humanizeDistance(
    {latitude: 50.95, longitude: 6.91},
    {latitude: 50.9486184, longitude: 6.9426425},
    'de-DE',
    'metric')

  assert.equal(result, '2,8 km')
  assert.end()
})
