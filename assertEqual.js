
// assertEqual is a function that compares an actual value to an expected value and will show if that assertion passed or failed.
const assertEqual = function(actual, expected) {
  // if actual is equal to expected, return assertion passed message
  if (actual === expected) {
    console.log(`Assertion Passed ✅: ${actual} === ${expected}`);
    // if actual is note equal to expected, return assertion failed message
  } else {
    console.log(`Assertion Failed ❌: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;