
// requires both the assertArraysEqual file and the eqArrays file
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

// Test arrays that check if
assertArraysEqual([1, 2], [1,2]); // identical, will pass
assertArraysEqual([2,2], [1,2]); // not identical, will fail
assertArraysEqual([],[1,2]); // not identical, will fail