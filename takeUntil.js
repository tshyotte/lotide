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
    console.log(`Test failled: Ooops! try again.`);
  } else {
    console.log(`Test passed:Great job, keep it up!`);
  }
};

const takeUntil = function(array, callback) {
  const index = array.findIndex(item => callback(item));
  return array.slice(0, index);
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);