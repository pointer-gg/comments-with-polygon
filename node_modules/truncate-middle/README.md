## truncate-middle

There are cases where important information is at the end of the string and truncating the end isn't helpful.

[![Build Status](https://travis-ci.org/kahwee/truncate-middle.svg?branch=master)](https://travis-ci.org/kahwee/truncate-middle) 
[![Coverage Status](https://coveralls.io/repos/kahwee/truncate-middle/badge.svg?branch=master)](https://coveralls.io/r/kahwee/truncate-middle?branch=master) 
[![npm version](https://badge.fury.io/js/truncate-middle.svg)](http://badge.fury.io/js/truncate-middle) 
[![Greenkeeper badge](https://badges.greenkeeper.io/kahwee/truncate-middle.svg)](https://greenkeeper.io/)

## Example use cases

```js
var book1 = "America Again: Re-becoming the Greatness We Never Weren't by Stephen Colbert (978-0446583978)";
var truncateMiddle = require('truncate-middle');
var display = truncateMiddle(book1, 30, 16, '...');
// You get 'America Again: Re-becoming the...(978-0446583978)'
```

## Usage
Install from `npm`.

```sh
npm install --save truncate-middle
```

Requiring in JavaScript

```js
var truncateMiddle = require('truncate-middle');
truncateMiddle('the quick brown', 5, 3, '...');
// Result:
//  'the q...own'
```

Defaults:


```js
truncateMiddle('the quick brown');
// Result:
//  'the quick brown'
```

Specifying a front length of 5:

```js
truncateMiddle('the quick brown', 5);
// Result:
//  'the q&hellip;'
```

Specifying a front length of 5 and back length of 3:

```js
truncateMiddle('the quick brown', 5, 3);
// Result:
//  'the q&hellip;own'
```

When there isn't anything to truncate:

```js
truncateMiddle('the quick brown', 50, 50);
// Result:
//  'the quick brown'
```

### Function signature

```js
truncateMiddle(str, frontLen, backLen, truncateStr)
```

1. **str (string)**: String to be truncated
1. **frontLen (number):** Number of characters to be remained in front.
1. **backLen (number):** Number of characters to be remained at the back.
1. **truncateStr (string):** String that is replaced the truncated portion. Defaults to `&hellip;`

Return is always the truncated string.

## License

MIT
