class Retangulo{
    l1: number = 0
    l2: number = 0

    calculararea(): number{
        return this.l1 * this.l2
    }

    calcularperimetro() : number{
        return (this.l1 + this.l2) * 2
    }
}

let retangulo : Retangulo = new Retangulo()
retangulo.l1 = 20
retangulo.l2 = 40
console.log(`A área vale = ${retangulo.calculararea()}`)
console.log(`o perimetro vale = ${retangulo.calcularperimetro()}`)
