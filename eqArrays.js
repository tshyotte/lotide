// Function implementation
const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  const len1 = arr1.length;
  const len2 = arr2.length;

  if (len1 !== len2) {
    return false;
  }
  let i = 0;
  while (i < len1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    i++;
  }
  return true;
};

module.exports = eqArrays;
