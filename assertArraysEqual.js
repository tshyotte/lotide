
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);

  if (!result) {
    console.log(`Oops! Not same as [${array2}]`);
  } else {
    console.log(`Well guessed! Array one is same as [${array2}].`);
  }
};

assertArraysEqual(eqArrays([7, 6, 12]), [0, 6, 12]);

module.exports = assertArraysEqual;
 
