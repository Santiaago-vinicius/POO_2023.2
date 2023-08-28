function formatarArrayParaString(array: number[]): string {
    let resultado: string = ""

    array.forEach((numero, index) => {
        resultado += numero.toString()
        
        if (index < array.length - 1) {
            resultado += "-"
        }
    })

    return resultado
}

const numeros = [1, 2, 3, 4, 5]

const resultadoFormatado = formatarArrayParaString(numeros)
console.log(resultadoFormatado)
