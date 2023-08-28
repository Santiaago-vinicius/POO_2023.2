function saudacao(nome, pronome) {
    if (pronome === void 0) { pronome = "Sr"; }
    console.log("".concat(pronome, ". ").concat(nome));
}
var nome = "Sávia";
var pronomeTratamento = "Sra"; // Pronome de tratamento opcional
saudacao(nome, pronomeTratamento); // Imprime a saudação com o nome e o pronome de tratamento
