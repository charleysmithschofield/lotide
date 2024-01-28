
// Challenge

// Instruction
// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

// The message will be similar to that of assertEqual.
// In fact, you could refer to the code for assertEqual to help you implement this.
// Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.

// Warning
// Functions that do not return values and instead print out messages to the console are more difficult to test using assertions.
// This is because we cannot simply compare their return value to an expected value.


// For this reason, we will not be writing assertions (test code) for assertArraysEqual.
// That said, you can and should call the function below its declaration and visually ensure that the message printed to the console
// is accurate.

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual([1, 2], [1,2]); 
assertArraysEqual([2,2], [1,2]);
assertArraysEqual([],[1,2]);