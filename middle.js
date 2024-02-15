
// middle is a function that finds the middle elements of an array.

// define middle function
const middle = function(array) {
  const length = array.length;
  // Cases with only one or two elements
  if (array.length <= 2) {
    return [];
  // Cases with odd number of elements
  } else if (array.length % 2 === 1) {
    const middleIndex = Math.floor(length / 2);
    return [array[middleIndex]];
  // Cases with even number of elements
  } else if (array.length % 2 === 0) {
    const middleIndex1 = length / 2 - 1;
    const middleIndex2 = length / 2;
    return [array[middleIndex1], array[middleIndex2]];
  }
};

module.exports = middle;