const array = [1, 2, 3, 4, 5];


const arrayDobrado = array.map(numero => numero * 2)
console.log("Array dobrado:", arrayDobrado)

const somaTotal = array.reduce((acumulador, numero) => acumulador + numero, 0)
console.log("Soma total dos elementos:", somaTotal)
