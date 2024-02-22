// Lotide: Map Function

// TESTING OUR CODE - Add our assertArraysEqual and eqArrays functions into the file:

// requires eqArrays function to compare arrays for equality
const eqArrays = require('./eqArrays');

// requires assertArraysEqual to compare arrays for equality and return assertion passed or failed messages
const assertArraysEqual = require('./assertArraysEqual');

// an array of words
const words = ["Morty", "is", "the", "best", "cat", "ever"];

// define map function (higher order function) which takes in two arguments,
// array and callback
const map = function(array, callback) {

  // initialize an empty array to store the results
  const results = [];

  // for..of loop to iterate through the elements of the words array
  for (let item of array) {
    // push the results of the callback function to our results array
    results.push(callback(item));
  }
  // return the results
  return results;
};

// calling the map function on the array 'words' and passing in a function
const results1 = map(words, word => word[0]);
console.log(results1);


// test cases: check if the map function correctly applies the callback function


const expected = ["M", "i", "t", "b", "c", "e"];
// should return the first letter of each word in the word array
assertArraysEqual(map(words, word => word[0]), expected); // should pass



const numbers = [3, 6, 9, 12, 15];
const expectedNumbers = [9, 18, 27, 36, 45];
// to multiply each number in the numbers array by 3
assertArraysEqual(map(numbers, num => num * 3), expectedNumbers); // should pass

const num = [1, 2, 3, 4, 5];
const expectedNum = [2, 3, 6, 8, 10];
// to multiply each number in the num array by 2
assertArraysEqual(map(num, num => num * 2), expectedNum); // should fail

// exports map function
module.exports = map;