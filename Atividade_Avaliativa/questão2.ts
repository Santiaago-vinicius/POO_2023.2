//Explique o que é necessário para que a compilação da ClasseConcreta ocorra sem erros:
/* Resposta: Para evitar erros de compilação, todos os métodos definidos pela classe
abstrata devem ser implementados. 
No exemplo em questão 'ClasseConcreta' está estendendo 'ClasseAbstrata', que possui o método
'imprimiaAlgo(), que deve ser implementado na classe concreta*/

abstract class ClasseAbstrata {
    abstract imprimaAlgo(): void
}

class ClasseConcreta extends ClasseAbstrata {
    imprimaAlgo(): void {
        console.log("Imprimindo algo na classe concreta")
    }
}
// testando 
function testarClasseConcreta() {
    const instancia = new ClasseConcreta()

    instancia.imprimaAlgo()
}

testarClasseConcreta()

/*A classe ClasseConcreta agora tem o método imprimaAlgo() definido, 
que é obrigatório por causa da herança da classe abstrata ClasseAbstrata*/