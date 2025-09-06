
const alunos = require("./Alunos.json")
const fs = require("fs").promises;

async function salvarAlunos(){
   await fs.writeFile("Alunos.json", JSON.stringify(alunos, null, 2))
   console.log("aluno salvo com sucesso!!")
}