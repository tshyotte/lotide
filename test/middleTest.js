const middle = require('../middle');
//const assertArraysEqual = require('../assertArraysEqual');

const result = middle([9, 23, 6, 7, 1]);

console.log(result);
assertArraysEqual(result, [6]);