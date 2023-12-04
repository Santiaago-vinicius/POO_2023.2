abstract class Funcionario {
    protected salario: number
    constructor(salario: number){
    this.salario = salario
    }
    abstract getBonificacao(): number
    
}

class Gerente extends Funcionario{
    getBonificacao(): number{
        return this.salario * 0.40
    }
}

class Diretor extends Funcionario{
    getBonificacao(): number {
        return this.salario * 0.60
    }
}

class Presidente extends Funcionario{
    getBonificacao(): number {
        return this.salario + 1000
    }
}
let g: Gerente = new Gerente(1200);
console.log(`Gerente: ${g.getBonificacao()}`);

let d: Diretor =new Diretor(1300);
console.log(`Diretor: ${d.getBonificacao()}`);

let p: Presidente = new Presidente(20000);
console.log(`Presidente: ${p.getBonificacao()}`);