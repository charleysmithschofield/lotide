
// Challenge:
// Implements assertObjectsEqual which will take in two objects and console.log
// an appropriate message to the console.


// requires the function eqArrays from the eqArrays.js file
const eqArrays = require('./eqArrays');

// requires function to compare two objects for equality
const eqObjects = require('./eqObjects');


// Implement assertObjectsEqual which will take in an actual and an expected value.
const assertObjectsEqual = function(actual, expected) {

  // Import the library so the function can use it
  const inspect = require('util').inspect;
  
  // if statement comparing the actual value to the expected value
  if (eqObjects(actual, expected)) {
    // console.log assertion passed message because equal
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    // console.log assertion failed message because not equal
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
assertObjectsEqual({ a: '1', b: '2'}, { b: '2', a: '1'});

// exports assertObjectsEqual function
module.exports = assertObjectsEqual;