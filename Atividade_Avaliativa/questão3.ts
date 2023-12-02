/*Se uma classe que herda de uma abstrata e não implementa os seus métodos, o
que ocorre?
Resposta: Quando uma classe herda de uma classe abstrata mas não implementa 
todos os métodos abstratos definidos, ela própria se torna uma classe abstrata,
ou seja, se a ClasseConcreta não implementar o método imprimaAlgo() 
herdado da ClasseAbstrata, a ClasseConcreta também se tornará uma 
classe abstrata e não poderá ser instanciada diretamente.*/

abstract class ClasseAbstrata1 {
    abstract imprimaAlgo(): void
}

abstract class ClasseConcreta1 extends ClasseAbstrata1 {
    // Se este método não for implementado aqui, a ClasseConcreta se torna abstrata
}


testarClasseConcreta()

