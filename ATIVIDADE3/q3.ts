function saudacao(nome: string, pronome: string = "Sr"): void {
    console.log(`${pronome}. ${nome}`)
}

const nome = "Sávia" 
const pronomeTratamento = "Sra" 

saudacao(nome, pronomeTratamento) 
