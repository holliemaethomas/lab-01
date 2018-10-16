'use strict';

const greetTest = require('../lib/greet.js');
var faker = require('faker');
var randomName = faker.name.findName();

describe('greetTest.hello()', () => {

  it('works when given a name', () => {
    let message = greetTest.hello(randomName);
    let expectedOutput = `hello, ${randomName}`;
    console.log(message);
    expect(message).toEqual(expectedOutput);
  });

  it('works when given ', () => {
    let message = greetTest.hello('world');
    let expectedOutput = `hello, world`;
    console.log(message);
    expect(message).toEqual(expectedOutput);
  });

  it('only allows one param', () => {
    let message = greetTest.hello(randomName, randomName);
    expect(message).toBeNull();
  });

  it('does not allow numeric values', () => {
    let message = greetTest.hello(14);
    expect(message).toBeNull();
  });

  it('does not allow arrays as a param', () => {
    let message = greetTest.hello([]);
    expect(message).toBeNull();
  });

  it('does not allow objects as a param', () => {
    let message = greetTest.hello({});
    expect(message).toBeNull();
  });

  it('requires one param', () => {
    let message = greetTest.hello();
    expect(message).toBeNull();
  });

});
  