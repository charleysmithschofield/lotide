
// requires the function eqArrays from the eqArrays.js file
const eqArrays = require('./eqArrays');

// assertArraysEqual is a function that determines if two arrays are identical
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// exports assertArraysEqual
module.exports = assertArraysEqual;