
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const wordsTail = tail(words);
assertEqual(wordsTail.length, 2); // Check the length of the returned array
assertEqual(words.length, 3); // Check that the original array has not changed

// Test Case 2: Array with one element, yields an empty array.
const wordsSingle = ["Hello"];
const singleTail = tail(wordsSingle);
assertEqual(singleTail.length, 0); // Check the length of the returned array
assertEqual(wordsSingle.length, 1); // Check that the original array has not changed

// Test Case 3: Empty array, yields an empty array for its tail.
const emptyArray = [];
const emptyArrayTail = tail(emptyArray);
assertEqual(emptyArrayTail.length, 0); // Check the length of the returned array
assertEqual(emptyArray.length, 0); // Check that the original array has not changed

