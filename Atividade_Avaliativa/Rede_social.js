"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var input = (0, prompt_sync_1.default)();
// questão 1
var Perfil = /** @class */ (function () {
    function Perfil(id, nome, email) {
        this._postagens = []; //letra c (q1)
        this._id = id;
        this._nome = nome;
        this._email = email;
    }
    Object.defineProperty(Perfil.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "postagens", {
        get: function () {
            return this._postagens;
        },
        enumerable: false,
        configurable: true
    });
    Perfil.prototype.adicionarPostagem = function (postagem) {
        this._postagens.push(postagem);
    };
    Perfil.prototype.editarNome = function (novoNome) {
        this._nome = novoNome;
    };
    Perfil.prototype.editarEmail = function (novoEmail) {
        this._email = novoEmail;
    };
    return Perfil;
}());
var Postagem = /** @class */ (function () {
    function Postagem(id, texto, perfil, data) {
        this._id = id;
        this._texto = texto;
        this._curtidas = 0;
        this._descurtidas = 0;
        this._perfil = perfil;
        this._data = data;
    }
    Object.defineProperty(Postagem.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "texto", {
        get: function () {
            return this._texto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "curtidas", {
        get: function () {
            return this._curtidas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "descurtidas", {
        get: function () {
            return this._descurtidas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "perfil", {
        get: function () {
            return this._perfil;
        },
        enumerable: false,
        configurable: true
    });
    // questão 2
    // letra a(q2)
    Postagem.prototype.curtir = function () {
        this._curtidas++;
    };
    Postagem.prototype.descurtir = function () {
        this._descurtidas++;
    };
    Postagem.prototype.ehPopular = function () {
        return this._curtidas >= 1.5 * this._descurtidas;
    };
    return Postagem;
}());
var PostagemAvancada = /** @class */ (function (_super) {
    __extends(PostagemAvancada, _super);
    function PostagemAvancada(id, texto, perfil, hashtags, visualizacoesRestantes, data) {
        var _this = _super.call(this, id, texto, perfil, data) || this;
        _this._hashtags = hashtags;
        _this._visualizacoesRestantes = visualizacoesRestantes;
        _this._curtidasP = 0;
        _this._descurtidasP = 0;
        return _this;
    }
    Object.defineProperty(PostagemAvancada.prototype, "hashtags", {
        get: function () {
            return this._hashtags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PostagemAvancada.prototype, "visualizacoesRestantes", {
        get: function () {
            return this._visualizacoesRestantes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PostagemAvancada.prototype, "curtidasP", {
        get: function () {
            return this._curtidasP;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PostagemAvancada.prototype, "descurtidasP", {
        get: function () {
            return this._descurtidasP;
        },
        enumerable: false,
        configurable: true
    });
    PostagemAvancada.prototype.curtir = function () {
        this._curtidasP++;
    };
    PostagemAvancada.prototype.descurtir = function () {
        this._descurtidasP++;
    };
    PostagemAvancada.prototype.ehPopular = function () {
        return this._curtidasP >= 1.5 * this._descurtidasP;
    };
    // letra b (q2)
    PostagemAvancada.prototype.adicionarHashtag = function (hashtag) {
        this._hashtags.push(hashtag);
    };
    PostagemAvancada.prototype.existeHashtag = function (hashtag) {
        for (var _i = 0, _a = this._hashtags; _i < _a.length; _i++) {
            var hashtagAtual = _a[_i];
            if (hashtagAtual === hashtag) {
                return true;
            }
        }
        return false;
    };
    PostagemAvancada.prototype.decrementarVisualizacoes = function () {
        if (this._visualizacoesRestantes > 0) {
            this._visualizacoesRestantes--;
            if (this._visualizacoesRestantes === 0) {
                console.log("A postagem não pode mais ser apresentada.");
            }
        }
    };
    return PostagemAvancada;
}(Postagem));
var RepositorioDePerfis = /** @class */ (function () {
    function RepositorioDePerfis() {
        this._perfis = [];
    }
    RepositorioDePerfis.prototype.incluir = function (perfil) {
        this._perfis.push(perfil);
    };
    RepositorioDePerfis.prototype.consultar = function (id, nome, email) {
        if (id !== undefined || nome !== undefined || email !== undefined) {
            for (var _i = 0, _a = this._perfis; _i < _a.length; _i++) {
                var perfil = _a[_i];
                var idMatch = id === undefined || perfil.id === id;
                var nomeMatch = nome === undefined || perfil.nome === nome;
                var emailMatch = email === undefined || perfil.email === email;
                if (idMatch && nomeMatch && emailMatch) {
                    return perfil;
                }
            }
        }
        return null;
    };
    RepositorioDePerfis.prototype.getPerfis = function () {
        return this._perfis;
    };
    RepositorioDePerfis.prototype.adicionarPostagemAoPerfil = function (perfil, postagem) {
        perfil.adicionarPostagem(postagem);
    };
    return RepositorioDePerfis;
}());
var RepositorioDePostagens = /** @class */ (function () {
    function RepositorioDePostagens() {
        this._postagens = [];
    }
    RepositorioDePostagens.prototype.incluir = function (postagem) {
        this._postagens.push(postagem);
        var perfil = postagem.perfil;
        if (perfil) {
            perfil.adicionarPostagem(postagem);
        }
    };
    RepositorioDePostagens.prototype.consultar = function (id, texto, hashtag, perfil) {
        var _this = this;
        if (id === undefined && texto === undefined && hashtag === undefined && perfil === undefined) {
            return this._postagens.filter(function (postagem) { return postagem instanceof PostagemAvancada ? postagem.visualizacoesRestantes > 0 : true; });
        }
        return this._postagens.filter(function (postagem) {
            var atendeCriterios = true;
            if (id !== undefined && postagem.id !== id) {
                atendeCriterios = false;
            }
            if (texto !== undefined && !_this.verificarSubstring(texto, postagem.texto)) {
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
    };
    //fazendo o papel do metodo includes
    RepositorioDePostagens.prototype.verificarSubstring = function (substring, texto) {
        for (var i = 0; i < texto.length - substring.length + 1; i++) {
            if (texto.substring(i, i + substring.length) === substring) {
                return true;
            }
        }
        return false;
    };
    return RepositorioDePostagens;
}());
var RedeSocial = /** @class */ (function () {
    function RedeSocial() {
        // letra a (q5)
        this._repositorioDePerfis = new RepositorioDePerfis();
        this._repositorioDePostagens = new RepositorioDePostagens();
    }
    // letra b (q5) métodos
    RedeSocial.prototype.incluirPerfil = function (perfil) {
        if (!perfil.id || !perfil.nome || !perfil.email) {
            console.log("Todos os atributos do perfil devem estar preenchidos.");
        }
        var perfilExistente = this._repositorioDePerfis.consultar(perfil.id, perfil.nome, perfil.email);
        if (perfilExistente) {
            console.log("Já existe um perfil com o mesmo ID, nome ou e-mail.");
        }
        this._repositorioDePerfis.incluir(perfil);
        console.log("Perfil incluído com sucesso.");
    };
    RedeSocial.prototype.consultarPerfil = function (id, nome, email) {
        return this._repositorioDePerfis.consultar(id, nome, email);
    };
    RedeSocial.prototype.incluirPostagem = function (postagem) {
        if (!postagem.id || !postagem.texto || !postagem.perfil) {
            console.log("Todos os atributos da postagem devem estar preenchidos.");
            return;
        }
        this._repositorioDePostagens.incluir(postagem);
    };
    RedeSocial.prototype.consultarPostagens = function (id, texto, hashtag, perfil) {
        return this._repositorioDePostagens.consultar(id, texto, hashtag, perfil);
    };
    RedeSocial.prototype.curtir = function (idPostagem) {
        var postagens = this._repositorioDePostagens.consultar(idPostagem);
        if (postagens.length > 0) {
            postagens[0].curtir();
            console.log("Postagem com ID ".concat(idPostagem, " foi curtida."));
        }
        else {
            console.log("Postagem com ID ".concat(idPostagem, " n\u00E3o encontrada."));
        }
    };
    RedeSocial.prototype.descurtir = function (idPostagem) {
        var postagens = this._repositorioDePostagens.consultar(idPostagem);
        if (postagens.length > 0) {
            postagens[0].descurtir();
            console.log("Postagem com ID ".concat(idPostagem, " foi descurtida."));
        }
        else {
            console.log("Postagem com ID ".concat(idPostagem, " n\u00E3o encontrada."));
        }
    };
    RedeSocial.prototype.listarTodosOsPerfis = function () {
        var perfis = this._repositorioDePerfis.getPerfis();
        if (perfis.length === 0) {
            console.log("Nenhum perfil cadastrado.");
        }
        else {
            console.log("Perfis cadastrados:");
            for (var _i = 0, perfis_1 = perfis; _i < perfis_1.length; _i++) {
                var perfil = perfis_1[_i];
                console.log("ID: ".concat(perfil.id, ", Nome: ").concat(perfil.nome, ", Email: ").concat(perfil.email));
            }
        }
    };
    RedeSocial.prototype.decrementarVisualizacoes = function (postagem) {
        if (postagem.visualizacoesRestantes <= 0) {
            console.log("A postagem já atingiu o número mínimo de visualizações.");
            return;
        }
        postagem.decrementarVisualizacoes();
        console.log("Visualização decrementada com sucesso.");
    };
    RedeSocial.prototype.exibirPostagensPorPerfil = function (idPerfil) {
        var perfilConsultado = this.consultarPerfil(idPerfil);
        if (perfilConsultado) {
            var postagensDoPerfil = this.consultarPostagens(undefined, undefined, undefined, perfilConsultado);
            var postagensParaExibir = [];
            for (var _i = 0, postagensDoPerfil_1 = postagensDoPerfil; _i < postagensDoPerfil_1.length; _i++) {
                var postagem = postagensDoPerfil_1[_i];
                if (postagem instanceof PostagemAvancada) {
                    postagensParaExibir.push(postagem);
                }
            }
            this.exibirPostagens(postagensParaExibir);
        }
        else {
            console.log("Perfil não encontrado.");
        }
    };
    RedeSocial.prototype.exibirPostagens = function (postagens) {
        if (postagens.length === 0) {
            console.log("Nenhuma postagem encontrada.");
        }
        else {
            console.log("Postagens encontradas:");
            for (var _i = 0, postagens_1 = postagens; _i < postagens_1.length; _i++) {
                var postagem = postagens_1[_i];
                console.log("ID: ".concat(postagem.id));
                console.log("Texto: ".concat(postagem.texto));
                console.log("Curtidas: ".concat(postagem.curtidas));
                console.log("Descurtidas: ".concat(postagem.descurtidas));
                console.log("Data: ".concat(postagem.data));
                // Verifica se a postagem é do tipo PostagemAvancada
                if (postagem instanceof PostagemAvancada) {
                    console.log("Hashtags: ".concat(postagem.hashtags.join(", ")));
                    console.log("Visualiza\u00E7\u00F5es Restantes: ".concat(postagem.visualizacoesRestantes));
                }
                console.log("-----------------------");
            }
        }
    };
    RedeSocial.prototype.exibirPostagensPorHashtag = function (hashtag) {
        var postagensPorHashtag = this._repositorioDePostagens.consultar(hashtag);
        for (var _i = 0, postagensPorHashtag_1 = postagensPorHashtag; _i < postagensPorHashtag_1.length; _i++) {
            var postagem = postagensPorHashtag_1[_i];
            if (postagem instanceof PostagemAvancada) {
                this.decrementarVisualizacoes(postagem);
            }
        }
        var postagensExibiveis = postagensPorHashtag.filter(function (postagem) { return postagem instanceof PostagemAvancada && postagem.data <= new Date(); });
        return postagensExibiveis;
    };
    return RedeSocial;
}());
var App = /** @class */ (function () {
    function App() {
        this._redeSocial = new RedeSocial();
    }
    // letra c(q8)
    App.prototype.removerPostagem = function (idPostagem) {
        var _this = this;
        this._redeSocial.consultarPostagens().forEach(function (postagem, index) {
            if (postagem.id === idPostagem) {
                _this._redeSocial.consultarPostagens().splice(index, 1);
            }
        });
    };
    App.prototype.editarPerfil = function (idPerfil) {
        var perfil = this._redeSocial.consultarPerfil(idPerfil);
        if (perfil) {
            console.log("Perfil encontrado. Você pode editar o nome e/ou o e-mail.");
            // Pergunte ao usuário qual campo deseja editar
            var opcao = input("Digite 'N' para editar o nome ou 'E' para editar o e-mail (ou qualquer outra tecla para sair): ");
            if (opcao === 'N') {
                // Edite o nome
                var novoNome = input("Digite o novo nome: ");
                perfil.editarNome(novoNome);
                console.log("Nome editado com sucesso.");
            }
            else if (opcao === 'E') {
                // Edite o e-mail
                var novoEmail = input("Digite o novo e-mail: ");
                perfil.editarEmail(novoEmail);
                console.log("E-mail editado com sucesso.");
            }
            else {
                console.log("Edição de perfil cancelada.");
            }
        }
        else {
            console.log("Perfil não encontrado.");
        }
    };
    App.prototype.consultarPostagensPorData = function (dataConsulta) {
        var postagens = this._redeSocial.consultarPostagens();
        var postagensFiltradas = postagens.filter(function (postagem) {
            var postagemDate = postagem.data;
            return (postagemDate.getUTCFullYear() === dataConsulta.getUTCFullYear() &&
                postagemDate.getUTCMonth() === dataConsulta.getUTCMonth() &&
                postagemDate.getUTCDate() === dataConsulta.getUTCDate());
        });
        this._redeSocial.exibirPostagens(postagensFiltradas);
        return postagensFiltradas;
    };
    App.prototype.listarTodosOsPerfis = function () {
        this._redeSocial.listarTodosOsPerfis();
    };
    //questão 8
    App.prototype.exibirPostagensPopulares = function () {
        var postagens = this._redeSocial.consultarPostagens();
        var postagensPopulares = { postagens: [], postagensAvancadas: [] };
        for (var _i = 0, postagens_2 = postagens; _i < postagens_2.length; _i++) {
            var postagem = postagens_2[_i];
            if (postagem instanceof Postagem && postagem.ehPopular()) {
                postagensPopulares.postagens.push(postagem);
            }
            else if (postagem instanceof PostagemAvancada && postagem.ehPopular()) {
                postagensPopulares.postagensAvancadas.push(postagem);
            }
        }
        // Mensagem de exibição
        console.log("Postagens Populares:");
        console.log("-----------------------------------------------------------------");
        console.log("Postagens:");
        for (var _a = 0, _b = postagensPopulares.postagens; _a < _b.length; _a++) {
            var postagem = _b[_a];
            console.log("ID: ".concat(postagem.id, ", Texto: ").concat(postagem.texto, ", Curtidas: ").concat(postagem.curtidas, ", Descurtidas: ").concat(postagem.descurtidas));
        }
        console.log("-----------------------------------------------------------------");
        console.log("Postagens Avançadas:");
        for (var _c = 0, _d = postagensPopulares.postagensAvancadas; _c < _d.length; _c++) {
            var postagemAvancada = _d[_c];
            console.log("ID: ".concat(postagemAvancada.id, ", Texto: ").concat(postagemAvancada.texto, ", Curtidas: ").concat(postagemAvancada.curtidas, ", Descurtidas: ").concat(postagemAvancada.descurtidas, ", Visualiza\u00E7\u00F5es Restantes: ").concat(postagemAvancada.visualizacoesRestantes));
        }
        return postagensPopulares;
    };
    // letra b (q8)
    App.prototype.exibirHashtagsPopulares = function () {
        var postagens = this._redeSocial.consultarPostagens();
        var hashtagsContagem = new Map();
        for (var _i = 0, postagens_3 = postagens; _i < postagens_3.length; _i++) {
            var postagem = postagens_3[_i];
            if (postagem instanceof PostagemAvancada) {
                for (var _a = 0, _b = postagem.hashtags; _a < _b.length; _a++) {
                    var hashtag = _b[_a];
                    if (hashtagsContagem.has(hashtag)) {
                        hashtagsContagem.set(hashtag, (hashtagsContagem.get(hashtag) || 0) + 1);
                    }
                    else {
                        hashtagsContagem.set(hashtag, 1);
                    }
                }
            }
        }
        var hashtagsPopulares = [];
        var maxRepeticoes = 0;
        hashtagsContagem.forEach(function (repeticoes, hashtag) {
            if (repeticoes > maxRepeticoes) {
                hashtagsPopulares.length = 0; // Limpar o array se encontrarmos uma hashtag mais popular
                hashtagsPopulares.push(hashtag);
                maxRepeticoes = repeticoes;
            }
            else if (repeticoes === maxRepeticoes) {
                hashtagsPopulares.push(hashtag);
            }
        });
        return hashtagsPopulares;
    };
    //testando os métodos da questão 8
    App.prototype.exibirMenu = function () {
        var escolha;
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
            console.log("9. Exibir Postagens Por Hashtag");
            console.log("10. Exibir Postagens Populares"); // questão 8 
            console.log("11. Exibir Hashtag Populares"); // questão 8
            console.log("12. Remover Postagem"); // letra c (q8)
            console.log("13. Editar Perfil"); // letra c (q8)
            console.log("14. Consultar postagens por data"); // letra c (q8)
            console.log("15. Listar todos os perfis"); // letra c (q8)
            console.log("0. Sair");
            escolha = parseInt(input("Escolha uma opção: "));
            if (escolha === 1) {
                var id = input("Digite o ID do perfil: ");
                var nome = input("Digite o nome do perfil: ");
                var email = input("Digite o email do perfil: ");
                var perfil = new Perfil(id, nome, email);
                this._redeSocial.incluirPerfil(perfil);
            }
            else if (escolha === 2) {
                // Não encontra perfil
                var id = input("Digite o ID do perfil: ");
                var perfilConsultado = this._redeSocial.consultarPerfil(id);
                if (perfilConsultado) {
                    console.log("ID: ".concat(perfilConsultado.id, ", Nome: ").concat(perfilConsultado.nome, ", Email: ").concat(perfilConsultado.email));
                }
                else {
                    console.log("Perfil não encontrado.");
                }
            }
            else if (escolha === 3) {
                //não encontra perfil
                var idPostagem = input("Digite o ID da postagem: ");
                var texto = input("Digite o texto da postagem: ");
                var idPerfil = input("Digite o ID do perfil da postagem: ");
                // Adicionando a escolha do tipo de postagem
                var tipoPostagem = input("Digite 'A' para Postagem Avançada ou 'C' para Postagem Comum: ");
                var hashtags = input("Digite as hashtags da postagem separadas por vírgula: ").split(",");
                var visualizacoesRestantes = parseInt(input("Digite o número de visualizações restantes da postagem: "));
                var perfilPostagem = this._redeSocial.consultarPerfil(idPerfil);
                if (perfilPostagem) {
                    var data = new Date(); // Obtém a data e hora atual
                    var postagem = void 0;
                    if (tipoPostagem.toUpperCase() === 'A') {
                        postagem = new PostagemAvancada(idPostagem, texto, perfilPostagem, hashtags, visualizacoesRestantes, data);
                    }
                    else if (tipoPostagem.toUpperCase() === 'C') {
                        postagem = new Postagem(idPostagem, texto, perfilPostagem, data);
                    }
                    else {
                        console.log("Tipo de postagem inválido. A postagem não foi incluída.");
                        continue; // Volta ao início do loop para evitar a execução do código abaixo
                    }
                    this._redeSocial.incluirPostagem(postagem);
                }
                else {
                    console.log("Perfil não encontrado. Não foi possível incluir a postagem.");
                }
            }
            else if (escolha === 4) {
                var postagens = this._redeSocial.consultarPostagens();
                var postagensExibiveis = postagens.filter(function (postagem) { return postagem instanceof PostagemAvancada ? postagem.visualizacoesRestantes > 0 : true; });
                this._redeSocial.exibirPostagens(postagensExibiveis);
            }
            else if (escolha === 5) {
                var idPerfil = input("Digite o ID do perfil para exibir postagens: ");
                this._redeSocial.exibirPostagensPorPerfil(idPerfil);
            }
            else if (escolha === 6) {
                var idPostagem = input("Digite o ID da postagem a ser curtida: ");
                this._redeSocial.curtir(idPostagem);
            }
            else if (escolha === 7) {
                var idPostagem = input("Digite o ID da postagem para descurtir: ");
                this._redeSocial.descurtir(idPostagem);
            }
            else if (escolha === 8) {
                var idPostagem = input("Digite o ID da postagem para decrementar visualizações: ");
                var postagens = this._redeSocial.consultarPostagens(idPostagem);
                if (postagens.length > 0 && postagens[0] instanceof PostagemAvancada) {
                    var postagemAvancada = postagens[0];
                    if (postagemAvancada.visualizacoesRestantes > 0) {
                        this._redeSocial.decrementarVisualizacoes(postagemAvancada);
                    }
                    else {
                        console.log("A postagem não pode mais ser apresentada.");
                    }
                }
                else {
                    console.log("Postagem não encontrada ou não é uma postagem avançada.");
                }
            }
            else if (escolha === 9) {
                var hashtagExibir = input("Digite a hashtag para exibir postagens: ");
                var postagensPorHashtag = this._redeSocial.exibirPostagensPorHashtag(hashtagExibir);
                postagensPorHashtag.forEach(function (p) {
                    console.log("ID: ".concat(p.id, ", Texto: ").concat(p.texto, ", Curtidas: ").concat(p.curtidas, ", \n                    Descurtidas: ").concat(p.descurtidas, ", Hashtags: ").concat(p.hashtags.join(", "), ", \n                    Visualiza\u00E7\u00F5es Restantes: ").concat(p.visualizacoesRestantes));
                });
            }
            else if (escolha === 10) {
                this.exibirPostagensPopulares();
            }
            else if (escolha === 11) {
                var hashtagsPopulares = this.exibirHashtagsPopulares();
                console.log("Hashtags mais populares:", hashtagsPopulares);
                // métodos da letra c da questão 8
            }
            else if (escolha === 12) {
                var idPostagem = input("Digite o ID da postagem para remover: ");
                app.removerPostagem(idPostagem);
                console.log("Postagem removida com sucesso.");
            }
            else if (escolha === 13) {
                var idPerfil = input("Digite o ID do perfil que deseja editar: ");
                app.editarPerfil(idPerfil);
                console.log("Perfil editado com sucesso.");
            }
            else if (escolha === 14) {
                var dataConsulta = new Date(input("Digite a data de consulta (AAAA-MM-DD): "));
                var postagensPorData = app.consultarPostagensPorData(dataConsulta);
                app._redeSocial.exibirPostagens(postagensPorData);
            }
            else if (escolha === 15) {
                app.listarTodosOsPerfis();
            }
            else if (escolha === 0) {
                console.log("Saindo do menu...");
                break;
            }
            else {
                console.log("Opção inválida. Tente novamente.");
            }
        }
    };
    return App;
}());
var app = new App();
app.exibirMenu();
