
// assertEqual is a function that compares an actual value to an expected value and will show if that assertion passed or failed.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed ❌: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;