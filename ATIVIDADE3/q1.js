"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function numeroImpar(x) {
    if (x === void 0) { x = 4; }
    if (x % 2 === 0) {
        return false; // O número é par
    }
    else {
        return true; // O número é ímpar
    }
}
console.log(numeroImpar());
