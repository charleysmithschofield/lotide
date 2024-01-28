
// Create a function, called flatten, which will take in an array containing elements including nested arrays of elements,
// and return a "flattened" version of the array.

// The lodash implementation can handle seemingly unlimited levels of "nested" arrays (arrays containing arrays containing
// arrays containing ... you get the point).

// Our function however, will for now be much simpler and only handle one level of nesting.

// Tips
// As you loop through the outer array, each element could either be an array or not. While you could do a type check using
// typeof to determine what each element is, there's a better way.


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

const flatten = function(arr) {
  let flattenedArray = [];

  for (const element of arr) {
    if (!Array.isArray(element)) {
      flattenedArray.push(element);
    } else {
      for (const innerElement of element) {
        flattenedArray.push(innerElement);
      }
    }
  }
  return flattenedArray;
};

assertArraysEqual([1, 2], [1,2]);
assertArraysEqual([2,2], [1,2]);
assertArraysEqual([],[1,2]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([[1, 3], [5, 4], 5, [6]]), [1, 3, 5, 6, 9]); // => [1, 3, 4, 6, 9]
assertArraysEqual(flatten([[1, 4], []]), [1, 4]); // => [6]
