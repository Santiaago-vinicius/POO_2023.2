/*Refaça a questão 04 do exercício usando interfaces com os métodos propostos
em vez de herança. Crie também um script que instancie e teste diferentes formas
geométricas.*/

export interface FiguraGeometrica {
    calcularArea(): number
    calcularPerimetro(): number
}

export class Quadrado implements FiguraGeometrica {
    lado: number

    constructor(lado: number) {
        this.lado = lado
    }

    calcularArea(): number {
        return this.lado * this.lado
    }

    calcularPerimetro(): number {
        return 4 * this.lado
    }
}

export class Triangulo implements FiguraGeometrica {
    base: number
    altura: number

    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2
    }

    calcularPerimetro(): number {
        // Considerando um triângulo equilátero para simplificar o exemplo
        return 3 * this.base
    }
}

export class Circulo implements FiguraGeometrica {
    raio: number

    constructor(raio: number) {
        this.raio = raio
    }

    calcularArea(): number {
        return Math.PI * this.raio ** 2
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio
    }
}

export class Retangulo implements FiguraGeometrica {
    base: number
    altura: number

    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
    }

    calcularArea(): number {
        return this.base * this.altura
    }

    calcularPerimetro(): number {
        return 2 * (this.base + this.altura)
    }
}

