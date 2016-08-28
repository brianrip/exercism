class BinarySearch {
  constructor(data) {
    this.array = validateData(data);
  }

  indexOf(value) {
    return this.array.lastIndexOf(value);
  }
}

function findMiddleIndex(data) {
  var i = data.length;
  var middleIndex = Math.round(i/2)
  return middleIndex
}

function validateData(data) {
  var sortedData = data.concat().sort(function (a, b) {  return a - b;  })
  if (identicalArrays(data, sortedData)) {
    return data
  } else {
    return undefined
  }
}

function identicalArrays(original, sorted) {
  var i = original.length;
  if (i !== sorted.length) {
    return false;
  }
  while (i--) {
    if (original[i] !== sorted[i]) {
      return false;
    }
  }
  return true
}

module.exports = BinarySearch
