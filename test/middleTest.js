
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


// TEST CODE
assertArraysEqual([1, 2], [1,2]); // should pass, arrays are equal
assertArraysEqual([2,2], [1,2]); // should fail, arrays are not equal
assertArraysEqual([],[1,2]); // should fail, arrays are not equal

// Test cases for arrays with one or two elements
assertArraysEqual(middle([1]), []); // shoud pass, empty array as there's only one element
assertArraysEqual(middle([1, 3]), []); // should pass, empty array as there's only two elements

// Test cases for arrays with odd numer of elements
assertArraysEqual(middle([1, 2, 4]), [2]); // => should pass, middle element is 2
assertArraysEqual(middle([2, 3, 4, 5, 7]), [4]); // should pass, middle element is 4

// Test cases for arrays with even number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should pass, middle elements are 2 and 3
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should pass, middle elements are 3 and 4