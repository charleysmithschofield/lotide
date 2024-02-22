
/*
   Implement the function findKeyByValue which takes in an object
   and a value. It should scan the object and return the first key
   which contains the given value. If no key with that given value
   is found, then it should return undefined.
*/

// Define the function findKeyByValue that takes in an object and value.
// Use a for..in loop to iterate through the object.
// Use a condition statement to check if it the key has a value
// If the key doesn't have a value, return undefined.

// requires assertEqual function that compares two values for equality
const assertEqual = require('./assertEqual');

const bestTVShowsByGenre = {
  sci_Fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// The findKeyByValue function takes an object and a value as inputs.
// It returns the first key in the object that has that value.
// If the value does not appear in the object, it returns undefined.
const findKeyByValue = function(object, value) {

  // for..in loop to iterate the object
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

// test code
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'comedy');
assertEqual(findKeyByValue(bestTVShowsByGenre, "Rick and Morty"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Andor"), undefined);

// exports findKeyByValue function
module.exports = findKeyByValue;