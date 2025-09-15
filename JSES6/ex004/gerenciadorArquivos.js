
const fs = require('fs/promises');
const path = require('path');
const Produto = require('./Produto'); 

const caminhoArquivo = path.join(__dirname, 'produtos.json');

async function carregarProdutos() {
    try {
        const dados = await fs.readFile(caminhoArquivo, 'utf8');
        const produtosData = JSON.parse(dados);
        
        return produtosData.map(p => new Produto(p.nome, p.preco, p.quantidadeEstoque));
    } catch (erro) {
        console.error('Falha ao carregar os produtos do arquivo:', erro);
        return []; 
    }
}

module.exports = { carregarProdutos };