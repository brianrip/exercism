class BinarySearch {
  constructor(data) {
    this.array = validateData(data)
  }
}

function validateData(data) {
  var sortedShit = data.concat().sort(function (a, b) {  return a - b;  })
  console.log(data);
  console.log(sortedShit);
  if (sortedShit === data) {
    return data
  } else {
    return undefined
  }
}

// function sortNumber(a, b) {
//     return a - b;
// }

module.exports = BinarySearch
