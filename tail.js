
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
  if (actual.length !== expected.length) {
    // If they are the aren't the same, console log failure.
    console.log(`Assertion Failed ❌: ${actual} !== ${expected}`);
    return;
    // Else if there is only 1 element in the array, return an empty array.
  } else if (actual.length === 1) {
    return [];
  } else if (actual.length === 0) {
    return [];
  }

  // Use a for loop to iterate through each array comparing each element.
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`Assertion Failed ❌: ${actual} !== ${expected}`);
    } return;
  }

  // If the arrays are the same console Assertion Passed message.
  console.log(`Assertion Passed ✅: ${actual} === ${expected}`);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);

// Test Case 2: Array with one element, yields an empty array.
// const words = ["Hello"];
// tail(words);
// assertEqual(words.length, 1);

// Test Case 3: Empty array, yields an empty array for its tail.
// const words = [];
// tail(words);
// assertEqual(words.length, 0);



// How could you use assertEqual to test out our tail function?
// You could use the assertEqual to check the return array elements, for example:

// // Check the returned array elements.
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensures we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensures first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensures second element is "Labs"
