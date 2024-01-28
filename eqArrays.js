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
  // Return string one and two but use toString() function to change the elements to strings. 
  return arr1.toString() === arr2.toString();
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
