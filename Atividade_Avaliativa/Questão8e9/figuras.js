"use strict";
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
    Quadrado.prototype.comparar = function (outraForma) {
        if (outraForma.calcularArea() < this.calcularArea()) {
            return 1;
        }
        else if (outraForma.calcularArea() > this.calcularArea()) {
            return -1;
        }
        else {
            return 0;
        }
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
        return 3 * this.base;
    };
    Triangulo.prototype.comparar = function (outraForma) {
        if (outraForma.calcularArea() < this.calcularArea()) {
            return 1;
        }
        else if (outraForma.calcularArea() > this.calcularArea()) {
            return -1;
        }
        else {
            return 0;
        }
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this.raio = raio;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * this.raio * this.raio;
    };
    Circulo.prototype.calcularPerimetro = function () {
        return 2 * Math.PI * this.raio;
    };
    Circulo.prototype.comparar = function (outraForma) {
        if (outraForma.calcularArea() < this.calcularArea()) {
            return 1;
        }
        else if (outraForma.calcularArea() > this.calcularArea()) {
            return -1;
        }
        else {
            return 0;
        }
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
    Retangulo.prototype.comparar = function (outraForma) {
        if (outraForma.calcularArea() < this.calcularArea()) {
            return 1;
        }
        else if (outraForma.calcularArea() > this.calcularArea()) {
            return -1;
        }
        else {
            return 0;
        }
    };
    return Retangulo;
}());
exports.Retangulo = Retangulo;
