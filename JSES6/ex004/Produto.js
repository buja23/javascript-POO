// ecommerce-simulacao/Produto.js

class Produto {
    constructor(nome, preco, quantidadeEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
    }

    exibirInfo() {
        console.log(`--> Produto Encontrado: ${this.nome} | Preço: R$${this.preco.toFixed(2)} | Estoque: ${this.quantidadeEstoque}`);
    }
}

module.exports = Produto;