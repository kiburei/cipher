//Return the first and last cha of a string
function alphaOmega() {
  var sentence = prompt("Write a sentence here please.");

  var first = sentence.charAt(0).toUpperCase();

  var last = sentence.slice(-1).toUpperCase();

  var result = first + last

  return result

}

//Reverse a sentence
function reverseString(str) {

  var splitString = str.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");

  return joinArray;
}

//Calling two functions
function twiceCall() {

  var result = reverseString(alphaOmega());

  return result
}
