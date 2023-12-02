/*Se uma classe que herda de uma abstrata e não implementa os seus métodos, o
que ocorre?
Resposta: Quando uma classe herda de uma classe abstrata mas não implementa
todos os métodos abstratos definidos, ela própria se torna uma classe abstrata,
ou seja, se a ClasseConcreta não implementar o método imprimaAlgo()
herdado da ClasseAbstrata, a ClasseConcreta também se tornará uma
classe abstrata e não poderá ser instanciada diretamente.*/
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
var ClasseAbstrata1 = /** @class */ (function () {
    function ClasseAbstrata1() {
    }
    return ClasseAbstrata1;
}());
var ClasseConcreta1 = /** @class */ (function (_super) {
    __extends(ClasseConcreta1, _super);
    function ClasseConcreta1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClasseConcreta1;
}(ClasseAbstrata1));
function testarClasseConcreta1() {
    var instancia = new ClasseConcreta();
    instancia.imprimaAlgo();
}
testarClasseConcreta();
