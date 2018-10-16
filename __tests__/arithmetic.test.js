'use strict';

const arithmetic = require('../lib/arithmetic.js');
var faker = require('faker');
var testNumber1 = faker.random.number();
var testNumber2 = faker.random.number();

describe('arithmetic.add()', () => {

  it('works when given two numbers', () => {
    let message = arithmetic.add(testNumber1, testNumber2);
    let expectedOutput = testNumber1 + testNumber2;
    console.log(message);
    expect(message).toEqual(expectedOutput);
  });

  it('does not allow booleans', () => {
    let message = arithmetic.add(false, false);
    expect(message).toBeNull();
  });

  it('does not allow objects', () => {
    let message = arithmetic.add({}, {});
    expect(message).toBeNull();
  });

  it('does not allow arrays', () => {
    let message = arithmetic.add([], []);
    expect(message).toBeNull();
  });

  it('does not allow strings', () => {
    let message = arithmetic.add('55', '30');
    expect(message).toBeNull();
  });

  it('requires one param', () => {
    let message = arithmetic.add();
    expect(message).toBeNull();
  });

});

describe('arithmetic.subtract()', () => {
  it('works when given two numbers', () => {
    let message = arithmetic.subtract(testNumber1, testNumber2);
    let expectedOutput = testNumber1 - testNumber2;
    console.log(message);
    expect(message).toEqual(expectedOutput);
  });

  it('does not allow booleans', () => {
    let message = arithmetic.subtract(false, false);
    expect(message).toBeNull();
  });

  it('does not allow objects', () => {
    let message = arithmetic.subtract({}, {});
    expect(message).toBeNull();
  });

  it('does not allow arrays', () => {
    let message = arithmetic.subtract([], []);
    expect(message).toBeNull();
  });

  it('does not allow strings', () => {
    let message = arithmetic.subtract('45', '30');
    expect(message).toBeNull();
  });

  it('requires one param', () => {
    let message = arithmetic.subtract();
    expect(message).toBeNull();
  });

});

describe('arithmetic.multiply()', () => {
  it('works when given two numbers', () => {
    let message = arithmetic.multiply(testNumber1, testNumber2);
    let expectedOutput = testNumber1 * testNumber2;
    console.log(message);
    expect(message).toEqual(expectedOutput);
  });

  it('does not allow booleans', () => {
    let message = arithmetic.multiply(false, false);
    expect(message).toBeNull();
  });

  it('does not allow arrays', () => {
    let message = arithmetic.multiply([], []);
    expect(message).toBeNull();
  });

  it('does not allow objects', () => {
    let message = arithmetic.multiply({}, {});
    expect(message).toBeNull();
  });

  it('does not allow strings', () => {
    let message = arithmetic.multiply('45', '30');
    expect(message).toBeNull();
  });

  it('requires one param', () => {
    let message = arithmetic.multiply();
    expect(message).toBeNull();
  });

});

describe('arithmetic.divide()', () => {
  it('works when given two numbers', () => {
    let message = arithmetic.divide(testNumber1, testNumber2);
    let expectedOutput = testNumber1 / testNumber2;
    console.log(message);
    expect(message).toEqual(expectedOutput);
  });

  it('neither input can equal zero', () => {
    let message = arithmetic.divide(testNumber1, 0);
    expect(message).toBeNull();
  });

  it('neither input can equal zero', () => {
    let message = arithmetic.divide(0, testNumber2);
    expect(message).toBeNull();
  });

  it('does not allow booleans', () => {
    let message = arithmetic.divide(false, false);
    expect(message).toBeNull();
  });

  it('does not allow arrays', () => {
    let message = arithmetic.divide([], []);
    expect(message).toBeNull();
  });

  it('does not allow objects', () => {
    let message = arithmetic.divide({}, {});
    expect(message).toBeNull();
  });

  it('does not allow strings', () => {
    let message = arithmetic.divide('45', '30');
    expect(message).toBeNull();
  });

  it('requires one param', () => {
    let message = arithmetic.divide();
    expect(message).toBeNull();
  });

});