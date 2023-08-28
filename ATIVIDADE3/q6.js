function exibir() {
    var mensagens = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mensagens[_i] = arguments[_i];
    }
    mensagens.forEach(function (mensagem) {
        console.log(mensagem);
    });
}
//exibir("a", "b") // Chama a função com 2 parâmetros
//exibir("a", "b", "c") // Chama a função com 3 parâmetros
exibir("a", "b", "c", "d"); // Chama a função com 4 parâmetros
