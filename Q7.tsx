class Retangulo {
    l1: number = 0
    l2: number = 0

    calculararea() : number {
        return this.l1 * this.l2
    }

    perimetro() : number {
        return 2 * (this.l1 + this.l2)
    }
}

class testaRetangulo {
    static main():void {
        const retangulo = new Retangulo()
        retangulo.l1 = 8
        retangulo.l2 = 5

        const area = retangulo.calculararea()
        console.log(`area = ${area}`)

        const perimetro = retangulo.perimetro()
        console.log(`perimetro = ${perimetro}`)

    }
}

testaRetangulo.main()

