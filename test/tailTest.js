
const assertEqual = require('../assertEqual');
const tail = require('../tail');


// Test Cases: Testing that the tail function correctly returns all elements of an array except the first one (the head).

// Test Case: Tests that the orginl array in unchanged.
const words = ["Yo Yo", "Lighthouse", "Labs"];
const wordsTail = tail(words);
assertEqual(wordsTail.length, 2); // Check the length of the returned array
assertEqual(words.length, 3); // Check that the original array has not changed
assertEqual(wordsTail[0], "Lighthouse"); // Check the first element of the returned array

// Test Case 2: Tests that an array with one element, yields an empty array.
const wordsSingle = ["Hello"];
const singleTail = tail(wordsSingle);
assertEqual(singleTail.length, 0); // Check the length of the returned array
assertEqual(wordsSingle.length, 1); // Check that the original array has not changed
assertEqual(wordsSingle[0], "Hello"); // Check the first element of the returned array

// Test Case 3: Test that an empty array, yields an empty array for its tail.
const emptyArray = [];
const emptyArrayTail = tail(emptyArray);
assertEqual(emptyArrayTail.length, 0); // Check the length of the returned array
assertEqual(emptyArray.length, 0); // Check that the original array has not changed

