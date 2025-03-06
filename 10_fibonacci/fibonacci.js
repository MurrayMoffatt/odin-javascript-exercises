const fibonacci = function(n) {
  if (isNaN(n)) return "OOPS";
  if (n < 0) return "OOPS";
  if (n == 0) return 0;
  let fib = 0;
  let num1 = 1;
  let num2 = 0;
  for (let i = 2; i <= n; i++) {
    fib = num1 + num2;
    num2 = num1;
    num1 = fib;
  }
  return num1;
};

// Do not edit below this line
module.exports = fibonacci;
