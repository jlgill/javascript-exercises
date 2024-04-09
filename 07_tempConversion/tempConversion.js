function convertToCelsius(fahrenheit) {
  // Conversion formula: (°F - 32) * 5/9
  return Number(((fahrenheit - 32) * 5 / 9).toFixed(1));
}

// Function to convert Celsius to Fahrenheit
function convertToFahrenheit(celsius) {
  // Conversion formula: (°C * 9/5) + 32
  return Number(((celsius * 9 / 5) + 32).toFixed(1));
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
