'use strict';

let greet = module.exports;

greet.hola(...str) => {
  if (typeof str[0] !== 'string') {return null}
  return 'hello, ${str[0]}'
};
