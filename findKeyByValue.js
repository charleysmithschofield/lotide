
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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed ❌: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_Fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// function to find a key by the value
const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  
  // for.. of loop to iterate through the array of keys
  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

// test code
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'comedy');
assertEqual(findKeyByValue(bestTVShowsByGenre, "Rick and Morty", 'documentary'));
assertEqual(findKeyByValue(bestTVShowsByGenre, "Andor", 'true crime'));