const eqArrays = require('../eqArrays');

//test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 21, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 5]), false);
