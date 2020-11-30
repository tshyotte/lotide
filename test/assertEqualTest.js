const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

// Test code
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

describe("#assertEqual", () => {
  it("returns false for 'Lighthouse Labs' and 'Bootcamp'", () => {
    assert.strictEqual(assertEqual('Lighthouse Labs', 'Bootcamp'), false);
  });

  it("returns true for 'Hello' and 'Hello'", () => {
    assert.strictEqual(assertEqual('Hello', 'Hello'), true); 
  });

  it("retuns true for 13 equal 13", () => {
    assert.strictEqual(assertEqual(13, 13), true);
  });

});
    