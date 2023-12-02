"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var figuras_1 = require("./figuras");
// Testando as figuras geométricas
var quadrado = new figuras_1.Quadrado(5);
console.log("Área do quadrado:", quadrado.calcularArea());
console.log("Perímetro do quadrado:", quadrado.calcularPerimetro());
var triangulo = new figuras_1.Triangulo(4, 4);
console.log("Área do triângulo:", triangulo.calcularArea());
console.log("Perímetro do triângulo:", triangulo.calcularPerimetro());
var circulo = new figuras_1.Circulo(3);
console.log("Área do círculo:", circulo.calcularArea());
console.log("Perímetro do círculo:", circulo.calcularPerimetro());
var retangulo = new figuras_1.Retangulo(5, 3);
console.log("Área do retângulo:", retangulo.calcularArea());
console.log("Perímetro do retângulo:", retangulo.calcularPerimetro());
