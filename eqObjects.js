
// STEP 1 - FUNCTION DEFINITION:

// Implement the definition for function eqObjects which will take in two objects
// and return true or false, based on a perfect match.

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// const eqObjects = function(object1, object2) {

// };


// STEP 2 - PRIMITIVES AS VALUES (TESTS):

// Start with a couple basic tests. One for true, and one for false.


// const assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     console.log(`✅: Assertion Passed`);
//   } else {
//     console.log(`❌: Assertion Failed`);
//   }
// };

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
// //We need to use that return value in combination with assertEquals to test if the function is working correctly.
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


// This should return:
// ❌: Assertion Failed (because undefined)
// ❌: Assertion Failed (because undefined)


// STEP - 3: PRIMITIVES AS VALUES (IMPLEMENTATIONS):

/*
Our tests above are deliverately simple, only using objects that have primitive values,
It's generally considered good practive to start with solving simple scenarios first and
then add more logic from there.

In this simple scenario, two objects are equal when:
  - They have the same number of keys
  - The value for each key in one object is the same as the value for that same key
    in the other object.
*/


// const assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     console.log(`✅: Assertion Passed`);
//   } else {
//     console.log(`❌: Assertion Failed`);
//   }
// };

// const eqObjects = function(object1, object2) {
//   // Logic for comparing objects will go here

//   // To compare objects we need to use Objects.keys to return the keys into an
//   // array for both objects.
//   const object1Keys = Object.keys(object1);
//   const object2Keys = Object.keys(object2);

//   if (object1Keys.length !== object2Keys.length) {
//     return false;
//   }
    
//   for (const key of object1Keys) {
//     if (object1[key !== object2[key]]) {
//       return false;
//     }
//   }
//   return true;
// };

// const shirtObject = { color: "red", size: "medium" };
// console.log(Object.keys(shirtObject));

// const anotherShirtObject = { size: "medium", color: "red" };
// console.log(Object.keys(anotherShirtObject));

// // Test Code
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

// // Test Code
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);


// STEP - 4: ARRAYS AS VALUES (TESTS):

// Handlign primitive values is a great way to start. What if the objects have array
// values though? We'll start by adding new shirt objects. These shirt objects will
// have multiple colors, which will be stored in the colors key, as an array.

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     console.log(`✅: Assertion Passed`);
//   } else {
//     console.log(`❌: Assertion Failed`);
//   }
// };

// // To compare objects we need to use Objects.keys to return the keys into an
// // array for both objects.

// const eqObjects = (object1, object2) => {
//   const object1Keys = Object.keys(object1);
//   const object2Keys = Object.keys(object2);

//   if (object1Keys.length !== object2Keys.length) {
//     return false;
//   }
    
//   for (const key of object1Keys) {
//     // If the values are not arrays, perform regular comparison
//     if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true

// // Test multiColorShirtObject and anotherMultiColorShirtObject
// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);


// STEP - 5: ARRAYS AS VALUES (IMPLMENTATION):

// Function to compare two arrays for equality.
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Iterate through each element of the arrays & check if equal
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // If all elements are equal return true
  return true;
};


// Function assert equality and log the result
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅: Assertion Passed`);
  } else {
    console.log(`❌: Assertion Failed`);
  }
};

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

