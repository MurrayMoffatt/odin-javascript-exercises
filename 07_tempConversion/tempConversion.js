const convertToCelsius = function(inputTemp) {
  outputTemp = (inputTemp - 32) / 1.8;
  return Math.round(outputTemp * 10) / 10;
};

const convertToFahrenheit = function(inputTemp) {
  outputTemp = (inputTemp * 1.8) + 32;
  return Math.round(outputTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
