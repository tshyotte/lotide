//const eqArrays = require('../eqArrays');
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//test code
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//assertEqual(eqArrays([1, 2, 3], [1, 21, 3]), true);
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 5]), false);

describe("#eqArray", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for [1, 2, 3] and [1, 21, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 21, 3]), false); 
  });

  it("retuns false for [1, 2, 3], [1, 2, 3, 5]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3, 5]), false);
  });
  
  //it("retuns '' for empty array", () => {
   // assert.strictEqual(head([""]), "");
  //});

});
