
// STEP 1 - FUNCTION DEFINITION:

// Implement the definition for function eqObjects which will take in two objects
// and return true or false, based on a perfect match.


// requires the function eqArrays from the eqArrays.js file
const eqArrays = require('./eqArrays');

// Function assert equality and log the result
const assertEqual = require('./assertEqual');


// Function to compare two objects for equality, incl the values that are arrays
const eqObjects = (object1, object2) => {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  // If the number of keys is different, the objects are not equal & return false
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  
  // Iterate through each key in the first object
  for (const key of object1Keys) {

    // Check if the values associated with the keys are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

      // If the values associated with the key are arrays, call eqArrays
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      // If the values are not arrays, perform regular comparison
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  // If all the key-value pairs are equal, return true
  return true;
};


// Test objects
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

// Test eqObjects with multiColorShirtObject and anotherMultiColorShirtObject
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true

// Assert equality using assertEqual for better visibility
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);


// Test objects with different values
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

// Test eqObjects with multiColorShirtObject and longSleeveMultiColorShirtObject
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false

// Assert equality using assertEqual for better visibility
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);


// exports eqObjects function
module.exports = eqObjects;