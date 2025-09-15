class Aluno{
    constructor(ra, nome, datanasc, notas = []){
        this.ra = ra
        this.nome = nome
        this.datanasc = datanasc
        this.notas = notas
    }

    calcularMediaAluno(){
        return this.notas.reduce((a,b) => a + b, 0) / this.notas.length
    }

    exibirDados(){
        console.log(`ra: ${this.ra}`)
        console.log(`nome: ${this.nome}`)
        console.log(`Data de nascimento: ${this.datanasc}`)
        console.log(`Notas: ${this.notas}`)
    }
}


module.exports = Aluno;
