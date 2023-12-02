import { Quadrado, Triangulo, Circulo, Retangulo, FiguraGeometrica, IComparavel } from './figuras'

class TesteFormasGeometricas {
    static testarComparacoes() {
        const quadrado1 = new Quadrado(5)
        const quadrado2 = new Quadrado(7)
        const triangulo1 = new Triangulo(3, 4)
        const triangulo2 = new Triangulo(5, 6)
        const circulo1 = new Circulo(3)
        const circulo2 = new Circulo(5)
        const retangulo1 = new Retangulo(4, 6)
        const retangulo2 = new Retangulo(5, 5)

        function comparar(forma1: IComparavel, forma2: FiguraGeometrica) {
            const comparacao = forma1.comparar(forma2)
            if (comparacao === -1) {
                console.log('A área da primeira forma é menor do que a segunda.')
            } else if (comparacao === 1) {
                console.log('A área da primeira forma é maior do que a segunda.')
            } else {
                console.log('As áreas das formas são iguais.')
            }
        }

        console.log('Comparação entre áreas do quadrado 1 e quadrado 2:')
        comparar(quadrado1, quadrado2)

        console.log('Comparação entre áreas do quadrado 1 e retângulo 1:')
        comparar(quadrado1, retangulo1)

        console.log('Comparação entre áreas do triângulo 1 e círculo 1:')
        comparar(triangulo1, circulo1)

        console.log('Comparação entre áreas do triângulo 2 e círculo 2:')
        comparar(triangulo2, circulo2)
        
        console.log('Comparação entre áreas do triângulo 2 e retagunlo 2:')
        comparar(triangulo2, retangulo2)
    }
}

TesteFormasGeometricas.testarComparacoes()
