/*4.Imagine que você deve modelar várias figuras geométricas em TypeScript e que
cada uma tem sua forma específica de calcular área e perímetro. Proponha e
implemente uma hierarquia de classes usando uma classe abstrata chamada
FiguraGeometrica e outras concretas: Quadrado, Triangulo, etc.*/

abstract class FiguraGeometrica {
    abstract calcularArea(): number
    abstract calcularPerimetro(): number
}

class Quadrado extends FiguraGeometrica {
    lado: number

    constructor(lado: number) {
        super()
        this.lado = lado
    }

    calcularArea(): number {
        return this.lado * this.lado
    }

    calcularPerimetro(): number {
        return 4 * this.lado
    }
}

class Triangulo extends FiguraGeometrica {
    base: number
    altura: number

    constructor(base: number, altura: number) {
        super()
        this.base = base
        this.altura = altura
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2
    }

    calcularPerimetro(): number {
        return 3 * this.base
    
    }
}
//questão 5
/*Não podemos aplicar o operador new em FiguraGeometrica, mas porque então
podemos realizar o seguinte código de instanciação:
abstract class FiguraGeometrica {
//...
}
let figuras: FiguraGeometrica[] = new Array();*/

/* Resposta seguida do exemplo que testa tanto a questão 4 quanto a 5: 
No TypeScript, você pode criar um array de um tipo abstrato como FiguraGeometrica[] 
porque os arrays são estruturas de dados que podem conter diferentes tipos de objetos, 
isso não significa que você está instanciando diretamente 
um objeto do tipo abstrato FiguraGeometrica. */
let figuras: FiguraGeometrica[] = []

// Criando instâncias de figuras
const quadrado = new Quadrado(5)
const triangulo = new Triangulo(4, 3)

figuras.push(quadrado)
figuras.push(triangulo)

figuras.forEach(figura => {
    
    console.log("Área:", figura.calcularArea());
    console.log("Perímetro:", figura.calcularPerimetro())
})
