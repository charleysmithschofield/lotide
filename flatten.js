
// Create a function, called flatten, which will take in an array containing elements including nested arrays of elements,
// and return a "flattened" version of the array.

// The lodash implementation can handle seemingly unlimited levels of "nested" arrays (arrays containing arrays containing
// arrays containing ... you get the point).

// Our function however, will for now be much simpler and only handle one level of nesting.

// Tips
// As you loop through the outer array, each element could either be an array or not. While you could do a type check using
// typeof to determine what each element is, there's a better way.

// requires eqArrays function that compares two arrays for equality, returning true or false.
const eqArrays = require('./eqArrays');

// requires assertArraysEqual function that compares two arrays for equality, returning an assertion passed or failed message.
const assertArraysEqual = require('./assertArraysEqual');

// Define flatten function
const flatten = function(arr) {
  let flattenedArray = [];

  // for..of loop to iterate through the array
  for (const element of arr) {
    // check if the element is an array
    if (!Array.isArray(element)) {
      // push element to the flattenedArray
      flattenedArray.push(element);
    } else {
      // for of loop to iterate through the inner elements
      for (const innerElement of element) {
        // push element to the flattenedArray
        flattenedArray.push(innerElement);
      }
    }
  }
  return flattenedArray;
};

// Test cases
assertArraysEqual([1, 2], [1,2]); // => 1,2 === 1,2 - assertion passed
assertArraysEqual([2,2], [1,2]); // => 2,2 === 1,2 - assertion failed
assertArraysEqual([],[1,2]); // !== 1,2 - assertion failed
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => 1, 2, 3, 4, 5, 6 === 1, 2, 3, 4, 5, 6 - assertion passed
assertArraysEqual(flatten([[1, 3], [5, 4], 5, [6]]), [1, 3, 5, 6, 9]); // => 1, 3, 5, 4, 5, 6 !== 1, 3, 5, 6, 9 - assertion failed
assertArraysEqual(flatten([[1, 4], []]), [1, 4]); // => 1,4 === 1,4 - assertion passed

// exports flatten function
module.exports = flatten;