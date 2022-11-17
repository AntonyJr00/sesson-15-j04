//-----------------------------------------------//
//Ejercicio1
//-----------------------------------------------//

//codigo1---//
let resta = function (x, y) {
  console.log(x - y);
};
resta(41, 6);

//codigo2---//
let expon = function (x, y) {
  console.log(Math.pow(x, y));
};
expon(2, 7);

//codigo3---//
let suma = (x, y) => {
  return x - y;
};
let resulSuma = suma(22, 5);
console.log(resulSuma);

//-----------------------------------------------//
//Ejercicio2//
//-----------------------------------------------//

function celciusToFahrenheit(celcius) {
  let fahrenheit = (celcius * 9) / 5 + 32;
  console.log(`${celcius}°C es igual a ${fahrenheit}°F`);
}
celciusToFahrenheit(32);

function fahrenheitToCelcius(fahrenheit) {
  let toCelcius = ((fahrenheit - 32) * 5) / 9;
  console.log(`${fahrenheit}°F es igual a ${Math.round(toCelcius)}°C`);
}
fahrenheitToCelcius(66);

//function flecha--
let pasaraFahrenheit = (gradoC) => {
  return (fahrenheit = gradoC * 1.8 + 32);
};
let resultado = pasaraFahrenheit(32);
console.log(resultado + " gaa");

//-----------------------------------------------//
//Ejercicio3
//-----------------------------------------------//

function sumario(a, b) {
  console.log(a + b);
}
sumario(13, 32);
