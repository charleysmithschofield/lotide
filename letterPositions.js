
/*
This challenge is similar to the countLetters activity and allows us
to spend some more time solving problems with objects.

We'll implement a new function letterPositions which will return all
the indices (zero-based positions) in the string where each character
is found.

For each letter, instead of returning just one number to represent its
number of occurrences, multiple numbers may be needed to represent all
the places in the string that it shows up.
*/


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
  // This check ensures that neither actual nor expected is undefined before comparing them.
  // if (actual === undefined || expected === undefined) {
  //   console.log("❌ Assertion Failed: one of the arguments is undefined");
  //   return; // Exit the function if any of the arguments is undefined.
  // }
  
  // Only proceed to compare arrays if both actual and expected are defined.
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== ' ') {
      if (!results[char]) {
        results[char] = [];
      }
      results[char].push(i);
    }
  }
  return results;
};

console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);
assertArraysEqual(letterPositions("lighthouse in the house").g, [2]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions("lighthouse in the house").t, [4, 14]);
assertArraysEqual(letterPositions("lighthouse in the house").o, [6, 19]);
assertArraysEqual(letterPositions("lighthouse in the house").u, [7, 20]);
assertArraysEqual(letterPositions("lighthouse in the house").s, [8, 21]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
assertArraysEqual(letterPositions("lighthouse in the house").n, [12]);
  