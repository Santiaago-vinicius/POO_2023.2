import prompt from 'prompt-sync';
const input = prompt();

//TRATAR ERROS E EXESSÕES
class PerfilInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PerfilInvalidoError";
    }
}

class PerfilExistenteError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PerfilExistenteError";
    }
}

class PostagemInvalidaError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PostagemInvalidaError";
    }
}

class PostagemNaoEncontradaError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PostagemNaoEncontradaError";
    }
}


//Interfaces
interface IRepositorioPerfis {
    incluir(perfil: Perfil): void;
    consultar(id?: number, nome?: string, email?: string): Perfil | null;
    getPerfis(): Perfil[];
    adicionarPostagemAoPerfil(perfil: Perfil, postagem: Postagem): void;
    
}

interface IRepositorioPostagens {
    incluir(postagem: Postagem | PostagemAvancada): void;
    consultar(id?: number, texto?: string, hashtag?: string, perfil?: Perfil): (Postagem | PostagemAvancada)[];
    verificarSubstring(substring: string, texto: string): boolean;
}




// perfil
export class Perfil { 
    private _id: number;
    private _nome: string;
    private _email: string;
    private _postagens: Postagem[] = []; 

    constructor(id: number, nome: string, email: string) {
        this._id = id;
        this._nome = nome;
        this._email = email;
    }

    get id(): number {
        return this._id;
    }

    get nome(): string {
        return this._nome;
    }

    get email(): string {
        return this._email;
    }

    get postagens(): Postagem[] {
        return this._postagens;
    }

    adicionarPostagem(postagem: Postagem): void {
        this._postagens.push(postagem);
    }

    editarNome(novoNome: string): void {
        this._nome = novoNome;
    }

    editarEmail(novoEmail: string): void {
        this._email = novoEmail;
    }

    // toJSON(): Record<string, any> {
    //     return {
    //         id: this._id,
    //         nome: this._nome,
    //         email: this._email,
    //         postagens: this._postagens.map(postagem => postagem.toJSON()),
    //     };
    // }
}


export class Postagem { 
    private _id: number;
    private _texto: string;
    private _curtidas: number;
    private _descurtidas: number;
    private _data: Date;
    private _perfil: Perfil;

    constructor(id: number, texto: string, perfil: Perfil, data: Date) {
        this._id = id;
        this._texto = texto;
        this._curtidas = 0;
        this._descurtidas = 0;
        this._perfil = perfil;
        this._data = data;
    }

    get id(): number {
        return this._id;
    }

    get texto(): string {
        return this._texto;
    }

    get curtidas(): number {
        return this._curtidas;
    }

    get descurtidas(): number {
        return this._descurtidas;
    }

    get data(): Date {
        return this._data;
    }

    get perfil(): Perfil {
        return this._perfil;
    }

    curtir(): void {
        this._curtidas++;
    }

    descurtir(): void {
        this._descurtidas++;
    }

    ehPopular(): boolean {
        return this._curtidas >= 1.5 * this._descurtidas;
    }

    atualizarTexto(novoTexto: string): void {
        this._texto = novoTexto;
    }

    // toJSON<T>(): T {
    //     return {
    //         _id: this._id,
    //         _texto: this._texto,
    //         _curtidas: this._curtidas,
    //         _descurtidas: this._descurtidas,
    //         // adicione outras propriedades conforme necessário
    //         data: this._data.toJSON(),
    //         perfil: this._perfil.toJSON(),
    //     } as T;
    // }


}

export class PostagemAvancada extends Postagem { 
    private _hashtags: string[];
    private _visualizacoesRestantes: number;
    private _curtidasP: number;
    private _descurtidasP: number;

    constructor(id: number, texto: string, perfil: Perfil, hashtags: string[], visualizacoesRestantes: number, data: Date) {
        super(id, texto, perfil, data);
        this._hashtags = hashtags;
        this._visualizacoesRestantes = visualizacoesRestantes;
        this._curtidasP = 0;
        this._descurtidasP = 0;
    }

    get hashtags(): string[] {
        return this._hashtags;
    }

    get visualizacoesRestantes(): number {
        return this._visualizacoesRestantes;
    }

    get curtidasP(): number {
        return this._curtidasP;
    }

    get descurtidasP(): number {
        return this._descurtidasP;
    }

    curtir(): void {
        this._curtidasP++;
    }

    descurtir(): void {
        this._descurtidasP++;
    }

    ehPopular(): boolean {
        return this._curtidasP >= 1.5 * this._descurtidasP;
    }

    adicionarHashtag(hashtag: string): void {
        this._hashtags.push(hashtag);
    }

    existeHashtag(hashtag: string): boolean {
        for (const hashtagAtual of this._hashtags) {
            if (hashtagAtual === hashtag) {
                return true;
            }
        }
        return false;
    }

    decrementarVisualizacoes(): void {
        if (this._visualizacoesRestantes > 0) {
            this._visualizacoesRestantes--;

            if (this._visualizacoesRestantes === 0) {
                console.log("A postagem não pode mais ser apresentada.");
            }
        }
    }


}

class RepositorioDePerfis implements IRepositorioPerfis {
    private _perfis: Perfil[] = [];

    incluir(perfil: Perfil): void {
        this._perfis.push(perfil);
    }

    consultar(id?: number, nome?: string, email?: string): Perfil | null {
        if (id !== undefined || nome !== undefined || email !== undefined) {
            for (const perfil of this._perfis) {
                const idMatch = id === undefined || perfil.id === id;
                const nomeMatch = nome === undefined || perfil.nome === nome;
                const emailMatch = email === undefined || perfil.email === email;

                if (idMatch && nomeMatch && emailMatch) {
                    return perfil;
                }
            }
        }
        return null;
    }

    getPerfis(): Perfil[] {
        return this._perfis;
    }

    adicionarPostagemAoPerfil(perfil: Perfil, postagem: Postagem): void {
        perfil.adicionarPostagem(postagem);
    }
}



class RepositorioDePostagens implements IRepositorioPostagens { 
    private _postagens: (Postagem | PostagemAvancada)[] = [];

    incluir(postagem: Postagem | PostagemAvancada): void {
        this._postagens.push(postagem);
        const perfil = postagem.perfil;
        if (perfil) {
            perfil.adicionarPostagem(postagem);
        }
    }

    consultar(id?: number, texto?: string, hashtag?: string, perfil?: Perfil): (Postagem | PostagemAvancada)[] {
        if (id === undefined && texto === undefined && hashtag === undefined && perfil === undefined) {
            return this._postagens.filter(postagem => postagem instanceof PostagemAvancada ? postagem.visualizacoesRestantes > 0 : true);
        }

        return this._postagens.filter(postagem => {
            let atendeCriterios = true;

            if (id !== undefined && postagem.id !== id) {
                atendeCriterios = false;
            }
            if (texto !== undefined && !this.verificarSubstring(texto, postagem.texto)) {
                atendeCriterios = false;
            }
            if (hashtag !== undefined && postagem instanceof PostagemAvancada && !postagem.existeHashtag(hashtag)) {
                atendeCriterios = false;
            }
            if (perfil !== undefined && postagem.perfil.id !== perfil.id) {
                atendeCriterios = false;
            }

            return atendeCriterios && (postagem instanceof PostagemAvancada ? postagem.visualizacoesRestantes > 0 : true);
        });
    }   
    

    //fazendo o papel do metodo includes
    verificarSubstring(substring: string, texto: string): boolean {
        for (let i = 0; i < texto.length - substring.length + 1; i++) {
            if (texto.substring(i, i + substring.length) === substring) {
                return true;
            }
        }
        return false;
    }
    

}

class RedeSocial {

    private _repositorioDePerfis: IRepositorioPerfis;
    private _repositorioDePostagens: IRepositorioPostagens;


    constructor(repositorioPerfis: IRepositorioPerfis, repositorioPostagens: IRepositorioPostagens) {
        this._repositorioDePerfis = repositorioPerfis;
        this._repositorioDePostagens = repositorioPostagens;

    }
    
    incluirPerfil(perfil: Perfil): void {
        try {
            if (!perfil.id || !perfil.nome || !perfil.email) {
                throw new PerfilInvalidoError("Todos os atributos do perfil devem estar preenchidos.");
            }

            const perfilExistente = this.consultarPerfil(perfil.id, perfil.nome, perfil.email);
            if (perfilExistente) {
                throw new PerfilExistenteError("Já existe um perfil com o mesmo ID, nome ou e-mail.");
            }

            this._repositorioDePerfis.incluir(perfil);
            console.log("Perfil incluído com sucesso.");
        } catch (error) {
            if (error instanceof PerfilInvalidoError || error instanceof PerfilExistenteError) {
                console.error(`${error.name}: ${error.message}`);
            } else {
                throw error; // Lança qualquer outro erro que não seja um dos personalizados
            }
        }
    }

    consultarPerfil(id?: number, nome?: string, email?: string): Perfil | null {
        return this._repositorioDePerfis.consultar(id, nome, email);
    }

    incluirPostagem(postagem: Postagem | PostagemAvancada): void {
        try {
            this._repositorioDePostagens.incluir(postagem);
            console.log("Postagem incluída com sucesso.");
        } catch (error) {
            if (error instanceof PostagemInvalidaError) {
                console.error(`${error.name}: ${error.message}`);
            } else {
                throw error; // Lança qualquer outro erro que não seja um dos personalizados
            }
        }
    }


    consultarPostagens(id?: number, texto?: string, hashtag?: string, perfil?: Perfil): (Postagem | PostagemAvancada)[] {
        return this._repositorioDePostagens.consultar(id, texto, hashtag, perfil);
    }

    curtir(idPostagem: number): void {
        const postagens = this._repositorioDePostagens.consultar(idPostagem);

        if (postagens.length > 0) {
            postagens[0].curtir();
            console.log(`Postagem com ID ${idPostagem} foi curtida.`);
        } else {
            console.log(`Postagem com ID ${idPostagem} não encontrada.`);
        }
    }

    descurtir(idPostagem: number): void {
        const postagens = this._repositorioDePostagens.consultar(idPostagem);

        if (postagens.length > 0) {
            postagens[0].descurtir();
            console.log(`Postagem com ID ${idPostagem} foi descurtida.`);
        } else {
            console.log(`Postagem com ID ${idPostagem} não encontrada.`);
        }
    }

    listarTodosOsPerfis(): void {
        const perfis = this._repositorioDePerfis.getPerfis(); 
        if (perfis.length === 0) {
            console.log("Nenhum perfil cadastrado.");
        } else {
            console.log("Perfis cadastrados:");
            for (const perfil of perfis) {
                console.log(`ID: ${perfil.id}, Nome: ${perfil.nome}, Email: ${perfil.email}`);
            }
        }
    }

    decrementarVisualizacoes(postagem: PostagemAvancada): void {
        if (postagem.visualizacoesRestantes <= 0) {
            console.log("A postagem já atingiu o número mínimo de visualizações.");
            return;
        }

        postagem.decrementarVisualizacoes();
        console.log("Visualização decrementada com sucesso.");
    }

    exibirPostagensPorPerfil(idPerfil: number): void {
        const perfilConsultado = this.consultarPerfil(idPerfil);

        if (perfilConsultado) {
            const postagensDoPerfil = this.consultarPostagens(undefined, undefined, undefined, perfilConsultado);

            const postagensParaExibir: Postagem[] = [];

            for (const postagem of postagensDoPerfil) {
                if (postagem instanceof PostagemAvancada) {
                    postagensParaExibir.push(postagem);
                }
            }

            this.exibirPostagens(postagensParaExibir);
        } else {
            console.log("Perfil não encontrado.");
        }
    }

    exibirPostagens(postagens: Postagem[]): void {
        if (postagens.length === 0) {
            console.log("Nenhuma postagem encontrada.");
        } else {
            console.log("Postagens encontradas:");
            for (const postagem of postagens) {
                console.log(`ID: ${postagem.id}`);
                console.log(`Texto: ${postagem.texto}`);
                console.log(`Curtidas: ${postagem.curtidas}`);
                console.log(`Descurtidas: ${postagem.descurtidas}`);
                console.log(`Data: ${postagem.data}`);

                // Verifica se a postagem é do tipo PostagemAvancada
                if (postagem instanceof PostagemAvancada) {
                    console.log(`Hashtags: ${postagem.hashtags.join(", ")}`);
                    console.log(`Visualizações Restantes: ${postagem.visualizacoesRestantes}`);
                }
                console.log("-----------------------");
            }
        }
    }
    

    exibirPostagensPorHashtag(hashtag: string): PostagemAvancada[] {
        const postagensPorHashtag = this._repositorioDePostagens.consultar(undefined,hashtag);

        for (const postagem of postagensPorHashtag) {
            if (postagem instanceof PostagemAvancada) {
                this.decrementarVisualizacoes(postagem);
            }
        }

        const postagensExibiveis = postagensPorHashtag.filter(postagem => postagem instanceof PostagemAvancada && postagem.data <= new Date()) as PostagemAvancada[];
        return postagensExibiveis;
    }
    
}




//exibição

class App { 
    private _redeSocial: RedeSocial;

    constructor(repositorioPerfis: IRepositorioPerfis, repositorioPostagens: IRepositorioPostagens) {
        this._redeSocial = new RedeSocial(repositorioPerfis, repositorioPostagens);
    }


    incluirPerfil(perfil: Perfil): void {
        this._redeSocial.incluirPerfil(perfil);
    }

    removerPostagem(idPostagem: number): void {
        try {
            const postagens = this._redeSocial.consultarPostagens(idPostagem);
    
            if (postagens.length === 0) {
                throw new PostagemNaoEncontradaError(`Postagem com ID ${idPostagem} não encontrada.`);
            }
    
            const postagem = postagens[0];
            const index = this._redeSocial.consultarPostagens().indexOf(postagem);
    
            if (index !== -1) {
                this._redeSocial.consultarPostagens().splice(index, 1);
                console.log(`Postagem com ID ${idPostagem} removida com sucesso.`);
            }
        } catch (error) {
            if (error instanceof PostagemNaoEncontradaError) {
                console.error(`${error.name}: ${error.message}`);
            } else {
                throw error;
            }
        }
    }
    

    editarPerfil(idPerfil: number): void {
        const perfil = this._redeSocial.consultarPerfil(idPerfil);
        if (perfil) {
            console.log("Perfil encontrado. Você pode editar o nome e/ou o e-mail.");

            // Pergunte ao usuário qual campo deseja editar
            const opcao = input("Digite 'N' para editar o nome ou 'E' para editar o e-mail (ou qualquer outra tecla para sair): ");
            
            if (opcao === 'N') {
                // Edite o nome
                const novoNome = input("Digite o novo nome: ");
                perfil.editarNome(novoNome);
                console.log("Nome editado com sucesso.");
            } else if (opcao === 'E') {
                // Edite o e-mail
                const novoEmail = input("Digite o novo e-mail: ");
                perfil.editarEmail(novoEmail);
                console.log("E-mail editado com sucesso.");
            } else {
                console.log("Edição de perfil cancelada.");
            }
            } else {
                console.log("Perfil não encontrado.");
            }
    }

    consultarPostagensPorData(dataConsulta: Date): (Postagem | PostagemAvancada)[] {
        const postagens = this._redeSocial.consultarPostagens();
    
        const postagensFiltradas = postagens.filter(postagem => {
            const postagemDate = postagem.data;
    
            return (
                postagemDate.getUTCFullYear() === dataConsulta.getUTCFullYear() &&
                postagemDate.getUTCMonth() === dataConsulta.getUTCMonth() &&
                postagemDate.getUTCDate() === dataConsulta.getUTCDate()
            );
        });
    
        this._redeSocial.exibirPostagens(postagensFiltradas);
    
        return postagensFiltradas;
    }
    

    listarTodosOsPerfis(): void {
        this._redeSocial.listarTodosOsPerfis();
    }
    
    exibirPostagensPopulares(): { postagens: Postagem[], postagensAvancadas: PostagemAvancada[] } {
        const postagens = this._redeSocial.consultarPostagens();
        const postagensPopulares: { postagens: Postagem[], postagensAvancadas: PostagemAvancada[] } = { postagens: [], postagensAvancadas: [] };
    
        for (const postagem of postagens) {
            if (postagem instanceof Postagem && postagem.ehPopular()) {
                postagensPopulares.postagens.push(postagem);
            } else if (postagem instanceof PostagemAvancada && postagem.ehPopular()) {
                postagensPopulares.postagensAvancadas.push(postagem);
            }
        }
    
        // Mensagem de exibição
        console.log("Postagens Populares:");
        console.log("-----------------------------------------------------------------");
        console.log("Postagens:");
        for (const postagem of postagensPopulares.postagens) {
            console.log(`ID: ${postagem.id}, Texto: ${postagem.texto}, Curtidas: ${postagem.curtidas}, Descurtidas: ${postagem.descurtidas}`);
        }
        console.log("-----------------------------------------------------------------");
        console.log("Postagens Avançadas:");
        for (const postagemAvancada of postagensPopulares.postagensAvancadas) {
            console.log(`ID: ${postagemAvancada.id}, Texto: ${postagemAvancada.texto}, Curtidas: ${postagemAvancada.curtidas}, Descurtidas: ${postagemAvancada.descurtidas}, Visualizações Restantes: ${postagemAvancada.visualizacoesRestantes}`);
        }
        
        return postagensPopulares;
    }
    

    exibirHashtagsPopulares(): string[] {
        const postagens = this._redeSocial.consultarPostagens();
        const hashtagsContagem = new Map<string, number>();

        for (const postagem of postagens) {
            if (postagem instanceof PostagemAvancada) {
                for (const hashtag of postagem.hashtags) {
                    if (hashtagsContagem.has(hashtag)) {
                        hashtagsContagem.set(hashtag, (hashtagsContagem.get(hashtag) || 0) + 1);
                    } else {
                        hashtagsContagem.set(hashtag, 1);
                    }
                }
            }
        }

        const hashtagsPopulares: string[] = [];
        let maxRepeticoes = 0;

        hashtagsContagem.forEach((repeticoes, hashtag) => {
            if (repeticoes > maxRepeticoes) {
                hashtagsPopulares.length = 0; // Limpar o array se encontrarmos uma hashtag mais popular
                hashtagsPopulares.push(hashtag);
                maxRepeticoes = repeticoes;
            } else if (repeticoes === maxRepeticoes) {
                hashtagsPopulares.push(hashtag);
            }
        });

        return hashtagsPopulares;
    }

    exibirMenu(): void {
        let escolha: number;

        while (true) {
            console.log("Menu:");
            console.log("1. Incluir Perfil");
            console.log("2. Consultar Perfil");
            console.log("3. Incluir Postagem");
            console.log("4. Consultar Postagens");
            console.log("5. Consultar Postagens por perfil");
            console.log("6. Curtir Postagem");
            console.log("7. Descurtir Postagem");
            console.log("8. Decrementar Visualizações");
            console.log("9. Exibir Postagens Por Hashtag")
            console.log("10. Exibir Postagens Populares") 
            console.log("11. Exibir Hashtag Populares")
            console.log("12. Remover Postagem")
            console.log("13. Editar Perfil") 
            console.log("14. Consultar postagens por data") 
            console.log("15. Listar todos os perfis") 
            console.log("0. Sair");

            escolha = parseInt(input("Escolha uma opção: "));

            if (escolha === 1) 
            {
                const id = Number(input("Digite o ID do perfil: "))
                const nome = input("Digite o nome do perfil: ");
                const email = input("Digite o email do perfil: ");

                const perfil = new Perfil(id, nome, email);
                this.incluirPerfil(perfil);
            
            } else if (escolha === 2) 
            {
                const id = Number(input("Digite o ID do perfil: "))
                const perfilConsultado = this._redeSocial.consultarPerfil(id)
                if (perfilConsultado) {
                    console.log(`ID: ${perfilConsultado.id}, Nome: ${perfilConsultado.nome}, Email: ${perfilConsultado.email}`)
                } else {
                    console.log("Perfil não encontrado.")
                }
            
            } else if (escolha === 3) 
            {
                const idPostagem = Number(input("Digite o ID da postagem: "));
                const texto = input("Digite o texto da postagem: ");
                const idPerfil = Number(input("Digite o ID do perfil da postagem: "));

                const tipoPostagem = input("Digite 'A' para Postagem Avançada ou 'C' para Postagem Comum: ");
                const hashtags = input("Digite as hashtags da postagem separadas por vírgula: ").split(",");
                const visualizacoesRestantes = parseInt(input("Digite o número de visualizações restantes da postagem: "));
                const perfilPostagem = this._redeSocial.consultarPerfil(idPerfil);

                if (perfilPostagem) {
                    const data = new Date(); 
                    let postagem: Postagem | PostagemAvancada;

                    if (tipoPostagem.toUpperCase() === 'A') {
                        postagem = new PostagemAvancada(idPostagem, texto, perfilPostagem, hashtags, visualizacoesRestantes, data);
                    
                    } else if (tipoPostagem.toUpperCase() === 'C') {
                        postagem = new Postagem(idPostagem, texto, perfilPostagem, data);
                    
                    } else {
                        console.log("Tipo de postagem inválido. A postagem não foi incluída.");
                        continue; // Volta ao início do loop para evitar a execução do código abaixo
                    }
                    this._redeSocial.incluirPostagem(postagem);
                
                } else {
                    console.log("Perfil não encontrado. Não foi possível incluir a postagem.");
                }
            
            } else if (escolha === 4) 
            {
                const postagens = this._redeSocial.consultarPostagens();
                const postagensExibiveis = postagens.filter(postagem => postagem instanceof PostagemAvancada ? postagem.visualizacoesRestantes > 0 : true);
                this._redeSocial.exibirPostagens(postagensExibiveis);

            
            } else if (escolha === 5) 
            {
                const idPerfil = Number(input("Digite o ID do perfil para exibir postagens: "))
                this._redeSocial.exibirPostagensPorPerfil(idPerfil);
            
            } else if (escolha === 6) 
            {
                const idPostagem = Number(input("Digite o ID da postagem a ser curtida: "))
                this._redeSocial.curtir(idPostagem);
                
            } else if (escolha === 7) 
            {
                const idPostagem = Number(input("Digite o ID da postagem para descurtir: "))
                this._redeSocial.descurtir(idPostagem);
                
            } else if (escolha === 8) 
            {
                const idPostagem = Number(input("Digite o ID da postagem para decrementar visualizações: "));
                const postagens = this._redeSocial.consultarPostagens(idPostagem);

                if (postagens.length > 0 && postagens[0] instanceof PostagemAvancada) {
                    const postagemAvancada = postagens[0] as PostagemAvancada;
                    
                    if (postagemAvancada.visualizacoesRestantes > 0) {
                        this._redeSocial.decrementarVisualizacoes(postagemAvancada);
                    } else {
                        console.log("A postagem não pode mais ser apresentada.");
                    }
                } else {
                    console.log("Postagem não encontrada ou não é uma postagem avançada.");
                }
            } else if (escolha === 9) 
            {
                const hashtagExibir = input("Digite a hashtag para exibir postagens: ");
                const postagensPorHashtag = this._redeSocial.exibirPostagensPorHashtag(hashtagExibir);
                postagensPorHashtag.forEach(p => {
                    console.log(`ID: ${p.id}, Texto: ${p.texto}, Curtidas: ${p.curtidas}, 
                    Descurtidas: ${p.descurtidas}, Hashtags: ${p.hashtags.join(", ")}, 
                    Visualizações Restantes: ${p.visualizacoesRestantes}`);
                });
            
            }else if (escolha === 10) {
                this.exibirPostagensPopulares(); 
            
            }else if (escolha === 11) {
                const hashtagsPopulares = this.exibirHashtagsPopulares();
                console.log("Hashtags mais populares:", hashtagsPopulares);

            }else if (escolha === 12) {
                const idPostagem = Number(input("Digite o ID da postagem para remover: "))
                this.removerPostagem(idPostagem);
                console.log("Postagem removida com sucesso.");

            }else if (escolha === 13) {
                const idPerfil = Number(input("Digite o ID do perfil que deseja editar: "))
                this.editarPerfil(idPerfil);
                console.log("Perfil editado com sucesso.");

            }else if (escolha === 14) {
                const dataConsulta = new Date(input("Digite a data de consulta (AAAA-MM-DD): "));
                const postagensPorData = this.consultarPostagensPorData(dataConsulta);
                this._redeSocial.exibirPostagens(postagensPorData);

            }else if (escolha === 15) {
                this.listarTodosOsPerfis();
            
            }else if (escolha === 0) 
            {
                console.log("Saindo do menu...");
                break;
            
            }else 
            {
                console.log("Opção inválida. Tente novamente.");
            }
        }
    }
}

//Exemplo de inicialização usando implementações baseadas em arrays
const repositorioPerfisArray: IRepositorioPerfis = new RepositorioDePerfis();
const repositorioPostagensArray: IRepositorioPostagens = new RepositorioDePostagens();
const appArray = new App(repositorioPerfisArray, repositorioPostagensArray);
appArray.exibirMenu();