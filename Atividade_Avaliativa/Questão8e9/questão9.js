"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var figuras_1 = require("./figuras");
var TesteFormasGeometricas = /** @class */ (function () {
    function TesteFormasGeometricas() {
    }
    TesteFormasGeometricas.testarComparacoes = function () {
        var quadrado1 = new figuras_1.Quadrado(5);
        var quadrado2 = new figuras_1.Quadrado(7);
        var triangulo1 = new figuras_1.Triangulo(3, 4);
        var triangulo2 = new figuras_1.Triangulo(5, 6);
        var circulo1 = new figuras_1.Circulo(3);
        var circulo2 = new figuras_1.Circulo(5);
        var retangulo1 = new figuras_1.Retangulo(4, 6);
        var retangulo2 = new figuras_1.Retangulo(5, 5);
        function comparar(forma1, forma2) {
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
        comparar(quadrado1, quadrado2);
        console.log('Comparação entre áreas do quadrado 1 e retângulo 1:');
        comparar(quadrado1, retangulo1);
        console.log('Comparação entre áreas do triângulo 1 e círculo 1:');
        comparar(triangulo1, circulo1);
        console.log('Comparação entre áreas do triângulo 2 e círculo 2:');
        comparar(triangulo2, circulo2);
        console.log('Comparação entre áreas do triângulo 2 e retagunlo 2:');
        comparar(triangulo2, retangulo2);
    };
    return TesteFormasGeometricas;
}());
TesteFormasGeometricas.testarComparacoes();
