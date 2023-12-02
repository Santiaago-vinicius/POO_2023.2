/* Crie uma interface chamada IComparavel com um método chamado comparar que
receba uma forma geométrica como parâmetro e retorna um inteiro como
resultado. Implemente em cada uma das classes do exemplo anterior a interface
retornando -1, 0 e 1 caso a área da forma seja menor, igual ou maior que a
passada via parâmetro.*/
export interface FiguraGeometrica {
    calcularArea(): number
    calcularPerimetro(): number
}

export interface IComparavel {
    comparar(outraForma: FiguraGeometrica): number
}

export class Quadrado implements FiguraGeometrica, IComparavel {
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

    comparar(outraForma: FiguraGeometrica): number {
        if (outraForma.calcularArea() < this.calcularArea()) {
            return 1
        } else if (outraForma.calcularArea() > this.calcularArea()) {
            return -1
        } else {
            return 0
        }
    }
}

export class Triangulo implements FiguraGeometrica, IComparavel {
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
        return 3 * this.base
    }

    comparar(outraForma: FiguraGeometrica): number {
        if (outraForma.calcularArea() < this.calcularArea()) {
            return 1
        } else if (outraForma.calcularArea() > this.calcularArea()) {
            return -1
        } else {
            return 0
        }
    }
}

export class Circulo implements FiguraGeometrica, IComparavel {
    raio: number

    constructor(raio: number) {
        this.raio = raio
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio
    }

    comparar(outraForma: FiguraGeometrica): number {
        if (outraForma.calcularArea() < this.calcularArea()) {
            return 1
        } else if (outraForma.calcularArea() > this.calcularArea()) {
            return -1
        } else {
            return 0
        }
    }
}

export class Retangulo implements FiguraGeometrica, IComparavel {
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

    comparar(outraForma: FiguraGeometrica): number {
        if (outraForma.calcularArea() < this.calcularArea()) {
            return 1
        } else if (outraForma.calcularArea() > this.calcularArea()) {
            return -1
        } else {
            return 0
        }
    }
}
