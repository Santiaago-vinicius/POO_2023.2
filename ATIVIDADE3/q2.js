function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number === 2) {
        return true;
    }
    // Verificar divisibilidade até a raiz quadrada do número
    var sqrt = Math.sqrt(number);
    for (var i = 2; i <= sqrt; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
var num = 17; // Número que você quer verificar se é primo
if (isPrime(num)) {
    console.log("".concat(num, " \u00E9 um n\u00FAmero primo."));
}
else {
    console.log("".concat(num, " n\u00E3o \u00E9 um n\u00FAmero primo."));
}
