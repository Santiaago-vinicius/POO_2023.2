function exibir(...mensagens: string[]): void {
    mensagens.forEach(mensagem => {
        console.log(mensagem)
    })
}

//exibir("a", "b") // Chama a função com 2 parâmetros
//exibir("a", "b", "c") // Chama a função com 3 parâmetros
exibir("a", "b", "c", "d") // Chama a função com 4 parâmetros
