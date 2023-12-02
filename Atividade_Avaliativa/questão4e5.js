/*4.Imagine que você deve modelar várias figuras geométricas em TypeScript e que
cada uma tem sua forma específica de calcular área e perímetro. Proponha e
implemente uma hierarquia de classes usando uma classe abstrata chamada
FiguraGeometrica e outras concretas: Quadrado, Triangulo, etc.*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica() {
    }
    return FiguraGeometrica;
}());
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado(lado) {
        var _this = _super.call(this) || this;
        _this.lado = lado;
        return _this;
    }
    Quadrado.prototype.calcularArea = function () {
        return this.lado * this.lado;
    };
    Quadrado.prototype.calcularPerimetro = function () {
        return 4 * this.lado;
    };
    return Quadrado;
}(FiguraGeometrica));
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(base, altura) {
        var _this = _super.call(this) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    Triangulo.prototype.calcularArea = function () {
        return (this.base * this.altura) / 2;
    };
    Triangulo.prototype.calcularPerimetro = function () {
        return 3 * this.base;
    };
    return Triangulo;
}(FiguraGeometrica));
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
var figuras = [];
// Criando instâncias de figuras
var quadrado = new Quadrado(5);
var triangulo = new Triangulo(4, 3);
figuras.push(quadrado);
figuras.push(triangulo);
figuras.forEach(function (figura) {
    console.log("Área:", figura.calcularArea());
    console.log("Perímetro:", figura.calcularPerimetro());
});
