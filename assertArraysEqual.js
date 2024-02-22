
// requires the function eqArrays from the eqArrays.js file
const eqArrays = require('./eqArrays');

// assertArraysEqual is a function that determines if two arrays are identical
const assertArraysEqual = function(actual, expected) {
  // if the actual and expected are the same, print assertion passed message
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    // if the actual and expected are not the same, print assertion failed message
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// exports assertArraysEqual
module.exports = assertArraysEqual;