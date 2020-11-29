const assertEqual = require('./assertEqual');

function head(arr) {
  return arr[0];

};
//test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6]), 6);
assertEqual(head([]), "Hi");

module.exports = head;
