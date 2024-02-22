
// countOnly Function:

/*
Write a function called, countOnly, that takes in a collection of items (`allItems`)
& count the occurences of specific items as specified by the `itemsToCount1 object.

This function must return an object (`results`) where the keys are the items to be
counted, and the values are the counts of those items in the collection.
*/


// requires assertEqual function, compares actual and expected values
const assertEqual = require('./assertEqual');


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

// exports countOnly function
module.exports = countOnly;