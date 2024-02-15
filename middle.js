
// middle is a function that finds the middle elements of an array.

// define middle function
const middle = function(array) {
  const length = array.length;
  // Cases with only one or two elements
  if (length <= 2) {
    return [];
  }
  const middleIndex = Math.floor(length / 2);
  // Cases with even number of elements
  if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    // Cases with odd number of elements
    return [array[middleIndex]];
  }
};

// exports middle file
module.exports = middle;
