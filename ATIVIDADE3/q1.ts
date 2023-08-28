import promptSync from 'prompt-sync';
function numeroImpar(x: number = 4) {
    if (x % 2 === 0) {
        return false; // O número é par
    } else {
        return true; // O número é ímpar
    }
}

console.log(numeroImpar())
