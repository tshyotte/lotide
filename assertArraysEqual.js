
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
    console.log(`Oops! Not same as [${array2}]`);
  } else {
    console.log(`Well guessed! Array one is same as [${array2}].`);
  }
};

assertArraysEqual([7, 6, 12], [0, 6, 12]);
 
