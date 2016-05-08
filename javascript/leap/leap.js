
// ```plain
// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400
// ```
var Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  var year = this.year

  return (year % 400 === 0) || ((year % 4 == 0) && (year % 100 != 0))
};

module.exports = Year;
