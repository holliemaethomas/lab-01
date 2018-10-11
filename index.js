'use strict';
// declaring dependencies
const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
const faker = require('faker');

//creating vars  
const randomIntegerA = faker.random.number();
const randomIntegerB = faker.random.number();
const quickName = faker.name.findName();

// greeting 
console.log(greet('JOHN'));
console.log(greet.hello(quickName));

// arthmitic
console.log(math.add(1,3)); 
console.log(math.subtract(1,3)); 
console.log(math.multiply(randomIntegerA, randomIntegerB));
console.log(math.divide(randomIntegerA, randomIntegerB));





