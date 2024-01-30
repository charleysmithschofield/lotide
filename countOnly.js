
// countOnly Function:

/* Let's work together to implement countOnly.

This function should take in a collection of items and return counts
for a specific subset of those items. It won't count everything.

In order to decide what to count, it will also be given an idea of
which items we care about and will only count those, ignoring the
others.

Items in our case will be limited to Strings.
*/

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