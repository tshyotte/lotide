const assertEqual = ('../tail');
const assert = require('chai').assert;
const tail = require('../tail');

// test code
//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result.length, 2); 
//assertEqual(result[0], "Lighthouse"); 
//assertEqual(result[1], "Labs");

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns 2 for ['5', '7'] length", () => {
    let result = tail(['5', '7', '8']);
    assert.strictEqual(result.length, 2); 
  });

  it("retuns ['Ligthhouse, 'Labs'] for ['Hello', 'Lighthouse, 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), [ 'Lighthouse', 'Labs']);
  });
  
  //it("retuns '' for empty array", () => {
    //assert.strictEqual(tail([]), "");
 // });

});