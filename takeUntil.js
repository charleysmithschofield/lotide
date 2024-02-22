// Lotide: Take Until Function

/*
This function will take in two parameters:
1. The array to work with
2. The callback

This function will return a "slice of the array with elements taken from the beginning".
It should keep going until the callback returns a truthy value.
*/


// requires eqArrays function to compare arrays for equality
const eqArrays = require('./eqArrays');

// requires assertArraysEqual to compare arrays for equality and return assertion passed or failed messages
const assertArraysEqual = require('./assertArraysEqual');


// Define takeUntil function that accepts an array and a callback function as arguments
const takeUntil = function(array, callback) {

  // Initialize an empty variable to store the results from the callback function
  let result1 = [];
  
  // Use a for..of loop to iterate through each element in the array
  for (const item of array) {
    // Check if the callback function returns a truthy value for the current element
    if (callback(item)) {
      break;
    } else {
      // If true, push the current element to the results array
      result1.push(item);
    }
  }
  // Return the final results from the array
  return result1;
};
  
// Test Case 1:
const array1 = ["Morty", "is", "the", "best", "cat", "ever"];
const expected1 = ["Morty", "is", "the", "best"];
// should return all the words in array1 until the word "cat".
assertArraysEqual(takeUntil(array1, word => word === "cat"), expected1); // should pass

// Test Case 2:
const array2 = [1, 20, 40, 60, 80, 100, 120, 140, 160];
const expected2 = [1, 20, 40, 60, 80];
// should return all the numbers until the number 100.
assertArraysEqual(takeUntil(array2, x => x === 100), expected2); // should pass

// exports takeUntil function
module.exports = takeUntil;