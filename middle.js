
// Challenge
// Instruction
// Implement middle which will take in an array and return the middle-most element(s) of the given array.

// The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

// For arrays with one or two elements, there is no middle. Return an empty array.
// middle([1]) // => []
// middle([1, 2]) // => []
// For arrays with odd number of elements, an array containing a single middle element should be returned.
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
// Instruction
// Write test assertions for the various scenarios with middle

// We can and should use the assertArraysEqual function for testing our new function. That's why we brought it in here to begin with.

// Warning


// Test/Assertion Fnctions
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
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  const length = array.length;
  // Cases with only one or two elements
  if (array.length <= 2) {
    return [];
  // Cases with odd number of elements
  } else if (array.length % 2 === 1) {
    const middleIndex = Math.floor(length / 2);
    return [array[middleIndex]];
  // Cases with even number of elements
  } else if (array.length % 2 === 0) {
    const middleIndex1 = array.length / 2 - 1;
    const middleIndex2 = array.length / 2;
    return [array[middleIndex1], array[middleIndex2]];
  }
};

// TEST CODE
assertArraysEqual([1, 2], [1,2]); // => 1,2 === 1,2
assertArraysEqual([2,2], [1,2]); // => 2,2 !== 1,2
assertArraysEqual([],[1,2]); // => !== 1,2

// Test cases for arrays with one or two elements
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 3]), []); // => []

// Test cases for arrays with odd numer of elements
assertArraysEqual(middle([1, 2, 4]), [2]); // => [2]
assertArraysEqual(middle([2, 3, 4, 5, 7]), [4]); // => [4]

// Test cases for arrays with even number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]