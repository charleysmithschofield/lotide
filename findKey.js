// Lotide: Find Key

/*
Challenge:
- Implement the function, findKey, which takes in an object and a callback as arguments.
- It should scan the object and return the first key for which the callback returns a truthy value.
- If no key is found, then it should return undefined.
*/

/*
PSEUDOCODE:
1. Define a function, called findKey, that accepts an object and a callback as arguments.
2. Iterate over the keys of the object usign a for..in loop or Object.keys.
3. For each key, apply the callback to the corresponding value.
4. If the callback returns true, return the current key.
5. If no key is found, return undefined.
6. Write tests for the findKey function.
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed ❌: ${actual} !== ${expected}`);
  }
};

// Define findKey function that takes in an object and a callback function
const findKey = function(object, callback) {

  // Use a for..in loop to iterate through the objects keys.
  for (const key in object) {
    // For each key, apply the callback function.
    if (callback(object[key])) {
      // If the callback returns true, return the current key
      return key;
    }
  }
  return undefined;
};


// TEST CODE:

// Test code findKey for key stars: 2.
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"

// Test code findKey for key stars: 1.
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1), "Blue Hill"); // => "Blue Hill"

// Test code findKey for key stars: 3.
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "Akaleri"); // => "Akaleri"