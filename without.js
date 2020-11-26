// Function implementation
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

const without = function(source, itemsToRemove) {

  let newList = source.filter(x => !itemsToRemove.includes(x));
  return newList;
  
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


 
