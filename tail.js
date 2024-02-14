
// tail is a function which returns the "tail" of an array. The "tail" is everything except for the first element.

// Define the function called tail.
const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  }
  // Return the array minus the head of the array.
  return arr.slice(1);
};

// exports tail
module.exports = tail;