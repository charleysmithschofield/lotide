
const assert = require('chai').assert;
const middle = require('../middle');


// Tests if the middle function returns the middle element in an array, while leaving the original array unchanged.

// Test Cases:
describe("#middle", () => {
  it("returns the middle elements of an array, leaving the original array unchanged", () => {
    // Test cases for arrays with one or two elements
    assert.deepEqual(middle([1]), []); // shoud pass, empty array as there's only one element
    assert.deepEqual(middle([1, 3]), []); // should pass, empty array as there's only two elements
  });
});

describe("#middle", () => {
  it("returns the middle elements of an array, leaving the original array unchanged", () => {
    // // Test cases for arrays with odd numer of elements
    assert.deepEqual(middle([1, 2, 4]), [2]); // => should pass, middle element is 2
    assert.deepEqual(middle([2, 3, 4, 5, 7]), [4]); // should pass, middle element is 4
  });
});

describe("#middle", () => {
  it("returns the middle elements of an array, leaving the original array unchanged", () => {
    // Test cases for arrays with even number of elements
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); // should pass, middle elements are 2 and 3
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should pass, middle elements are 3 and 4
  });
});






