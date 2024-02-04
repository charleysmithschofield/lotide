// Map Function

// Our map function will take in two arguments:
// 1. An array to map.
// 2. A callback function.

// The map function will return a new array based on the results of the callback
// function.



// Initial code:

// // An array of words
// const words = ["Morty", "is", "the", "best", "cat", "ever"];

// // Calling the map function on the array 'words' and passing in a function
// const results1 = words.map(word => word[0]);
// console.log(results1);

// WHEN WE RUN THIS CODE, WHAT SHOULD BE THE OUTPUT?
// Output: The code above will return a Reference error b/c map is not defined.



// // An array of words
// const words = ["Morty", "is", "the", "best", "cat", "ever"];

// // define map function (higher order function) which takes in two arguments,
// // array and callback
// const map = function(array, callback) {

//   // Initialize an empty array to store the results
//   const results = [];

//   for (let item of array) {
//     console.log('item BEFORE: ', item);
//     console.log('item AFTER: ', callback(item));
//     console.log('---');
//   }
//   // return the results
//   return results;
// };

// // Calling the map function on the array 'words' and passing in a function
// const results1 = map(words, word => word[0]);
// console.log(results1);


/*
1. WHAT IS HAPPENING IN THE CODE ABOVE?

Our map function (a higher order function), can call the callback function.
This callback function is the one passed in as the second argument in the map function.
Since map is passing in the original item to it, our test code which calls map know
to pass in a callback function which accepts that one and only argument.

2. WHAT WILL PRINT TO THE CONSOLE NOW WHEN WE RUN THE CODE?

Output:
item BEFORE: Morty
item AFTER: M

item BEFORE: is
item AFTER: i

etc.
*/


// Now we need to populate our results array and remove these debug friendly (console.log)
// statements. To do this we need to complete the for loop by pushing each item into our
// results array.


// // An array of words
// const words = ["Morty", "is", "the", "best", "cat", "ever"];

// // define map function (higher order function) which takes in two arguments,
// // array and callback
// const map = function(array, callback) {

//   // Initialize an empty array to store the results
//   const results = [];

//   for (let item of array) {
//     results.push(callback(item));
//   }
//   // return the results
//   return results;
// };

// // Calling the map function on the array 'words' and passing in a function
// const results1 = map(words, word => word[0]);
// console.log(results1);


// WHEN WE RUN THIS CODE, WHAT SHOULD BE THE OUTPUT?
// We should see an array of the first letter from each of the words in our words array.
// Output: [ 'M', 'i', 't', 'b', 'c', 'e' ]



// TESTING OUR CODE - Add our assertArraysEqual and eqArrays functions into the file:
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// An array of words
const words = ["Morty", "is", "the", "best", "cat", "ever"];

// define map function (higher order function) which takes in two arguments,
// array and callback
const map = function(array, callback) {

  // Initialize an empty array to store the results
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  // return the results
  return results;
};

// Calling the map function on the array 'words' and passing in a function
const results1 = map(words, word => word[0]);
console.log(results1);


// Tests
assertArraysEqual(["M"], ["M"]); // should pass
assertArraysEqual(["i"], ["I"]); // should fail
assertArraysEqual(["cat"], ["c"]); // should fail




