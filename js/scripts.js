var globalVar = {};
//Return the first and last cha of a string
function alphaOmega() {
  globalVar.sentence = prompt("weka udaku hapa");

  var first = globalVar.sentence.charAt(0).toUpperCase();

  var last = globalVar.sentence.slice(-1).toUpperCase();

  var result = first + last;

  return result;

}

//Reverse a sentence
function reverseString(str) {

  var splitString = str.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");

  return joinArray;
}

//Calling two functions
function twiceCall(str) {

  var result = reverseString(alphaOmega());

  return  globalVar.sentence + " " + result
}
