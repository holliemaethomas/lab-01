'use strict';

let greet = module.exports = {};

greet.hello = (...args) => {
  if (args.length !== 1) { return null; }
  if (typeof args[0] !== 'string') { return null; }
  return `hello, ${args[0]}`;
};
