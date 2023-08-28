function formatarArrayParaString(array) {
    var resultado = "";
    array.forEach(function (numero, index) {
        resultado += numero.toString();
        if (index < array.length - 1) {
            resultado += "-";
        }
    });
    return resultado;
}
var numeros = [1, 2, 3, 4, 5];
var resultadoFormatado = formatarArrayParaString(numeros);
console.log(resultadoFormatado);
