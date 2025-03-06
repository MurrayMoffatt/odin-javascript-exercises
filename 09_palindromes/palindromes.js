const palindromes = function (text) {
  let lower = text.toLowerCase();
  let clean = lower.replace(/[^a-z0-9]/g, '');
  let reverse = clean.split("").reverse().join("");
  return clean === reverse;
};

// Do not edit below this line
module.exports = palindromes;
