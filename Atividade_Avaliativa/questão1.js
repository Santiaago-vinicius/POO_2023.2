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
//Podemos instanciar classes abstratas? Justifique.
/* reposta: não é possivel instancia-las diretamente, pois classes abstradas
são destinadas a serem herdadas por outras, não pode ser instanciada por sí só.


exemplo: */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.mover = function () {
        console.log("Movendo-se...");
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.fazerBarulho = function () {
        console.log("Au au!");
    };
    return Cachorro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.fazerBarulho = function () {
        console.log("Miau!");
    };
    return Gato;
}(Animal));
// Tentativa de instanciar a classe abstrata
var animal = new Animal(); // Isso resultará em um erro
