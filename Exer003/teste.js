const diretor = require("./Diretor")
const gerente = require("./Gerente")
const Funcionario = require("./Funcionario")

const func1 = new Funcionario("João", "123.456.789-00", 3000.00, 2)
const ger1 = new gerente("Maria", "987.654.321-00", 5000.00, 5, "Vendas")
const dir1 = new diretor("Ana", "111.222.333-44", 8000.00, 10, "TI", 20000.00)
console.log("--- Teste Funcionário ---");
func1.imprimir()
func1.calcularBonus()
func1.imprimir()
console.log("\n");
console.log("--- Teste Gerente ---");
ger1.imprimir()
ger1.calcularBonus(10)
ger1.imprimir()
console.log("\n");
console.log("--- Teste Diretor ---");
dir1.imprimir()
dir1.calcularBonus()
dir1.imprimir()
console.log("\n");

