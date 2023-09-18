class Banco {
    contas: Conta[] = [];

    inserir(conta: Conta): void {
        if (!this.contas.some((c) => c.numero === conta.numero)) {
            this.contas.push(conta);
        } else {
            console.log("Erro: Já existe uma conta com o mesmo número.");
        }
    }

    sacar(numero: string, valor: number): void {
        const conta = this.buscarConta(numero);
        if (conta) {
            conta.sacar(valor);
        }
    }

    transferir(numeroCredito: string, numeroDebito: string, valor: number): void {
        const contaCredito = this.buscarConta(numeroCredito);
        const contaDebito = this.buscarConta(numeroDebito);

        if (contaCredito && contaDebito) {
            contaCredito.transferir(contaDebito, valor);
        }
    }

    quantidadeDeContas(): number {
        return this.contas.length;
    }

    totalDinheiroDepositado(): number {
        return this.contas.reduce((total, conta) => total + conta.saldo, 0);
    }

    mediaSaldoDasContas(): number {
        const quantidadeContas = this.quantidadeDeContas();
        if (quantidadeContas === 0) {
            return 0;
        }

        const totalDinheiro = this.totalDinheiroDepositado();
        return totalDinheiro / quantidadeContas;
    }

    private buscarConta(numero: string): Conta | undefined {
        return this.contas.find((conta) => conta.numero === numero);
    }
}
