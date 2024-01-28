// Challenge
// Instruction

// Implement a function eqArrays which takes in two arrays and returns true or false, 
// based on a perfect match.

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false


// Instruction
// Use assertEqual to write test cases for various scenarios.

// The tests can be written below the definition of your function. 
// Here's one example to get you started.

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// Please write out the rest of the assertions.

// Define function called assertEqual that takes in two arrays as arguments.
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
};

// Use assertEqual function to test if the actual and expected are the same. 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 3, 5], [3, 5, 7]), true); // => should FAIL
assertEqual(eqArrays([2, 5, 7], [2, 3, 7]), false); // => should PASS
assertEqual(eqArrays([1, 3, 5], [1, 3, 5]), false); // => should FAIL
assertEqual(eqArrays([], []), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 9]), true); // => should FAIL
assertEqual(eqArrays(['chicken', 2, 2], [3, 0, 2]), false); // => should PASS

