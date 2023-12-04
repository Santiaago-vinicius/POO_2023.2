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
var Funcionario = /** @class */ (function () {
    function Funcionario(salario) {
        this.salario = salario;
    }
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gerente.prototype.getBonificacao = function () {
        return this.salario * 0.40;
    };
    return Gerente;
}(Funcionario));
var Diretor = /** @class */ (function (_super) {
    __extends(Diretor, _super);
    function Diretor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Diretor.prototype.getBonificacao = function () {
        return this.salario * 0.60;
    };
    return Diretor;
}(Funcionario));
var Presidente = /** @class */ (function (_super) {
    __extends(Presidente, _super);
    function Presidente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Presidente.prototype.getBonificacao = function () {
        return this.salario + 1000;
    };
    return Presidente;
}(Funcionario));
var g = new Gerente(1200);
console.log("Gerente: ".concat(g.getBonificacao()));
var d = new Diretor(1300);
console.log("Diretor: ".concat(d.getBonificacao()));
var p = new Presidente(20000);
console.log("Presidente: ".concat(p.getBonificacao()));
