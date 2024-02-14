// Instructions:
// Create a function head which returns the first item in the array.

// The head function should not return the first element as an array.
// It should simply return the element itself.
// Use assertEqual to write test cases for various scenarios.

// The tests can be written below the definition of your function.

// Here are some test assertions for you to implement and make pass:

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const assertEqual = require('./assertEqual');

// Define function head:
const head = function(arr) {
  return arr[0];
};


module.exports = head;