var array = [1, 2, 3, 4, 5];
var arrayDobrado = array.map(function (numero) { return numero * 2; });
console.log("Array dobrado:", arrayDobrado);
var somaTotal = array.reduce(function (acumulador, numero) { return acumulador + numero; }, 0);
console.log("Soma total dos elementos:", somaTotal);
