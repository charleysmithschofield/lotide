
/*
Often times we need to filter our data by removing some unwanted
items, so that we can focus on the "good stuff" that we need.
An example of this is all the candy kids get while trick-or-treating
for Halloween.
Many of these kids create a separate pile of candy which doesn't include
all the stuff that they don't like.
(I hated getting Dubble Bubble as a kid!)

It's for tasks like this that our function without can come in handy.
*/

/*

Challenge
Implement without which will return a subset of a given array, removing
unwanted elements.


Instruction
 - This function should take in a source array and a itemsToRemove array.
 - It should return a new array with only those elements from source that
   are not present in the itemsToRemove array.
 - Use assertArraysEqual to write test cases for various scenarios.
 - The tests can be written below the definition of your function.
 - Write a test case to make sure that the original array is not modified.

Warning
 - It's okay for without to not function correctly when using nested
   arrays or arrays of objects. We will save this "deeper" problem for another day.
*/

// requires eqArrays function to compare arrays for equality
const eqArrays = require('./eqArrays');

// requires assertArraysEqual to compare arrays for equality and return assertion passed or failed messages
const assertArraysEqual = require('./assertArraysEqual');


// Returns a new array with elements from 'source' that are not present in the itemsToRemove array.
const without = function(source, itemsToRemove) {
  let result = [];
  // for of loop to iterate through the elements of the source.
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }
  return result;
};

// Test cases
const words = ["hello", "world", "lighthouse"];
const result1 = without(words, ["lighthouse"]);
assertArraysEqual(result1, ["hello", "world"]); // Test removing "lighthouse"

// Make sure the original array was not changed by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const result2 = without([4, 6, 3], [4]);
assertArraysEqual(result2, [6, 3]); // Test removing 4

const result3 = without(["8", "2", "9"], [7, 2, "4"]);
assertArraysEqual(result3, ["8", "9"]); // Test removing "2", "9", 7, "4"

const result4 = without([1, 2, 3], []);
assertArraysEqual(result4, [1, 2, 3]); // Test with empty itemstoRemove array.


// exports without function
module.exports = without;