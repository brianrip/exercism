class ETL {
  transform(old) {
    var expected = {};

    for (var key in old) {
      for (var i = 0; i < old[key].length; i++) {
        var newKey = old[key][i].toLowerCase();
        expected[newKey] = parseInt(key);
      }
    }
    return expected;
  }
}

module.exports = ETL;
