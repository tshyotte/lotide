// Function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const countLetters = function(sentence) {
  let results = {};

  for (let strChar of sentence) {
    if (strChar !== " ") {

      if (results[strChar]) {
        results[strChar] += 1;
      } else {
        results[strChar] = 1;
      }
    }

  }
  
  return results;
};

const test = countLetters("lighthouse in the house");
assertEqual((test instanceof Object), true);