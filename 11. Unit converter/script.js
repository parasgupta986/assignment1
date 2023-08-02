function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  // Example usage:
  const celsiusTemperature = 25;
  const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);
  
  