class Words {

  count(str) {
    var allWords = str.split(" ");
    var wordsObject = {};
    return { word: allWords.length };
  }
}

module.exports = Words;
