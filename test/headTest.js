const assert = require('chai').assert;
const head = require('../head');

//test code
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"], "Hello");
//head([6]);
//head([]);

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("retuns 'Hello' for 'Hello'", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
  
  it("retuns '' for empty array", () => {
    assert.strictEqual(head([""]), "");
  });

});

