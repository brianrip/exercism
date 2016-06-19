class Bob {
  constructor(){

  }

  hey(phrase){
    if (isUpperCase(phrase) && onlyNumbers(phrase)) {
      return "Whoa, chill out!";
    } else if (isQuestion(phrase) ) {
      return "Sure.";
    } else
    return "Whatever.";
  }

}
  function isUpperCase(str){
    return str === str.toUpperCase();
  }

  function isQuestion(str){
    return str.slice(-1) === "?";
  }

  function onlyNumbers(str){
    var cleanStr = str.replace(/[, ]+/g, "");
    return isNaN(cleanStr);
  }

  function questionWithNum(str){
    // var cleanStr
    // isNaN(phrase.replace(/[,?]+/g, "") === false)
  }


module.exports = Bob;
