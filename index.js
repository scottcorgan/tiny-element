var slice = [].slice;
var ctx = document;

module.exports = function (selector, multiple) {
  return (typeof selector == 'string')
    ? (multiple) ? slice.call(ctx.querySelectorAll(selector), 0) : ctx.querySelector(selector)
    : (selector.length) ? slice.call(selector, 0) : selector;
};