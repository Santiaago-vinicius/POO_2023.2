interface Tributaveis {
    calcularImposto(): number;
}

class AuditoriaInterna {
    private tributaveis: Tributaveis[];

    constructor() {
        this.tributaveis = [];
    }

    adicionar(tributaveis: Tributaveis): void {
        this.tributaveis.push(tributaveis);
    }

    calcularTributos(): number {
        let totalTributos = 0;
        for (const tributaveis of this.tributaveis) {
            totalTributos += tributaveis.calcularImposto();
        }
        return totalTributos;
    }
}

class Conta_Corrente implements Tributaveis {
    constructor(private saldo: number) {}

    calcularImposto(): number {
        return this.saldo * 0.1; 
    }
}

class Seguro_De_Vida implements Tributaveis {
    constructor(private valorSeguro: number) {}

    calcularImposto(): number {
        return this.valorSeguro * 0.05;
    }
}

const auditoria = new AuditoriaInterna();

const conta1 = new Conta_Corrente(5000);
const conta2 = new Conta_Corrente(8000);
const seguro1 = new Seguro_De_Vida(3000);
const seguro2 = new Seguro_De_Vida(5000);

auditoria.adicionar(conta1);
auditoria.adicionar(conta2);
auditoria.adicionar(seguro1);
auditoria.adicionar(seguro2);

const totalTributos = auditoria.calcularTributos();
console.log(`Total de tributos a serem pagos: ${totalTributos}`);
