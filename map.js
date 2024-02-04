// Lotide: Map Function

// TESTING OUR CODE - Add our assertArraysEqual and eqArrays functions into the file:

// function to compare if two arrays are equal
const eqArrays = function(arr1, arr2) {
  // if statement to compare array lengths for equality
  if (arr1.length !== arr2.length) {
    return false;
  }

  // for loop to iterate through array 1
  for (let i = 0; i < arr1.length; i++) {
    // if statement to compare the elements of array1 and array2
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// function to assert if two arrays are equal and log the result
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// an array of words
const words = ["Morty", "is", "the", "best", "cat", "ever"];

// define map function (higher order function) which takes in two arguments,
// array and callback
const map = function(array, callback) {

  // initialize an empty array to store the results
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  // return the results
  return results;
};

// calling the map function on the array 'words' and passing in a function
const results1 = map(words, word => word[0]);
console.log(results1);


// tests
assertArraysEqual(["M"], ["M"]); // should pass
assertArraysEqual(["i"], ["I"]); // should fail
assertArraysEqual(["cat"], ["c"]); // should fail