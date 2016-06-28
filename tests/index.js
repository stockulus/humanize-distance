'use strict'

const test = require('tape')
const humanizeDistance = require('../index')

test('same point', (assert) => {
  const result = humanizeDistance(
    {latitude: 50.95, longitude: 6.91},
    {latitude: 50.95, longitude: 6.91})

  assert.equal(result, '< 50 m')
  assert.end()
})

test('same point yards', (assert) => {
  const result = humanizeDistance(
    {latitude: 50.95, longitude: 6.91},
    {latitude: 50.95, longitude: 6.91},
    'en-US',
    'us'
  )

  assert.equal(result, '< 50 yd')
  assert.end()
})

test('coworking space distance', (assert) => {
  const result = humanizeDistance(
    {latitude: 50.95, longitude: 6.91},
    {latitude: 50.9486184, longitude: 6.9426425},
    'de-DE',
    'metric')

  assert.equal(result, '2,3 km')
  assert.end()
})

test('coworking space distance in miles', (assert) => {
  const result = humanizeDistance(
    {latitude: 50.95, longitude: 6.91},
    {latitude: 50.9486184, longitude: 6.9426425},
    'en-US',
    'us')

  assert.equal(result, '1.4 mi')
  assert.end()
})

test('underground to coworking space', (assert) => {
  const result = humanizeDistance(
    {latitude: 50.9440107, longitude: 6.9419526},
    {latitude: 50.9486184, longitude: 6.9426425},
    'de-DE',
    'metric')

  assert.equal(result, '500 m')
  assert.end()
})

test('underground to coworking space in yards', (assert) => {
  const result = humanizeDistance(
    {latitude: 50.9440107, longitude: 6.9419526},
    {latitude: 50.9486184, longitude: 6.9426425},
    'en-US',
    'us')

  assert.equal(result, '550 yd')
  assert.end()
})

test('Krefeld - Arnsberg', (assert) => {
  const result = humanizeDistance(
    {latitude: 51.328911, longitude: 6.559908},
    {latitude: 51.436333, longitude: 8.009164},
    'de-DE',
    'metric')

  assert.equal(result, '100 km')
  assert.end()
})
