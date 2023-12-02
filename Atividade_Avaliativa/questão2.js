//Explique o que é necessário para que a compilação da ClasseConcreta ocorra sem erros:
/* Resposta: Para evitar erros de compilação, todos os métodos definidos pela classe
abstrata devem ser implementados.
No exemplo em questão 'ClasseConcreta' está estendendo 'ClasseAbstrata', que possui o método
'imprimiaAlgo(), que deve ser implementado na classe concreta*/
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
var ClasseAbstrata = /** @class */ (function () {
    function ClasseAbstrata() {
    }
    return ClasseAbstrata;
}());
var ClasseConcreta = /** @class */ (function (_super) {
    __extends(ClasseConcreta, _super);
    function ClasseConcreta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClasseConcreta.prototype.imprimaAlgo = function () {
        console.log("Imprimindo algo na classe concreta");
    };
    return ClasseConcreta;
}(ClasseAbstrata));
// testando 
function testarClasseConcreta() {
    var instancia = new ClasseConcreta();
    instancia.imprimaAlgo();
}
testarClasseConcreta();
