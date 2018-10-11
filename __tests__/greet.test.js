'use strict';

// declaring dependencies
const faker = require('faker');
const greetingTest = require('../lib/greet.js');

// declaring vars
const quickName = faker.name.findName();

// greet test

describe('greetingTest.hello()'), () => {

  it('works when given a string', () => {
    let message = greetingTest.hello(''),
    let returnMessage = 'hello' + (''),
    expect(message).toEqual(returnMessage)
  })

  it('works when given world', () => {
    let message = greetingTest.hello('world'),
      let returnMessage = 'hello' + ('world'),
      expect(message).toEqual(returnMessage)
  })

  it('does not allow objects', () => { 
    let message = greetingTest.hello({}),
    expect(message).toBeNull();
  });


  it('does not allow arrays', () => {
    let message = greetingTest.hello([]),
      expect(message).toBeNull();
  });





}