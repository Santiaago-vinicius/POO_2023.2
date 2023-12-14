interface Tributavel {
    calcularTributos(): number 
}

class Conta {
    private _nome: string;
    private _saldo: number;

    constructor(nome: string, saldo: number) {
        this._nome = nome;
        this._saldo = saldo;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get saldo(): number {
        return this._saldo;
    }

    set saldo(saldo: number) {
        this._saldo = saldo;
    }
}

class ContaCorrente extends Conta implements Tributavel {
    constructor(nome: string, saldo: number){
        super(nome, saldo)
    }

    calcularTributos(): number {
        return this.saldo * 0.1
    }
}

class SeguroVida implements Tributavel {
    private _valorSeguro: number
    private _nome: string

    constructor(valorSeguro: number, nome: string) {
        this._valorSeguro = valorSeguro
        this._nome = nome
    }

    get valorSeguro(): number {
        return this._valorSeguro
    }

    get nome(): string {
        return this._nome
    }

    calcularTributos(): number {
        return 50.0 
    }
}


// Exemplo de uso
const contaCorrente = new ContaCorrente('Conta Corrente', 105);
console.log(`Saldo da Conta Corrente: ${contaCorrente.saldo}`);
console.log(`Tributos da Conta Corrente: ${contaCorrente.calcularTributos()}`);

const seguroDeVida = new SeguroVida(500, 'Seguro de Vida');
console.log(`Valor do Seguro de Vida: ${seguroDeVida.valorSeguro}`);
console.log(`Tributos do Seguro de Vida: ${seguroDeVida.calcularTributos()}`);