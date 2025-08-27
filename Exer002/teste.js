const mercado = require('./Mercado')
const produto = require('./Produto')

const p1 = new produto(1, "Arroz", "Arroz branco tipo 1", "Tio João", 50, 20.00)
const p2 = new produto(2, "Feijão", "Feijão carioca", "Camil", 30, 8.00)
const p3 = new produto(3, "Macarrão", "Macarrão espaguete", "Barilla", 20, 12.00)

const m1 = new mercado("Mercado Central", "12.345.678/0001-90", "Rua Principal, 123", "@mercadocentral", [])
console.log("--- Teste Produto p1 ---");
p1.imprimir()
p1.aplicarDesconto(10)
console.log("Após aplicar desconto de 10%:")
p1.imprimir()
console.log("\n");

console.log("--- Teste Produto p2 ---");
p2.imprimir()
p2.aplicarDesconto(5)
console.log("Após aplicar desconto de 5%:")
p2.imprimir()
console.log("\n");

console.log("--- Teste Produto p3 ---");
p3.imprimir()
p3.aplicarDesconto(15)
console.log("Após aplicar desconto de 15%:")
p3.imprimir()
console.log("\n");

console.log("--- Teste mercado p2 ---");
m1.adicionarProduto(p1)
m1.adicionarProduto(p2)
m1.adicionarProduto(p3)
m1.imprimirProdutos()
console.log(`Valor total do mercado: R$ ${m1.calcularValorMercado().toFixed(2)}`);
console.log("\n");
m1.excluirProduto()
m1.imprimirProdutos()
console.log(`Valor total do mercado após excluir um produto: R$ ${m1.calcularValorMercado().toFixed(2)}`);
console.log("\n");
