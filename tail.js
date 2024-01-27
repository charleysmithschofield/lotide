
// Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.

// Your function should not modify the array that is passed in. It should return a new array.

// Warning
// Our assertEqual function is too simple to compare array values. JavaScript doesn't allow the use of === or == to compare two arrays.

// Try out the equality checks between arrays in the node REPL to confirm the results shown below.

// [1, 2, 3] === [1, 2, 3] // => false
// [1, 2, 3] == [1, 2, 3] // => false
// // Therefore, we cannot expect this assertion to behave correctly:

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!


// Define the function called tail.
const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  }
  // Return the array minus the head of the array.
  return arr.slice(1);
};
const assertEqual = function(actual, expected) {
  
  // Check the length of the arrays instead of direct comparison
  if (actual.length !== expected.length) {
    console.log(`Assertion Failed ❌: ${actual} !== ${expected}`);
    return;
  }

  // Use a for loop to iterate through each array comparing each element.
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`Assertion Failed ❌: ${actual} !== ${expected}`);
      return;
    }
  }

  console.log(`Assertion Passed ✅: ${actual} === ${expected}`);
};


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const wordsTail = tail(words);
assertEqual(wordsTail.length, 2); // Check the length of the returned array
assertEqual(words.length, 3); // Check that the original array has not changed

// Test Case 2: Array with one element, yields an empty array.
const wordsSingle = ["Hello"];
const singleTail = tail(wordsSingle);
assertEqual(singleTail.length, 0); // Check the length of the returned array
assertEqual(wordsSingle.length, 1); // Check that the original array has not changed

// Test Case 3: Empty array, yields an empty array for its tail.
const emptyArray = [];
const emptyArrayTail = tail(emptyArray);
assertEqual(emptyArrayTail.length, 0); // Check the length of the returned array
assertEqual(emptyArray.length, 0); // Check that the original array has not changed
