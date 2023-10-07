class SituacaoFinanceira{
    valorCreditos : number = 0
    valorDebito : number = 0

    saldo(): number{
        return this.valorCreditos - this.valorDebito
    }
}

let situcaofinanceira : SituacaoFinanceira = new SituacaoFinanceira()
situcaofinanceira.valorCreditos = 450
situcaofinanceira.valorDebito = 200

console.log(situcaofinanceira.saldo())
