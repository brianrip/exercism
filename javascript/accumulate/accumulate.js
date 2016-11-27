module.exports = function accumulate(values, accumulator ) {

  var results = [];

  for(var i = 0; i <= (values.length - 1); i++) {
    results.push(accumulator(values[i]));
  }

  return results;
}
