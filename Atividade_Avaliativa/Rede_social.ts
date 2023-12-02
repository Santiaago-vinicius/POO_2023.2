import prompt from 'prompt-sync';
const input = prompt();
// questão 1
class Perfil { // letra a (q1)
    private _id: string;
    private _nome: string;
    private _email: string;
    private _postagens: Postagem[] = []; //letra c (q1)

    constructor(id: string, nome: string, email: string) {
        this._id = id;
        this._nome = nome;
        this._email = email;
    }

    get id(): string {
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

}


class Postagem { // letra b (q1)
    private _id: string;
    private _texto: string;
    private _curtidas: number;
    private _descurtidas: number;
    private _data: Date;
    private _perfil: Perfil;

    constructor(id: string, texto: string, perfil: Perfil, data: Date) {
        this._id = id;
        this._texto = texto;
        this._curtidas = 0;
        this._descurtidas = 0;
        this._perfil = perfil;
        this._data = data;
    }

    get id(): string {
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
    // questão 2
    // letra a(q2)
    curtir(): void {
        this._curtidas++;
    }

    descurtir(): void {
        this._descurtidas++;
    }

    ehPopular(): boolean {
        return this._curtidas >= 1.5 * this._descurtidas;
    }
}

class PostagemAvancada extends Postagem { // letra d (q1)
    private _hashtags: string[];
    private _visualizacoesRestantes: number;
    private _curtidasP: number;
    private _descurtidasP: number;

    constructor(id: string, texto: string, perfil: Perfil, hashtags: string[], visualizacoesRestantes: number, data: Date) {
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
    // letra b (q2)
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

class RepositorioDePerfis {
    private _perfis: Perfil[] = [];

    incluir(perfil: Perfil): void {
        this._perfis.push(perfil);
    }

    consultar(id?: string, nome?: string, email?: string): Perfil | null {
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



class RepositorioDePostagens { // questão 4
    private _postagens: (Postagem | PostagemAvancada)[] = [];

    incluir(postagem: Postagem | PostagemAvancada): void {
        this._postagens.push(postagem);
        const perfil = postagem.perfil;
        if (perfil) {
            perfil.adicionarPostagem(postagem);
        }
    }

    consultar(id?: string, texto?: string, hashtag?: string, perfil?: Perfil): (Postagem | PostagemAvancada)[] {
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



class RedeSocial { // questão 5
    // letra a (q5)
    private _repositorioDePerfis: RepositorioDePerfis = new RepositorioDePerfis();
    private _repositorioDePostagens: RepositorioDePostagens = new RepositorioDePostagens();
    // letra b (q5) métodos
    incluirPerfil(perfil: Perfil): void {
        if (!perfil.id || !perfil.nome || !perfil.email) {
            console.log("Todos os atributos do perfil devem estar preenchidos.");
        }

        const perfilExistente = this._repositorioDePerfis.consultar(perfil.id, perfil.nome, perfil.email);
        if (perfilExistente) {
            console.log("Já existe um perfil com o mesmo ID, nome ou e-mail.");
        }

        this._repositorioDePerfis.incluir(perfil);
        console.log("Perfil incluído com sucesso.");
    }

    consultarPerfil(id?: string, nome?: string, email?: string): Perfil | null {
        return this._repositorioDePerfis.consultar(id, nome, email);
    }

    incluirPostagem(postagem: Postagem | PostagemAvancada): void {
        if (!postagem.id || !postagem.texto || !postagem.perfil) {
            console.log("Todos os atributos da postagem devem estar preenchidos.");
            return;
        }

        this._repositorioDePostagens.incluir(postagem);
    }


    consultarPostagens(id?: string, texto?: string, hashtag?: string, perfil?: Perfil): (Postagem | PostagemAvancada)[] {
        return this._repositorioDePostagens.consultar(id, texto, hashtag, perfil);
    }

    curtir(idPostagem: string): void {
        const postagens = this._repositorioDePostagens.consultar(idPostagem);

        if (postagens.length > 0) {
            postagens[0].curtir();
            console.log(`Postagem com ID ${idPostagem} foi curtida.`);
        } else {
            console.log(`Postagem com ID ${idPostagem} não encontrada.`);
        }
    }

    descurtir(idPostagem: string): void {
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

    exibirPostagensPorPerfil(idPerfil: string): void {
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
        const postagensPorHashtag = this._repositorioDePostagens.consultar(hashtag);

        for (const postagem of postagensPorHashtag) {
            if (postagem instanceof PostagemAvancada) {
                this.decrementarVisualizacoes(postagem);
            }
        }

        const postagensExibiveis = postagensPorHashtag.filter(postagem => postagem instanceof PostagemAvancada && postagem.data <= new Date()) as PostagemAvancada[];
        return postagensExibiveis;
    }
    
}

class App { // questão 6
    private _redeSocial: RedeSocial;

    constructor() {
        this._redeSocial = new RedeSocial();

    }
    // letra c(q8)
    removerPostagem(idPostagem: string): void {
        this._redeSocial.consultarPostagens().forEach((postagem, index) => {
            if (postagem.id === idPostagem) {
                this._redeSocial.consultarPostagens().splice(index, 1);
            }
        });
    }

    editarPerfil(idPerfil: string): void {
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
    
    //questão 8
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
    

    // letra b (q8)
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

    //testando os métodos da questão 8

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
            console.log("10. Exibir Postagens Populares") // questão 8 
            console.log("11. Exibir Hashtag Populares")// questão 8
            console.log("12. Remover Postagem")// letra c (q8)
            console.log("13. Editar Perfil") // letra c (q8)
            console.log("14. Consultar postagens por data") // letra c (q8)
            console.log("15. Listar todos os perfis") // letra c (q8)
            console.log("0. Sair");

            escolha = parseInt(input("Escolha uma opção: "));

            if (escolha === 1) 
            {
                const id = input("Digite o ID do perfil: ")
                const nome = input("Digite o nome do perfil: ");
                const email = input("Digite o email do perfil: ");

                const perfil = new Perfil(id, nome, email);
                this._redeSocial.incluirPerfil(perfil);
            
            } else if (escolha === 2) 
            {
                // Não encontra perfil
                const id = input("Digite o ID do perfil: ")
                const perfilConsultado = this._redeSocial.consultarPerfil(id)
                if (perfilConsultado) {
                    console.log(`ID: ${perfilConsultado.id}, Nome: ${perfilConsultado.nome}, Email: ${perfilConsultado.email}`)
                } else {
                    console.log("Perfil não encontrado.")
                }
            
            } else if (escolha === 3) 
            {
                //não encontra perfil
                const idPostagem = input("Digite o ID da postagem: ");
                const texto = input("Digite o texto da postagem: ");
                const idPerfil = input("Digite o ID do perfil da postagem: ");

                // Adicionando a escolha do tipo de postagem
                const tipoPostagem = input("Digite 'A' para Postagem Avançada ou 'C' para Postagem Comum: ");
                const hashtags = input("Digite as hashtags da postagem separadas por vírgula: ").split(",");
                const visualizacoesRestantes = parseInt(input("Digite o número de visualizações restantes da postagem: "));
                const perfilPostagem = this._redeSocial.consultarPerfil(idPerfil);

                if (perfilPostagem) {
                    const data = new Date(); // Obtém a data e hora atual
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
                const idPerfil = input("Digite o ID do perfil para exibir postagens: ")
                this._redeSocial.exibirPostagensPorPerfil(idPerfil);
            
            } else if (escolha === 6) 
            {
                const idPostagem = input("Digite o ID da postagem a ser curtida: ")
                this._redeSocial.curtir(idPostagem);
                
            } else if (escolha === 7) 
            {
                const idPostagem = input("Digite o ID da postagem para descurtir: ")
                this._redeSocial.descurtir(idPostagem);
                
            } else if (escolha === 8) 
            {
                const idPostagem = input("Digite o ID da postagem para decrementar visualizações: ");
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
            // métodos da letra c da questão 8

            }else if (escolha === 12) {
                const idPostagem = input("Digite o ID da postagem para remover: ")
                app.removerPostagem(idPostagem);
                console.log("Postagem removida com sucesso.");

            }else if (escolha === 13) {
                const idPerfil = input("Digite o ID do perfil que deseja editar: ")
                app.editarPerfil(idPerfil);
                console.log("Perfil editado com sucesso.");

            }else if (escolha === 14) {
                const dataConsulta = new Date(input("Digite a data de consulta (AAAA-MM-DD): "));
                const postagensPorData = app.consultarPostagensPorData(dataConsulta);
                app._redeSocial.exibirPostagens(postagensPorData);

            }else if (escolha === 15) {
                app.listarTodosOsPerfis();
            
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

const app = new App();
app.exibirMenu();