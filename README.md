humanize-distance
====

Calculates a humanized distance between 2 Points (longitude, latitude)

Example outputs: < 50m, 450m, 750yd, 0.9 mi, 2,8 km

[![bitHound Overall Score](https://www.bithound.io/github/stockulus/humanize-distance/badges/score.svg)](https://www.bithound.io/github/stockulus/humanize-distance) [![npm Package](https://img.shields.io/npm/dm/humanize-distance.svg)](https://www.npmjs.com/package/humanize-distance) [![travis-ci.org](https://travis-ci.org/stockulus/humanize-distance.svg)](https://travis-ci.org/stockulus/humanize-distance) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![license](https://img.shields.io/npm/l/humanize-distance.svg?maxAge=2592000)](https://opensource.org/licenses/MIT)

### Usage

```bash
npm i humanize-distance --save
```

```js

const humanizeDistance = require('humanize-distance')

console.log(humanizeDistance(
  {latitude: 50.95, longitude: 6.91},
  {latitude: 50.9486184, longitude: 6.9426425},
  'de-DE',
  'metric'))
// 2,8 km

console.log(humanizeDistance(
  {latitude: 50.9440107, longitude: 6.9419526},
  {latitude: 50.9486184, longitude: 6.9426425},
  'en-US',
  'us'))
// 550 yd

```

---
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&maxAge=2592000)](https://twitter.com/stockulus) [![GitHub stars](https://img.shields.io/github/stars/stockulus/humanize-distance.svg?style=social&label=Star)](https://github.com/stockulus/humanize-distance)
