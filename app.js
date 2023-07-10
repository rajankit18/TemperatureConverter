function convertCelsiusToFahrenheit() {
    var celsiusInput = document.getElementById("celsius-input").value;
    var fahrenheitOutput = (celsiusInput * 9/5) + 32;
    document.getElementById("fahrenheit-input").value = fahrenheitOutput.toFixed(2);
  }
  
  function convertFahrenheitToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit-input").value;
    var celsiusOutput = (fahrenheitInput - 32) * 5/9;
    document.getElementById("celsius-input").value = celsiusOutput.toFixed(2);
  }