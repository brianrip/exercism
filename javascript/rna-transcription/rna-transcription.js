var DnaTranscriber = function() {
  this.toRna = function (dna) {
    var dnaMapping = { G: 'C',
                       C:'G',
                       T: 'A',
                       A: 'U' };
    var rna = '';
    for (n = 0; n < dna.length; n++) {
      rna += dnaMapping[dna[n]]
      // console.log(dna);
    };
    return rna;
  };
};
module.exports = DnaTranscriber
