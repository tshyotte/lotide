const assertEqual = require('./assertEqual');

let tail = function(arr) {
  return arr.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");

module.exports = tail;