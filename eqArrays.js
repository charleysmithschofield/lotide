
const assertEqual = require('./assertEqual');

// The function eqArrays takes in two arrays and returns true or false, based on a perfect match.

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

// exports eqArrays function
module.exports = eqArrays;
