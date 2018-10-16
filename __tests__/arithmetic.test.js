'use strict';
// declaring dependencies
const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

// creating vars
let integerA = faker.random.number();
let integerB = faker.random.number();

// test for add
describe('arithmetic.add()'), () => {
 
  it('works when given two integers', () => {
    let message = arthimetic.add (integerA, integerB)
    let sum = integerA + integerB;
    expect(message).toEqual(sum);
  })
  
  it('does not allow objects', () =>{
    let message = arithmetic.add( {}, {});
    expect(message).toBeNull();
  });
  
  it('does not allow arrays', () =>{
    let message = arthimetic.add( [], []);
    expect(message).toBeNull();
  });

  it('does not allow strings', () => {
    let message = arthimetic.add('', '');
    expect(message).toBeNull();
  })
};

// test for subtract
describe('arithmetic.subtract()'), () => {

  it('works when given two integers', () => {
    let message = arthimetic.subtract(integerA, integerB)
    let sum = integerA - integerB;
    expect(message).toEqual(sum);
  })

    it('does not allow objects', () =>{
      let message = arithmetic.subtract({}, {});
      expect(message).toBeNull();
    });

    it('does not allow arrays', () =>{
      let message = arthimetic.subtract([], []);
      expect(message).toBeNull();
    });

    it('does not allow strings',() =>  {
      let message = arthimetic.subtract('', '');
      expect(message).toBeNull();
    })
  };

// test for multiple
describe ('arthimetic.multiply()'), () => {

  it('works when given two integers'), () => {
    let message = arithmetic.multiply(integerA, integerB)
    let sum = integerA * integerB;
    expect(message).toEqual(sum);
  };

  it('does not allow objects', () => {
    let message = arthimetic.multiply({}, {});
    expect(message).toBeNull();
  });

  it('does not allow arrays', () => {
    let message = arthimetic.multiply([], []);
    expect(message).toBeNull();
  });
}

// tests for division

describe ('arithmetic.divide()'), () => {

  it('works when given two integers'), () => {
    let message = arithmetic.divide(integerA, integerB)
    let sum = integerA / integerB;
    expect(message).toEqual(sum);
  };

  it('does not allow either integers to be zero'), () => {
  let message = arthimetic.divide(0, integerA);
  expect(message).toBeNull();
  };

  it('does not allow objects', () => {
    let message = arthimetic.multiply({}, {});
    expect(message).toBeNull();
  });

  it('does not allow arrays', () => {
    let message = arthimetic.multiply([], []);
    expect(message).toBeNull();
  });




