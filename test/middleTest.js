const assert = require('chai').assert;
const middle = require('../middle');
//const assertArraysEqual = require('../assertArraysEqual');

//const result = middle([9, 23, 6, 7, 1]);
//assertArraysEqual(result, [6]);
//assertArraysEqual(middle(['d', 'a', 'u', 'd', 'i']), ['u']);

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  /*it("returns 1 for length of middle array of ['5', '7', '8']", () => {
    let result = middle(['5', '7', '8']);
    assert.strictEqual(result.length, 1); 
  }); */

  it("retuns ['Ligthhouse'] for ['Hello', 'Lighthouse, 'Labs']", () => {
    assert.deepEqual(middle(['Hello', 'Lighthouse', 'Labs']), [ 'Lighthouse']);
  });
});