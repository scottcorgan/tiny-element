var element = require('../index.js');
var test = require('tape');
var domify = require('domify');

test('it selects a single DOM element', function (t) {
  var body = element('body');

  t.deepEqual(body, document.body, 'selected DOM element');
  t.end();
});

test('it selects multiple DOM elements', function (t) {
  var els = domify('<div class="el1"></div><div class="el1"></div>');
  document.body.appendChild(els);

  var selectedEls = element('.el1', true);

  t.equal(selectedEls.length, 2, 'selected all DOM elements');
  t.equal(selectedEls[0].className, 'el1', 'selected by class name');
  t.end();
});

test('returns the DOM element if a DOM element is passed in', function (t) {
  var el = domify('<div class="el2"></div>');
  var newEl = element(el);

  t.deepEqual(newEl.className, el.className, 'same element');
  t.end();
});

test('returns the form if a form is passed in', function (t) {
  var form = domify('<form><input/></form>');
  var newEl = element(form);

  t.equal(newEl, form, 'same element');
  t.end();
});

test('returns non-Node/NodeList argument untouched if one is passed in', function (t) {
  var iframe = document.createElement('iframe');
  document.body.appendChild(iframe);

  var target = element(window);
  t.equal(target, window, 'unchanged window');

  t.end();
});

test('applies the context passed', function (t) {
  var el = element.call(document.body, 'body');

  t.equal(el, null, 'out of scope element');
  t.end();
});