const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;


const temperaturaCelsius = 25;
const temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);

console.log(`${temperaturaCelsius} grados Celsius son ${temperaturaFahrenheit} grados Fahrenheit.`);
