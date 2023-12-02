"use strict";
/*Refaça a questão 04 do exercício usando interfaces com os métodos propostos
em vez de herança. Crie também um script que instancie e teste diferentes formas
geométricas.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = exports.Circulo = exports.Triangulo = exports.Quadrado = void 0;
var Quadrado = /** @class */ (function () {
    function Quadrado(lado) {
        this.lado = lado;
    }
    Quadrado.prototype.calcularArea = function () {
        return this.lado * this.lado;
    };
    Quadrado.prototype.calcularPerimetro = function () {
        return 4 * this.lado;
    };
    return Quadrado;
}());
exports.Quadrado = Quadrado;
var Triangulo = /** @class */ (function () {
    function Triangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Triangulo.prototype.calcularArea = function () {
        return (this.base * this.altura) / 2;
    };
    Triangulo.prototype.calcularPerimetro = function () {
        // Considerando um triângulo equilátero para simplificar o exemplo
        return 3 * this.base;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this.raio = raio;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * Math.pow(this.raio, 2);
    };
    Circulo.prototype.calcularPerimetro = function () {
        return 2 * Math.PI * this.raio;
    };
    return Circulo;
}());
exports.Circulo = Circulo;
var Retangulo = /** @class */ (function () {
    function Retangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Retangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    Retangulo.prototype.calcularPerimetro = function () {
        return 2 * (this.base + this.altura);
    };
    return Retangulo;
}());
exports.Retangulo = Retangulo;
