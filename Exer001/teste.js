const Fisica = require("./Fisica");
const Juridica = require("./juridica");

// Instanciando as classes
const p1 = new Fisica("fisica1", "5123123", 2823.00);
const p2 = new Fisica("fisica2", "73421312", 5000.00);
const j1 = new Juridica("juridica", "2341541", 4000.00);

// --- Realizando os testes e imprimindo os resultados ---

console.log("--- Teste Pessoa Física p1 ---");
const atributosP1 = p1.mostrarAtributos();
console.log("Atributos:", atributosP1); // Saída dos atributos
const impostoP1 = p1.calcularImposto();
console.log(`Imposto a pagar: R$ ${impostoP1.toFixed(2)}`); // Saída do imposto
console.log("\n");

console.log("--- Teste Pessoa Física p2 ---");
const atributosP2 = p2.mostrarAtributos();
console.log("Atributos:", atributosP2);
const impostoP2 = p2.calcularImposto();
console.log(`Imposto a pagar: R$ ${impostoP2.toFixed(2)}`);
console.log("\n");

console.log("--- Teste Pessoa Jurídica j1 ---");
const atributosJ1 = j1.mostrarAtributos();
console.log("Atributos:", atributosJ1);
const impostoJ1 = j1.calcularImposto();
console.log(`Imposto a pagar: R$ ${impostoJ1.toFixed(2)}`);