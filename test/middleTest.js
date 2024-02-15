
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


// TEST CODE
assertArraysEqual([1, 2], [1,2]); // => 1,2 === 1,2 (will pass)
assertArraysEqual([2,2], [1,2]); // => 2,2 !== 1,2 (will fail)
assertArraysEqual([],[1,2]); // => !== 1,2 (will fail)

// Test cases for arrays with one or two elements
assertArraysEqual(middle([1]), []); // => [] (will pass)
assertArraysEqual(middle([1, 3]), []); // => [] (will pass)

// Test cases for arrays with odd numer of elements
assertArraysEqual(middle([1, 2, 4]), [2]); // => [2] (will pass)
assertArraysEqual(middle([2, 3, 4, 5, 7]), [4]); // => [4] (will pass)

// Test cases for arrays with even number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3] (will pass)
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4] (will pass)