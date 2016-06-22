"use strict";
class Gigasecond {
  constructor(date){
    this.expectedDate = date.getTime() + Math.pow(10, 12);
  }

  date() {
    return new Date(this.expectedDate);
    }
  }
  module.exports = Gigasecond;
