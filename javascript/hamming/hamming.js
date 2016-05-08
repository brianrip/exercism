Hamming = function(dnaA, dnaB) {
  this.compute = function(dnaA, dnaB) {
    if (dnaA.length !== dnaB.length) {
      throw new Error("DNA strands must be of equal length.");
    }
    var distanceCount = 0;
    for (var n = 0; n < dnaA.length; n += 1 ) {
      if (dnaA[n] != dnaB[n]) {
        distanceCount += 1;
      }
    }
    return distanceCount
  }
}

module.exports = Hamming;
