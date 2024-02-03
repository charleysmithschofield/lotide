
// Challenge:
// Implements assertObjectsEqual which will take in two objects and console.log
// an appropriate message to the console.


// Function to compare two objects for equality, incl the values that are arrays
const eqArrays = (object1, object2) => {
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

      // If the values associated with the key are arrays, call eqObjects
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


// Implement assertObjectsEqual which will take in an actual and an expected value.
const assertObjectsEqual = function(actual, expected) {

  // Import the library so the function can use it
  const inspect = require('util').inspect;
  
  // if statement comparing the actual value to the expected value
  if (eqArrays(actual, expected)) {
    // console.log assertion passed message because equal
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    // console.log assertion failed message because not equal
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  console.log(`Example label: ${inspect(actual)}`);
};
assertObjectsEqual({ a: '1', b: '2'}, { b: '2', a: '1'});
