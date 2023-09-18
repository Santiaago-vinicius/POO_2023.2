class Postagem {
    id: number;
    texto: string;
    quantidadeCurtidas: number;

    constructor(id: number, texto: string) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = 0;
    }

    curtir(): void {
        this.quantidadeCurtidas++;
    }

    toString(): string {
        return `${this.texto} - Curtidas: ${this.quantidadeCurtidas}`;
    }
}

class Microblog {
    postagens: Postagem[] = [];

    incluirPostagem(postagem: Postagem): void {
        this.postagens.push(postagem);
    }

    excluirPostagem(id: number): void {
        const index = this.postagens.findIndex((postagem) => postagem.id === id);
        if (index !== -1) {
            this.postagens.splice(index, 1);
        }
    }

    postagemMaisCurtida(): Postagem | undefined {
        let maisCurtida: Postagem | undefined;
        let maxCurtidas = -1;

        for (const postagem of this.postagens) {
            if (postagem.quantidadeCurtidas > maxCurtidas) {
                maisCurtida = postagem;
                maxCurtidas = postagem.quantidadeCurtidas;
            }
        }

        return maisCurtida;
    }

    curtirPostagem(id: number): void {
        const postagem = this.postagens.find((p) => p.id === id);
        if (postagem) {
            postagem.curtir();
        }
    }

    toString(): string {
        return this.postagens.map((postagem) => postagem.toString()).join('\n');
    }
}

// Exemplo de uso:
const microblog = new Microblog();

const postagem1 = new Postagem(1, "Primeira postagem");
const postagem2 = new Postagem(2, "Segunda postagem");
const postagem3 = new Postagem(3, "Terceira postagem");

microblog.incluirPostagem(postagem1);
microblog.incluirPostagem(postagem2);
microblog.incluirPostagem(postagem3);

console.log(microblog.toString());

microblog.curtirPostagem(1);
microblog.curtirPostagem(1);

console.log("Postagem mais curtida:");
console.log(microblog.postagemMaisCurtida()?.toString());

microblog.excluirPostagem(2);

console.log("\nApós a exclusão da segunda postagem:");
console.log(microblog.toString());
