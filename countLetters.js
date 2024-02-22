
/*
Challenge:
  Create a function, called countLetters, that takes in a sentence
  (string) and then returns a count of each of the letters in it.

  For example:
  countLetters('LHL') should return results that L appears twice
  and H appears once.

Tips:
  You can use for..of loops with strings.

*/

// requires the assertEqual function that compares actual to expected
const assertEqual = require('./assertEqual');


// countLetters function that takes in a string
const countLetters = function(str) {
  // Initialize an empty object to store the results
  const results = {};

  for (const letter of str) {
    // Ignore spaces
    if (letter !== ' ') {
      // Check if the letter is already in the results object
      if (results[letter]) {
        // If yes, increment it
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  // Return final results object
  return results;
};

// Call countLetters function with a string
const str = `hello lighthouse labs`;

// Call countLeters function with a string
const results = countLetters(str);


// Test cases using assertEqual to check if the counts are as expected
assertEqual(results["h"], 3);
assertEqual(results["e"], 2);
assertEqual(results["l"], 4);
assertEqual(results["o"], 2);
assertEqual(results["i"], 1);
assertEqual(results["g"], 1);
assertEqual(results["t"], 1);
assertEqual(results["u"], 1);
assertEqual(results["s"], 2);
assertEqual(results["a"], 1);
assertEqual(results["b"], 1);
assertEqual(results[" "], 0);
assertEqual(results["$"], 0);

// exports countLetters function
module.exports = countLetters;