import { Quadrado, Triangulo, Retangulo, Circulo } from './figuras'

// Testando as figuras geométricas
const quadrado = new Quadrado(5)
console.log("Área do quadrado:", quadrado.calcularArea())
console.log("Perímetro do quadrado:", quadrado.calcularPerimetro())

const triangulo = new Triangulo(4, 4)
console.log("Área do triângulo:", triangulo.calcularArea())
console.log("Perímetro do triângulo:", triangulo.calcularPerimetro())

const circulo = new Circulo(3);
console.log("Área do círculo:", circulo.calcularArea())
console.log("Perímetro do círculo:", circulo.calcularPerimetro())

const retangulo = new Retangulo(5, 3)
console.log("Área do retângulo:", retangulo.calcularArea())
console.log("Perímetro do retângulo:", retangulo.calcularPerimetro())
