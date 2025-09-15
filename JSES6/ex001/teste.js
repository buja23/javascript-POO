const Aluno = require("./Aluno")
const Turma = require("./Turma"); // importa o módulo todo como objeto

const a1 = new Aluno(1, "bardiche","12/03/2005", [1, 3, 6, 8, 9])
const a2 = new Aluno(2, "bispao", "21/05/1993", [10,7,9,8,8])
const a3 = new Aluno(3, "artu", "23/12/2004", [2,5,8,3,10])

Turma.adicionarAluno(a1)
Turma.adicionarAluno(a2)
Turma.adicionarAluno(a3)

console.log("📊 Média aluno 1:", a1.calcularMediaAluno());
console.log("📊 Média da turma:", Turma.calcularMediaTurma());
console.log("✅ Aprovados:", Turma.filtrarAprovados());
console.log("❌ Reprovados:", Turma.filtrarDesaprovados());
console.log("🔍 Buscar RA 3:", Turma.buscarRa(3));
console.log("🔍 Buscar RA 1:", Turma.buscarRa(1));
console.log("🔤 Ordenados por nome decrescente:", Turma.ordenarProNomeDecrecente());