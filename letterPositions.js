
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

// requires eqArrays function to compare arrays for equality
const eqArrays = require('./eqArrays');

// requires assertArraysEqual to compare arrays for equality and return assertion passed or failed messages
const assertArraysEqual = require('./assertArraysEqual');


// Define letterPositision function
const letterPositions = function(sentence) {
  const results = {};

  // for loop to iterate through the sentence
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    // if character is a space leave array empty
    if (char !== ' ') {
      if (!results[char]) {
        results[char] = [];
      }
      // else push the character to the results
      results[char].push(i);
    }
  }
  return results;
};

let result = letterPositions("lighthouse in the house");

assertArraysEqual(result.l, [0]);
assertArraysEqual(result.i, [1, 11]);
assertArraysEqual(result.g, [2]);
assertArraysEqual(result.h, [3, 5, 15, 18]);
assertArraysEqual(result.t, [4, 14]);
assertArraysEqual(result.o, [6, 19]);
assertArraysEqual(result.u, [7, 20]);
assertArraysEqual(result.s, [8, 21]);
assertArraysEqual(result.e, [9, 16, 22]);
assertArraysEqual(result.n, [12]);
  

// exports letterPositions function
module.exports = letterPositions;