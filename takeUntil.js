// Lotide: Take Until Function

/*
This function will take in two parameters:
1. The array to work with
2. The callback

This function will return a "slice of the array wit elements taken from the beginning".
It should keep going until the callback returns a truthy value.
*/


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

// Define takeUntil function that accepts an array and a callback function as arguments.
const takeUntil = function(array, callback) {

  let result1 = [];
  for (const item of array) {
    if (callback(item)) {
      result1.push(item);
    }
  }
  return result1;
};
  
// Test Case 1:
const array1 = ["Morty", "is", "the", "best", "cat", ",", "ever"];
const expected1 = ["Morty", "is", "the", "best"];
// should return all the words in array1 until the word "cat".
assertArraysEqual(takeUntil(array1, word => word === ","), expected1); // should pass

// Test Case 2:
const array2 = [1, 20, 40, 60, 80, 100, 120, 140, 160];
const expected2 = [1, 20, 40, 60, 80];
// should return all the numbers until the number 100.
assertArraysEqual(takeUntil(array2, x => x < 100), expected2); // should pass