const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  let i = 0;
  while (i < arr1.length) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    i++;
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);

  if (!result) {
    console.log(`Oops! something went wrong, try again.`);
  } else {
    console.log(`Well done! All looks great.`);
  }
};

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test code

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
console.log("--------------");

const array = ["Hello", "World"];
const results2 = map(array, arr => arr[arr.length - 1]);
console.log(results2);
assertArraysEqual(results1, ['r', 'o', 'a', 'o']);