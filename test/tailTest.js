const assertEqual = ('../tail');
const tail = require('../tail');
//const assertEqual = require('../assertEqual');

// test code
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); 
assertEqual(result[0], "Lighthouse"); 
assertEqual(result[1], "Labs");