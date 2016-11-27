class Allergies {

  constructor(score) {
    this.score = score;
    this.allergyMap = {
      128: "cats",
      64: "pollen",
      32: "chocolate",
      16: "tomatoes",
      8: "strawberries",
      4: "shellfish",
      2: "peanuts",
      1: "eggs"
    }
  }

  allergicTo(food) {
    for(var key in this.allergyMap) {
      if (this.allergyMap[key] == food) {
        return key <= this.score
      }
    }
  }

  list() {

    if (this.score === 0) return [];

    if (this.allergyMap[this.score]) return [this.allergyMap[this.score]];

    if (this.score > 256) this.score = this.score - 256;

    var allergies = [];

    Object.keys(this.allergyMap).reverse().forEach((allergyScore) => {
      if (allergyScore <= this.score) {
        allergies.push(this.allergyMap[allergyScore]);

        this.score = this.score - allergyScore;
      }
    })

    return allergies.reverse();

  }

}

module.exports = Allergies
