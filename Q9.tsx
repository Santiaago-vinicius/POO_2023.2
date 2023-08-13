class SituacaoFinanceira {
    valorCreditos: number;
    valorDebitos: number;

    constructor(valorCreditos: number, valorDebitos: number) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }

    saldo(): number {
        return this.valorCreditos - this.valorDebitos;
    }
}


const situacao = new SituacaoFinanceira(1500, 800); 


const saldoAtual = situacao.saldo();
console.log(`Saldo atual: ${saldoAtual}`);


// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
  