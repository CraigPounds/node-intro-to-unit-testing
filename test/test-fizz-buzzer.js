'use strict';

const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(input) {
  it('input/3 should return fizz, input/5: buzz, input/15: fizz-buzz - other numerical input should return unchanged', function() {
    const normalCases = [
      {num: 1, expected: 1},
      {num: 2, expected: 2},
      {num: 3, expected: 'fizz'},
      {num: 4, expected: 4},
      {num: 5, expected: 'buzz'},
      {num: 6, expected: 'fizz'},
      {num: 7, expected: 7},
      {num: 8, expected: 8},
      {num: 9, expected: 'fizz'},
      {num: 10, expected: 'buzz'},
      {num: 11, expected: 11},
      {num: 12, expected: 'fizz'},
      {num: 13, expected: 13},
      {num: 14, expected: 14},
      {num: 15, expected: 'fizz-buzz'},
      {num: 16, expected: 16},
      {num: 17, expected: 17},
      {num: 18, expected: 'fizz'},
      {num: 19, expected: 19},
      {num: 20, expected: 'buzz'},
      {num: 21, expected: 'fizz'}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    const badInputs = ['15', 'a', '*', 'frog', true, {}, [3, 5]];
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});