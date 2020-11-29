//const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  
  //let midArray = array.map(arr => {
    const len = array.length - 1;
    console.log(len);
    const middle = Math.floor(len / 2);
    console.log(middle);
    if (middle / 2 === 0) {
       let arrMiddle = [array[middle], array[middle + 1]];
      return arrMiddle;
    }
     
    return [array[middle]];
    
}

module.exports = middle;
 
