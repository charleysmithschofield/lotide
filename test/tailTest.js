
const assert = require('chai').assert;
const tail = require('../tail');

// Test Case 1: Tests that the tail function returns the tail of an array, the original remains unchanged
describe("#tail", () => {
  it("returns the tail of an array, leaving the original array unchanged", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const wordsTail = tail(words);
    assert.deepEqual(wordsTail.length, 2); // Check the length of the returned array
    assert.deepEqual(words.length, 3); // Check that the original array has not changed
    assert.deepEqual(wordsTail[0], "Lighthouse"); // Check the first element of the returned array
  });
  it("returns an empty array for a single element array, leaving the original array unchanged", () => {
    const wordsSingle = ["Hello"];
    const singleTail = tail(wordsSingle);
    assert.deepEqual(singleTail.length, 0); // Check the length of the returned array
    assert.deepEqual(wordsSingle.length, 1); // Check that the original array has not changed
    assert.deepEqual(wordsSingle[0], "Hello"); // Check the first element of the returned array
  });
  it("returns an empty array for an empty array, leaving the original array unchanged", () => {
    const emptyArray = [];
    const emptyArrayTail = tail(emptyArray);
    assert.deepEqual(emptyArrayTail.length, 0); // Check the length of the returned array
    assert.deepEqual(emptyArray.length, 0); // Check that the original array has not changed
  });
});