// 01 - Criar as classes
class Perfil{ // a) Perfil
    private _id : number
    private _nome : string
    private _email : string

   constructor (_id : number, _nome : string, _email: string){
        this._id = _id
        this._nome = _nome
        this._email = _email
   }
    
    get id() : number{
        return this._id
    }

    get nome() : string{
        return this._nome
    }

    get email() : string{    
        return this._email
    }

}

class Postagem{ // b) Postagem
    private _id : number
    private _curtidas : number
    private _texto : string
    private _descurtidas : number
    private _perfil : Perfil
    private _data : Date

    constructor (_id : number, _curtidas : number, _texto : string, _descurtidas : number, _perfil : Perfil, _data : Date){
        this._id = _id
        this._curtidas = _curtidas
        this._texto = _texto
        this._descurtidas = _descurtidas
        this._perfil = _perfil
        this._data = _data
    }

    get id() : number{
        return this._id
    }
    get curtidas() : number{
        return this._curtidas
    }
    get texto() : string{        
        return this._texto
    }
    get descurtidas() : number{
        return this._descurtidas
    }

    get perfil() : Perfil{
        return this._perfil
    }

    get data() : Date{
        return this._data
    }

    // 2) Criar os métodos
    //a)
    curtir() : void{
        this._curtidas++
    }

    descurtir() : void{
        this._descurtidas++
    }

    ehPopular() : boolean{
        return this._curtidas > 1.5 * this._descurtidas
    }
}

class PostagemAvancada extends Postagem{ // c) PostagemAvancada
    private _hashtags : string[]
    private _visualizacoesRestantes : number

    constructor (id : number, curtidas : number, texto : string, descurtidas : number, perfil : Perfil, data : Date, hashtags : string[], visualizacoesRestantes : number){
        super(id, curtidas, texto, descurtidas, perfil, data)
        this._hashtags = hashtags
        this._visualizacoesRestantes = visualizacoesRestantes
    }

    get hashtags() : string[]{
        return this._hashtags
    }

    get visualizacoesRestantes() : number{
        return this._visualizacoesRestantes
    }

    // 2) b)
    adicionarHashtag(hashtag : string) : void{
        this._hashtags.push(hashtag)
    }

    existeHashtag(hashtag : string) : boolean{
        return this._hashtags.includes(hashtag)
    }

    decrementarVisualizacoes() : void{
        this._visualizacoesRestantes--
    }
}

// 3) CLASSE REPOSITORIO DE PERFIS
class RepositorioDePerfis{
    //a) criar o atributo
    private _perfis : Perfil[]
    
    constructor(perfis : Perfil[]){
        this._perfis = perfis
    }

    get perfis() : Perfil[]{
        return this._perfis
    }

    // b) método incluir
    incluir(perfil : Perfil) : void{
        this._perfis.push(perfil)
    }

    // c) método consultar
    consultar(id : number, nome : string, email : string) : Perfil | undefined{
        return this._perfis.find(perfil => perfil.id == id || perfil.nome == nome || perfil.email == email)
    }    
}

// 4) criar a classe RepositorioDePostagens
class RepositorioDePostagens{
    // a) criar o atributo
    private _postagens : Postagem[]
   

    constructor(_postagens : Postagem[], _postagensAvancadas : PostagemAvancada[]){
        this._postagens = _postagens
        this._postagensAvancadas = _postagensAvancadas
    }

    get postagens() : Postagem[]{   
        return this._postagens
    }

    get postagensAvancadas() : PostagemAvancada[]{
        return this._postagensAvancadas
    }

    incluir(postagens : Postagem) : void{
        this._postagens.push(postagens)
    }

    consultar(id : number, texto : string, perfil : Perfil, hashtag : string) : Postagem | undefined{
        return this._postagens.find(postagem => postagem.id == id || postagem.texto == texto || postagem.perfil == perfil) || this._postagensAvancadas.find(PostagemAvancada => PostagemAvancada.hashtags == hashtag)
    }
}