"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var figuras_1 = require("./figuras");
// Criando instâncias das formas geométricas
var quadrado1 = new figuras_1.Quadrado(5);
var quadrado2 = new figuras_1.Quadrado(7);
var triangulo1 = new figuras_1.Triangulo(3, 4);
var triangulo2 = new figuras_1.Triangulo(5, 6);
var circulo1 = new figuras_1.Circulo(3);
var circulo2 = new figuras_1.Circulo(5);
var retangulo1 = new figuras_1.Retangulo(4, 6);
var retangulo2 = new figuras_1.Retangulo(5, 5);
// Testando cálculos de áreas e perímetros
console.log('Área do quadrado 1:', quadrado1.calcularArea());
console.log('Perímetro do quadrado 1:', quadrado1.calcularPerimetro());
console.log('Área do triângulo 1:', triangulo1.calcularArea());
console.log('Perímetro do triângulo 1:', triangulo1.calcularPerimetro());
console.log('Área do círculo 1:', circulo1.calcularArea());
console.log('Perímetro do círculo 1:', circulo1.calcularPerimetro());
console.log('Área do retângulo 1:', retangulo1.calcularArea());
console.log('Perímetro do retângulo 1:', retangulo1.calcularPerimetro());
// Testando comparação de áreas entre figuras
function compararAreas(forma1, forma2) {
    var comparacao = forma1.comparar(forma2);
    if (comparacao === -1) {
        console.log('A área da primeira forma é menor do que a segunda.');
    }
    else if (comparacao === 1) {
        console.log('A área da primeira forma é maior do que a segunda.');
    }
    else {
        console.log('As áreas das formas são iguais.');
    }
}
console.log('Comparação entre áreas do quadrado 1 e quadrado 2:');
compararAreas(quadrado1, quadrado2);
console.log('Comparação entre áreas do quadrado 1 e retângulo 1:');
compararAreas(quadrado1, retangulo1);
console.log('Comparação entre áreas do triângulo 1 e círculo 1:');
compararAreas(triangulo1, circulo1);
console.log('Comparação entre áreas do círculo 1 e círculo 2: ');
compararAreas(circulo1, circulo2);
