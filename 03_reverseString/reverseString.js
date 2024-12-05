const reverseString = function(inputString) {
  let result = "";
  for (let i = inputString.length - 1; i > -1; i--) {
    result += inputString[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
