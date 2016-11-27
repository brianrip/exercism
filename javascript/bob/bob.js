class Bob {
  
  hey(phrase){
    if (isUpperCase(phrase) && onlyNumbers(phrase) && questionWithNum(phrase)) {
      return "Whoa, chill out!";
    } else if (isQuestion(phrase)) {
      return "Sure.";
    } else if (silence(phrase)) {
      return "Fine. Be that way!";
    } else
      return "Whatever.";
  }

}
  function isUpperCase(str){
    return str === str.toUpperCase();
  }

  function silence(str){
    return str.trim().length === 0;
  }

  function isQuestion(str){
    return str.slice(-1) === "?";
  }

  function onlyNumbers(str){
    var cleanStr = str.replace(/[, ]+/g, "");
    return isNaN(cleanStr);
  }

  function questionWithNum(str){
    var cleanStr = str.replace("?", "");
    return isNaN(cleanStr);
  }


module.exports = Bob;
