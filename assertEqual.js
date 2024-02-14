
/* assertEqual: static method writes an error message to the console \n
                if the assertion is false. If the assertion is true \n
                nothing happens. */


// FUNCTION IMPLEMENTATION

// const assertEqual = function(actual, expected) {

// };

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


// What would happen if we were to run the above code?
// It would not produce any output because it doesn't have any instructions \n
// to execute.

// * Remember a function with an empty body doesn't necessarily fail. \n


// Implementing assertEqual:
// Make the function compare the two values it takes in and print \n
// out a message telling us if they match or not.

// If the values match it should print (console.log):
// Assertion Passed: [actual] === [expected]
// (but with your values filled in).

// If the values do not match it should print (console.log):
// Assertion Failed: [actual] !== [expected]
// (but with your values filled in).

/* Test the following scenarios:
  - Comparing identical strings
  - Comparing non-identical strings
  - Comparing identical numbers
  - Comparing non-identical numbers
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed ❌: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;