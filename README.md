humanize-distance
====

Calculates a humanized distance between 2 Points (longitude, latitude)

Example outputs: < 50m, 450m, 750yd, 0.9 mi, 2,8 km

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
Feedback welcome:
Twitter: [@stockulus](https://twitter.com/stockulus)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
