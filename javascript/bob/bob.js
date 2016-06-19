class Bob {
  constructor(){

  }

  isUpperCase(str){
    return str === str.toUpperCase();
  }

  hey(phrase){
    if (isUpperCase(phrase)) {
      return "Whoa, chill out!";
    } else {
      return "Whatever.";
    }
  }

}


module.exports = Bob;
