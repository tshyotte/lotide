// Function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const findKey = function(objects, callback) {
  
  let keys = Object.keys(objects);  
  
  if (keys.length === 0) {
    const result = 'does not exist';
    return result;
  } else {
    for (let key of keys) {
      if (objects[key]) { 
        return key;
      } else {
        result = 'not found';
        return result;
      }
    }
  }

};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
// Test code
assertEqual(findKey, "noma");
