
// requiring assertEqual and eqArrays files
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test Arrays to check if the arrays are equal
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 3, 5], [3, 5, 7]), false); // => should PASS
assertEqual(eqArrays([2, 5, 7], [2, 3, 7]), false); // => should PASS
assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 9]), false); // => should PASS
assertEqual(eqArrays(['chicken', 2, 2], [3, 0, 2]), false); // => should PASS
