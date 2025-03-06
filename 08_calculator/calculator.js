const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(a) {
  return a.reduce((sum, current) => sum + current, 0);
};

const multiply = function(a) {
  return a.reduce((total, current) => total * current, 1);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  } else {
    let total = 1;
    for (let i = 1; i <= a; i++) {
      total *= i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
