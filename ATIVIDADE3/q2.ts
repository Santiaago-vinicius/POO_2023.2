function isPrime(number: number): boolean {
    if (number <= 1) {
        return false
    }
    
    if (number === 2) {
        return true
    }
    
    // Verificar divisibilidade até a raiz quadrada do número
    const sqrt = Math.sqrt(number)
    for (let i = 2; i <= sqrt; i++) {
        if (number % i === 0) {
            return false
        }
    }
    
    return true
}

const num = 17; // Número que você quer verificar se é primo
if (isPrime(num)) {
    console.log(`${num} é um número primo.`)
} else {
    console.log(`${num} não é um número primo.`)
}
