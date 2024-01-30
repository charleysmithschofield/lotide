
// countOnly Function:


/* Let's work together to implement countOnly.

This function should take in a collection of items and return counts
for a specific subset of those items. It won't count everything.

In order to decide what to count, it will also be given an idea of
which items we care about and will only count those, ignoring the
others.

Items in our case will be limited to Strings.
*/


// SUMMARIZED GOAL:
// Implemtns a function, called countOnly, that takes in a collection
// of strings and returns counts for a specified subset of those strings.


// // FUNCTION BEHAVIOR:

// // countOnly will be given an array and an object. It will return an
// // object containing the counts of everything that the input object
// // listed.


// // Copy your assertEqual function into this file:
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed ✅: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed ❌: ${actual} !== ${expected}`);
//   }
// };


// // INITIAL FUNCTION DEFINITION:

// // allItems: an array of strings that we need to look through
// // itemsToCount: an object specifying what to count
// const countOnly = function(allItems, itemsToCount) {
//   // Your implementation goes here
//   const results = {}
//   return results;
// };


/* Don't forget functions can only return on thing. That thing can be
   a primitive data type (like a number, boolean, null or string).
   In some cases it makes sense to return an object.
*/

// Our function countOnly needs to return all the strings found in
// the input array, and their counts. Therefore it will need to re-
// turn an object to represent the stats.



// // WRITE A TEST FIRST:

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

/*
Questions:
Why did we not use assertEqual to compare the resulting object
(result1) directly?

Why did we need to instead break our test case into three different
assertion checks?

Answer:
Our assertEqual function can only compare primitive values.
We ran into this issue when comparing arrays and ended up implementing
assertArraysEqual, if you recall.

The same will need to be done with objects to make our test code
cleaner.
Until we have that specialized assertion function, we will do it this,
more cumbersome way.
*/



// LOOP OVER allItems:

// In order to know how many Jason's are in our list, we need to scan
// the entire list. Let's start will a simple loop and make sure it
// works.


// assertEqual function, compares actual and expected values
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed ❌: ${actual} !== ${expected}`);
  }
};


// countOnly function to take in a collection of names and return counts
const countOnly = function(allItems, itemsToCount) {
  // Intialize an empty object to take in a collection of names and return counts.
  const results = {};

  // Loop through each item in the collection
  for (const item of allItems) {
    // Check if the current item should be counted based on the itemsToCount object
    if (itemsToCount[item]) {
      // If the item is alrady in the result object, increment the count
      if (results[item]) {
        results[item] += 1;
      } else {
        // If the item is not in the results object, add it with a count of 1
        results[item] = 1;
      }
    }
    console.log(item);
  }
  // Return the final results object
  return results;
};

// Array of first names
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// Call countOnly function with an object specifying which names to count
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// Test cases using assertEqual to check if the counts are as expected
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);




// COUNT THEM ALL:
// Although we're meant to count only the items that matter, a simpler
// next step is to simply count everything.

// To do that we would just need to:

// Inside the loop, increment the counter for each item.
// Set a property with that string key to the value that was already
// there (or zero if there were nothing there) with a 1 aded to it.

// if (results[item]) {
//   results[item] += 1;
// } else {
//   results[item] = 1;
// }


// ONLY COUNT SPECIFIC ITEMS:

// Lastly we need to be more specific about which should be counted,
// ignoring the other items.

// Add an if condition to only increment our count in resuts if the
// item is found in the itemsToCount object.