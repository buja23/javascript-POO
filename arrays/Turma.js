const Aluno = require("./Aluno");


let alunos = []

 function adicionarAluno(aluno){
    alunos.push(aluno)

}

 function calcularMediaTurma(){
    const MediasTurma = alunos.map(a => a.calcularMediaAluno())
    const soma = MediasTurma.reduce((a,b) => a + b , 0)
    return soma / alunos.length
}

 function filtrarAprovados(){
    return alunos.filter(a => a.calcularMediaAluno() > 6)
}

 function filtrarDesaprovados(){
    return alunos.filter(a => a.calcularMediaAluno() < 6)
}

 function buscarRa(ra){
    return alunos.find(a => a.ra === ra)
}

 function ordenarProNomeDecrecente(){
    return alunos.sort((a, b) => b.nome.localeCompare(a.nome))
}

 function getAlunos(){
    return alunos
}

module.exports = {
    adicionarAluno,
    calcularMediaTurma,
    filtrarAprovados,
    filtrarDesaprovados,
    buscarRa,
    ordenarProNomeDecrecente,
    getAlunos
};