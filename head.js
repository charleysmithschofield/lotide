// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed ✅: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed ❌: ${actual} !== ${expected}`);
//   }

// // TEST CODE
// assertEqual("hi", "hi"); // comparing identical strings - should pass
// assertEqual("hi", "hello"); // comparing non-identical strings - should fail
// assertEqual(1, 1); // comparing identical numbers - should pass
// assertEqual(1, 3); // comparing non-identical numbers - should fail



// //Instruction
// Create a function head which returns the first item in the array.

// The head function should not return the first element as an array.
// It should simply return the element itself.


// Instruction
// Use assertEqual to write test cases for various scenarios.

// The tests can be written below the definition of your function.

// Here are some test assertions for you to implement and make pass:

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


// Define function head:
const head = function(arr) {
  return arr[0];
};

// Define function assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ✅: ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed ❌: ${actual} !== ${expected}`)
  }
}

// TEST CODE:
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 6);