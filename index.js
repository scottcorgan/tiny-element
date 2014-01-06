var splice = [].splice;
var ctx = document;

module.exports = function (selector, multiple) {
  return (typeof selector == 'string')
    ? (multiple) ? splice.call(ctx.querySelectorAll(selector), 0) : ctx.querySelector(selector)
    : (selector.length) ? splice.call(selector, 0) : selector;
};