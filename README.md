# tiny-element
 
A tiny DOM element selector

[![browser support](https://ci.testling.com/scottcorgan/tiny-element.png)](https://ci.testling.com/scottcorgan/tiny-element)
 
## Install
 
```
npm install tiny-element --save
```
 
## Usage
 
```js
var element = require('tiny-element');

var el = element('.parent .some-selector');
var els = element('.some-elements', true); // This returns an ACTUAL array of DOM elements
```

### element(selector[, multiple])

* `selector` - a css selector OR DOM element. If a DOM element is passed in, it just returns that DOM element. It's a nice abstraction to avoid always testing for a selector or DOM element.
* `multiple` - should the query return multiple DOM elements. This is useful because it returns an actual array or DOM elements instead of a pseudo-array.
 
## Run Tests
 
Requires [Phantomjs](phantomjs.org/download.html) is installed
 
```
npm install
npm test
```